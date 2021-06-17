import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { Colors } from "../../../../styledHelpers/Colors";
import { border } from "../../../../styledHelpers/Components";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import CustomTable from "./CustomTable";
import fees from "./Data/fees";
import proposals from "./Data/proposals";
import reviews from "./Data/reviews";

const InnerWrapper = styled.div`
  font-size: ${fontSize[18]};
  ${border(1, "solid", Colors.lightgray, "bottom")};
  min-height: 300px;
`;

const DetailsTables: FC = () => {
  const state = useAppSelector((state) => {
    const proposalsInitial = state.profile.proposals;
    const reviewsInitial = state.profile.reviews;
    const feesInitial = state.profile.fees;
    return { proposalsInitial, reviewsInitial, feesInitial };
  });
  const [proposalLocalState, setProposalLocalState] = useState(
    state.proposalsInitial
  );
  const [reviewsLocalState, setReviewsLocalState] = useState(
    state.reviewsInitial
  );
  const [feesLocalState, setFeesLocalState] = useState(state.feesInitial);

  const handleChangeProposal = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.column && event.target.dataset.row) {
      const copyOfProposalState = JSON.parse(
        JSON.stringify(proposalLocalState)
      );
      copyOfProposalState[event.target.dataset.column][
        event.target.dataset.row
      ] = event.target.value;
      setProposalLocalState(copyOfProposalState);
    }
  };
  const handleChangeReviews = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.column && event.target.dataset.row) {
      const copyOfProposalState = JSON.parse(
        JSON.stringify(reviewsLocalState)
      );
      copyOfProposalState[event.target.dataset.column][
        event.target.dataset.row
      ] = event.target.value;
      setReviewsLocalState(copyOfProposalState);
    }
  };
  const handleChangeFees = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.column && event.target.dataset.row) {
      const copyOfProposalState = JSON.parse(
        JSON.stringify(feesLocalState)
      );
      copyOfProposalState[event.target.dataset.column][
        event.target.dataset.row
      ] = event.target.value;
      setFeesLocalState(copyOfProposalState);
    }
  };

  return (
    <InnerWrapper>
      <CustomTable
        data={proposals}
        initialData={proposalLocalState}
        change={handleChangeProposal}
      />
      <CustomTable
        data={reviews}
        initialData={reviewsLocalState}
        change={handleChangeReviews}
      />
      <CustomTable
        data={fees}
        initialData={feesLocalState}
        change={handleChangeFees}
      />
    </InnerWrapper>
  );
};

export default DetailsTables;
