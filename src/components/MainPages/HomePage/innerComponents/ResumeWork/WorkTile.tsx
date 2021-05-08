import { FC } from "react";
import styled from "styled-components";

import {
  Wrapper,
  border,
  boxShadow,
  cannotSelect,
} from "../../../../../styledHelpers/Components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks/hooks";
import { addFollow, removeFollow } from "../../../../../redux/actions/userAccountActions";

const WorkTileWrapper = styled(Wrapper)`
  position: relative;
  text-align: center;
  background-color: white;
  height: 140px;
  width: calc(100% - 2px);
  ${border(1, "solid", Colors.lightgray)};
  border-radius: 5px;
  ${boxShadow(0, 0, 10, -5)};
  margin-bottom: 12px;
  text-align: left;
  justify-content: left;
`;

const WorkTileTitle = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 30px;
  font-size: ${fontSize[18]};
  color: ${Colors.blue};
`;
const WorkTileContent = styled.div`
  position: absolute;
  top: 46px;
  left: 12px;
  font-size: ${fontSize[16]};
  color: ${Colors.fontblue};
  line-height: 150%;
  font-weight: 400;
  width: calc(100% - 24px);
`;
const WorkTileDescription = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-size: ${fontSize[14]};
  color: ${Colors.grayLighter};
  font-weight: 400;
  line-height: 150%;
`;
const FollowButton = styled.div`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: ${fontSize[14]};
  font-weight: 600;
  cursor: pointer;
  ${cannotSelect()};
`;
const FollowedSpan = styled.span`
  color: ${Colors.grayLighter};
`;
const FollowSpan = styled.span`
  color: ${Colors.blue};
`;

export interface WorkTileProps {
  title: string;
  text: string;
  id: number;
}

export const WorkTile: FC<WorkTileProps> = ({title, text, id}) => {
  const isFollowed = useAppSelector(state => state.userAccount.followed.includes(id));
  const dispatch = useAppDispatch();

  const handleToggleFollow = () => {
    if (!!isFollowed) {
      dispatch(removeFollow(id));
    } else {
      dispatch(addFollow(id));
    }
  };
  return (
    <WorkTileWrapper>
      <WorkTileTitle>{title}</WorkTileTitle>
      <WorkTileContent>{text}</WorkTileContent>
      <WorkTileDescription>
        Subsid. corp. / Client contract / Updated 3 days ago by USER
      </WorkTileDescription>
      <FollowButton onClick={handleToggleFollow}>
        {isFollowed ? (
          <FollowedSpan>unfollow</FollowedSpan>
        ) : (
          <FollowSpan>follow</FollowSpan>
        )}
      </FollowButton>
    </WorkTileWrapper>
  );
};
