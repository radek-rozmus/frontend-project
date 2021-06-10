import { ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";

import { border, inputBorder, Wrapper } from "../../../../../styledHelpers/Components";
import { ResumeWorkDimensions } from "../../../../../styledHelpers/commonVariables";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

import { content } from "./content";

import { WorkTile } from "./WorkTile";
import { PageButtons } from "./PageButtons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../redux/hooks/hooks";
import { resumeWorkFilterChange } from "../../../../../redux/actions/filterComponentsActions";
import { setFilterFollowed, setPage } from "../../../../../redux/actions/resumeWorkActions";
import { Colors } from "../../../../../styledHelpers/Colors";
import { FilterIconSVG } from "../../../../../styledHelpers/Icons";
import useDropdown from "react-dropdown-hook";

const ResumeWorkWrapper = styled(Wrapper)`
  position: absolute;
  top: 752px;
  width: 400px;
  overflow: hidden;
  width: 100%;
  display: block;
  padding-bottom: 100px;
`;

const ResumeWorkTitle = styled(Wrapper)`
  position: absolute;
  top: ${ResumeWorkDimensions};
  left: 16px;
  height: 20px;
  font-size: ${fontSize[20]};
  width: 100%;
  justify-content: left;
`;

const ResumeWorkContent = styled.div`
  width: 100%;
  position: relative;
  top: 40px;
`;

const InputWrapper = styled.div`
  position: absolute;
  right: 0;
  top: ${ResumeWorkDimensions};
  width: 400px;
  height: 36px;
`;

const ResumeWorkFilterInput = styled.input`
  position: absolute;
  left: 0;
  height: 28px;
  font-size: ${fontSize[14]};
  background: ${Colors.white};
  outline: none;
  padding-left: 12px;
  letter-spacing: 1px;

  ${inputBorder()};
  width: 228px;
`;

const SearchImg = styled.img`
  left: 216px;
  top: 8px;

  position: absolute;
  display: inline;
`;

const FilterButton = styled.button`
  position: absolute;
  right: 0;
  height: 34px;
  font-size: ${fontSize[16]};
  background: ${Colors.backgroundgray};
  color: ${Colors.blue};
  outline: none;
  letter-spacing: 1px;
  border: none;
  width: 150px;
  font-weight: 600;
  text-align: left;
  padding-left: 24px;
  cursor: pointer;
`;
const FilterIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 7px;
`;
const FilterToggledComponent = styled.ul`
  position: relative;
  left: -2px;
  width: 148px;
  top: 34px;
  z-index: 2;
  background: ${Colors.backgroundgray};
  ${border(1, "solid", Colors.lightgray)};
  overflow: hidden;
  border-radius: 3px;
`;
const FilterToggledComponentItem = styled.li`
  position: relative;
  max-width: 148px;
  z-index: 2;
  color: ${Colors.blue};
  background: ${Colors.backgroundgray};
  cursor: pointer;
  padding: 12px 0 12px 12px;
  transition: all .16s ease-in-out;
  &:hover{
    padding-left: 14px;
    color: ${Colors.white};
  background: ${Colors.blue};
  }
`;
const FilterComponentWrapper = styled.div`
  position: absolute;
  right: 0;
  max-width: 148px;
`;

export const ResumeWork: FC = () => {
  const localState = useAppSelector((state) => {
    const page = state.resumeWork.page;
    const filterInputText = state.filterComponents.resumeWorkFilter;
    const filterFollowed = state.resumeWork.filterFollowed;
    const followed = state.userAccount.followed;
    return { page, filterInputText, filterFollowed, followed };
  });

  const [dropdownWrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandle = () => {
    toggleDropdown();
  };

  const dispatch = useAppDispatch();

  const contentFiltered = content.filter((item) => {
    return item.title
      .toLowerCase()
      .includes(localState.filterInputText.toLowerCase());
  });

  const contentFilteredFollowed = contentFiltered.filter((item) => {
    return localState.followed.includes(item.id);
  });

  const howManyPages = localState.filterFollowed?
  Math.ceil(contentFilteredFollowed.length / 10):
  Math.ceil(contentFiltered.length / 10)
  ;

  const handleFilterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(resumeWorkFilterChange(e.target.value));
    if(localState.page !== 1) dispatch(setPage(1));
    
  };

  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };
  const handleFilterFollowedClick = () => {
    if (!localState.filterFollowed) {
      dispatch(setFilterFollowed(true));
      dispatch(setPage(1));
    }
    toggleDropdown();
  };
  const handleFilterAllClick = () => {
    if (!!localState.filterFollowed) {
      dispatch(setFilterFollowed(false));
      dispatch(setPage(1));
    }
    toggleDropdown();
  };

  return (
    <ResumeWorkWrapper>
      <ResumeWorkTitle>Resume your work</ResumeWorkTitle>
      <InputWrapper>
        <ResumeWorkFilterInput
          type="text"
          value={localState.filterInputText}
          onChange={handleFilterInputChange}
          placeholder="Filter by title..."
          ref={searchInput}
        />
        <SearchImg src="./media/icons/search.png" onClick={handleSearchClick} />
        <FilterComponentWrapper ref={dropdownWrapperRef}>
          <FilterButton onClick={menuHandle}>
            {!!localState.filterFollowed?"Followed":"All"}
            <FilterIcon>
              <FilterIconSVG width={18} height={18} fill={Colors.blue} />
            </FilterIcon>
          </FilterButton>
          {dropdownOpen && (
            <FilterToggledComponent>
              <FilterToggledComponentItem onClick={handleFilterFollowedClick}>Followed</FilterToggledComponentItem>
              <FilterToggledComponentItem onClick={handleFilterAllClick}>All</FilterToggledComponentItem>
            </FilterToggledComponent>
          )}
        </FilterComponentWrapper>
      </InputWrapper>
      <ResumeWorkContent>
        {!!localState.filterFollowed?
        (contentFilteredFollowed.map((item, index) => {
          console.log(contentFilteredFollowed)
          return (
            index <= localState.page * 10 - 1 &&
            index >= (localState.page - 1) * 10 && (
              <WorkTile title={item.title} text={item.text} key={item.id} id = {item.id} />
            )
          );
        }))
        :(contentFiltered.map((item, index) => {
          return (
            index <= localState.page * 10 - 1 &&
            index >= (localState.page - 1) * 10 && (
              <WorkTile title={item.title} text={item.text} key={item.id} id={item.id} />
            )
          );
        }))}
      </ResumeWorkContent>
      <PageButtons page={localState.page} numberOfPages={howManyPages} />
    </ResumeWorkWrapper>
  );
};
