import { ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";
import {
  border,
  inputBorder,
  Wrapper,
} from "../../../../styledHelpers/Components";

import { FiSettings, FiMenu, FiFilter } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import ListAltIcon from '@material-ui/icons/ListAlt';
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import AdjustIcon from "@material-ui/icons/Adjust";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import { Button, ButtonGroup } from "@material-ui/core";
import { Colors } from "../../../../styledHelpers/Colors";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import useDropdown from "react-dropdown-hook";
import { entitiesFilterChange } from "../../../../redux/actions/filterComponentsActions";
import {
  changeEntitiesDisplayStyle,
  toggleEntitiesFullscreen,
  toggleEntitiesSort,
  toggleEntitiesSubmenu,
} from "../../../../redux/actions/entitiesPageActions";

const InnerWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  font-size: ${fontSize[18]};
  padding-left: 20px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
  height: 48px;
  font-size: ${fontSize[18]};
`;
const SearchAndFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  height: 48px;
  font-size: ${fontSize[18]};
  gap: 20px;
`;

const EntitiesFilterInput = styled.input`
  height: 28px;
  font-size: ${fontSize[16]};
  background: ${Colors.white};
  outline: none;
  padding-left: 12px;
  letter-spacing: 1px;
  ${inputBorder()};
`;
const FilterToggledComponent = styled.ul`
  position: absolute;
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
  transition: all 0.16s ease-in-out;
  &:hover {
    padding-left: 14px;
    color: ${Colors.white};
    background: ${Colors.blue};
  }
`;
const FilterComponentWrapper = styled.div`
  position: relative;
`;

export interface EntitiesMenuProps {}

const EntitiesMenu: FC<EntitiesMenuProps> = () => {
  const localState = useAppSelector((state) => {
    const entitiesFilter = state.filterComponents.entitiesFilter;
    const filterCategory = state.entities.filterCategory;
    const isSubmenuOpen = state.entities.isSubmenuOpen;

    const displayStyle = state.entities.displayStyle;
    return { entitiesFilter, filterCategory, isSubmenuOpen, displayStyle };
  });

  const [dropdownWrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandle = () => {
    toggleDropdown();
  };

  const dispatch = useAppDispatch();

  // const contentFiltered = localState.content.filter((item: Post) => {
  //   return item.title
  //     .toLowerCase()
  //     .includes(localState.filterInputText.toLowerCase());
  // });

  // const contentFilteredFollowed = contentFiltered.filter((item: Post) => {
  //   return localState.followed.includes(item.id);
  // });

  const handleFilterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(entitiesFilterChange(e.target.value));
  };

  const searchInput = useRef<HTMLInputElement>(null);

  const handleFilterFollowedClick = () => {
    toggleDropdown();
  };

  const handleFilterAllClick = () => {
    toggleDropdown();
  };

  //menu methods

  const handleToggleFullscreen = () => {
    dispatch(toggleEntitiesFullscreen());
  };
  const handleToggleSort = () => {
    dispatch(toggleEntitiesSort());
  };
  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  const handleToggleDisplayStyle = () => {
    dispatch(changeEntitiesDisplayStyle());
  };
  const handleToggleSubmenu = () => {
    dispatch(toggleEntitiesSubmenu());
  };

  return (
    <InnerWrapper>
      <Title>
        Entities
        <FiSettings style={{ paddingLeft: "16px" }} />
      </Title>
      <ButtonGroup
        style={{
          borderRadius: "5px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "20px",
        }}
      >
        <Button
          startIcon={localState.displayStyle ? <BorderAllIcon /> : <ListAltIcon/>}
          style={{
            color: Colors.blue,
            backgroundColor: Colors.backgroundgray,
            textTransform: "none",
            fontSize: fontSize[16],
            height: "36px",
            fontWeight: 600,
            border: `1px solid ${Colors.lightgray}`,
          }}
          onClick={handleToggleDisplayStyle}
        >
          {localState.displayStyle ? 'Mozaic': 'List'}
        </Button>
        <Button
          style={{
            color: Colors.gray,
            backgroundColor: Colors.white,
            textTransform: "none",
            fontSize: fontSize[16],
            height: "36px",
            fontWeight: 600,
            width: "60px",
            border: `1px solid ${Colors.lightgray}`,
          }}
        >
          <FiMenu />
        </Button>
      </ButtonGroup>
      <Menu>
        <Button
          style={{
            color: Colors.blue,
            backgroundColor: Colors.backgroundgray,
            textTransform: "none",
            fontSize: fontSize[16],
            height: "36px",
            fontWeight: 600,
            border: `1px solid ${Colors.lightgray}`,
            padding: "0 16px",
          }}
          startIcon={<AdjustIcon />}
          endIcon={<ArrowDropDownIcon />}
        >
          All
        </Button>
        <ButtonGroup>
          <Button
            style={{
              color: Colors.gray,
              backgroundColor: Colors.white,
              textTransform: "none",
              fontSize: fontSize[16],
              height: "36px",
              fontWeight: 600,
              border: "none",
            }}
            onClick={handleToggleSubmenu}
          >
            <MoreHorizIcon />
          </Button>
          {localState.isSubmenuOpen && (
            <>
              <Button
                style={{
                  color: Colors.gray,
                  backgroundColor: Colors.white,
                  textTransform: "none",
                  fontSize: fontSize[14],
                  height: "36px",
                  border: "none",
                  borderLeft: `1px solid ${Colors.lightgray}`,
                }}
                startIcon={<SortByAlphaIcon />}
                onClick={handleToggleSort}
              >
                Sort
              </Button>
              <Button
                style={{
                  color: Colors.gray,
                  backgroundColor: Colors.white,
                  textTransform: "none",
                  fontSize: fontSize[14],
                  height: "36px",
                  border: "none",
                }}
                startIcon={<FiFilter />}
              >
                Filter
              </Button>
              <Button
                style={{
                  color: Colors.gray,
                  backgroundColor: Colors.white,
                  textTransform: "none",
                  fontSize: fontSize[14],
                  height: "36px",
                  border: "none",
                  borderLeft: `1px solid ${Colors.lightgray}`,
                }}
                onClick={handleToggleFullscreen}
              >
                <FullscreenIcon />
              </Button>
              <Button
                style={{
                  color: Colors.gray,
                  backgroundColor: Colors.white,
                  textTransform: "none",
                  fontSize: fontSize[14],
                  height: "36px",
                  border: "none",
                  borderLeft: `1px solid ${Colors.lightgray}`,
                }}
                startIcon={<BiShare />}
                onClick={handleShareClick}
              >
                Share
              </Button>
            </>
          )}
        </ButtonGroup>
      </Menu>
      <SearchAndFilter>
        <EntitiesFilterInput
          type="text"
          value={localState.entitiesFilter}
          onChange={handleFilterInputChange}
          placeholder="Search..."
          ref={searchInput}
        />
        <FilterComponentWrapper ref={dropdownWrapperRef}>
          <Button
            style={{
              height: "34px",
              fontSize: fontSize[14],
              background: Colors.backgroundgray,
              color: Colors.blue,
              outline: "none",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "none",
              ...inputBorder(),
              borderWidth: "1px",
            }}
            endIcon={<FiFilter />}
            onClick={menuHandle}
          >
            {!!localState.filterCategory ? "Followed" : "All"}
          </Button>
          {dropdownOpen && (
            <FilterToggledComponent>
              <FilterToggledComponentItem onClick={handleFilterFollowedClick}>
                Followed
              </FilterToggledComponentItem>
              <FilterToggledComponentItem onClick={handleFilterAllClick}>
                All
              </FilterToggledComponentItem>
            </FilterToggledComponent>
          )}
        </FilterComponentWrapper>
      </SearchAndFilter>
    </InnerWrapper>
  );
};

export default EntitiesMenu;
