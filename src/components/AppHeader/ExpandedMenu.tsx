import { ChangeEvent, FC} from "react";
import styled from "styled-components";

import { ExpandedMenuItem } from "./ExpandedMenuItem";
import { ExpandedMenuAccountTile } from "./ExpandedMenuAccountTile";

import { border, cannotSelect, inputBorder } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import {
} from "../../styledHelpers/commonVariables";

import { User } from "../../models/types/User";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { expandedMenuFilterChange } from "../../redux/actions/filterComponentsActions";

const FilterInput = styled.input`
  width: 182px;
  font-size: ${fontSize[14]};
  color: ${Colors.fontblue};
  background: ${Colors.white};
  height: 28px;
  padding-top: 4px;
  padding-left: 10px;
  outline: none;
  outline: none;
  ${inputBorder()};
  text-align: left;
  letter-spacing: 1px;
`;

const List = styled.ul`
  padding: 0;
`;

const ListTitle = styled.div`
  height: 20px;
  width: 178px;
  font-size: ${fontSize[14]};
  padding-top: 10px;
`;

const Menu = styled.div`
  position: absolute;
  top: 41px;
  width: 200px;
  padding: 10px;
  background: white;
  ${border(1, "solid", Colors.lightgray)};
  ${cannotSelect()};
`;

export const commonMenuElements = {
  MenuImgWrapper: styled.div`
    position: absolute;
    left: 10px;
    width: 40px;
    height: 32px;
  `,
  MenuImg: styled.img`
    position: relative;
    top: 4px;
  `,
  MenuImgDescription: styled.div`
    position: relative;
    left: 40px;
    top: 10px;
  `,
};

export interface ExpandedMenuProps {
  user: User;
}

export const ExpandedMenu: FC<ExpandedMenuProps> = (props) => {
  const filterInputText = useAppSelector((state) => state.filterComponents.expandedMenuFilter);
  const dispatch = useAppDispatch();
  const handleFilterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(expandedMenuFilterChange(e.target.value));
  };

  return (
    <Menu>
      <FilterInput
        placeholder="Filter..."
        value={filterInputText}
        onChange={handleFilterInputChange}
      />
      <List>
        <ListTitle>Platform</ListTitle>
        {("Home".toLowerCase().includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/home"
            iconSrc="./media/icons/house.png"
            text="Home"
          />
        ))}
        {"Publications"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/publications"
            iconSrc="./media/icons/publications.png"
            text="Publications"
          />
        )}
        {"People".toLowerCase().includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/people"
            iconSrc="./media/icons/people.png"
            text="People"
          />
        )}
        {"Entities".toLowerCase().includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/entities"
            iconSrc="./media/icons/entities2.png"
            text="Entities"
          />
        )}
        {"Administrations"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/administrations"
            iconSrc="./media/icons/administration.png"
            text="Administrations"
          />
        )}
      </List>
      <List>
        <ListTitle>Workspaces</ListTitle>
        {"Client contract"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/workspaces"
            iconSrc="./media/icons/comments.png"
            text="Client contract"
          />
        )}
        {"Supplier contract"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/workspaces"
            iconSrc="./media/icons/comments.png"
            text="Supplier contract"
          />
        )}
        {"Corporate".toLowerCase().includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/workspaces"
            iconSrc="./media/icons/house.png"
            text="Corporate"
          />
        )}
        {"Group Norms"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/workspaces"
            iconSrc="./media/icons/entities.png"
            text="Group Norms"
          />
        )}
        {"Real estate contracts"
          .toLowerCase()
          .includes(filterInputText.toLowerCase()) && (
          <ExpandedMenuItem
            to="/workspaces"
            iconSrc="./media/icons/comments.png"
            text="Real estate contracts"
          />
        )}
      </List>
      <ExpandedMenuAccountTile user={props.user} />
    </Menu>
  );
};
