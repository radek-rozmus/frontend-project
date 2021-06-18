import { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../../../../styledHelpers/Components";

import { FiSettings, FiMenu, FiFilter } from "react-icons/fi";
import { BiShare} from "react-icons/bi";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import AdjustIcon from "@material-ui/icons/Adjust";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import { Button, ButtonGroup } from "@material-ui/core";
import { Colors } from "../../../../styledHelpers/Colors";

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
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: ${fontSize[18]};
`;

export interface EntitiesMenuProps {}

const EntitiesMenu: FC<EntitiesMenuProps> = () => {
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
          startIcon={<BorderAllIcon />}
          style={{
            color: Colors.blue,
            backgroundColor: Colors.backgroundgray,
            textTransform: "none",
            fontSize: fontSize[16],
            height: "36px",
            fontWeight: 600,
            border: `1px solid ${Colors.lightgray}`,
          }}
        >
          Mozaic
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
          >
            <MoreHorizIcon />
          </Button>
          <Button
            style={{
              color: Colors.gray,
              backgroundColor: Colors.white,
              textTransform: "none",
              fontSize: fontSize[14],
              height: "36px",
              border: 'none',
              borderLeft: `1px solid ${Colors.lightgray}`,
            }}
            startIcon={<SortByAlphaIcon/>}
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
              border: 'none',
            }}
            startIcon={<FiFilter/>}
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
              border: 'none',
              borderLeft: `1px solid ${Colors.lightgray}`,
            }}
          >
            <FullscreenIcon/>
          </Button>
          <Button
            style={{
              color: Colors.gray,
              backgroundColor: Colors.white,
              textTransform: "none",
              fontSize: fontSize[14],
              height: "36px",
              border: 'none',
              borderLeft: `1px solid ${Colors.lightgray}`,
            }}
            startIcon = {<BiShare/>}
          >
            Share
          </Button>
        </ButtonGroup>
      </Menu>
      <SearchAndFilter>SearchAndFilter</SearchAndFilter>
    </InnerWrapper>
  );
};

export default EntitiesMenu;
