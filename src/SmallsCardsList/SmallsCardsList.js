import styled from "@emotion/styled";
import SmallCard from "../components/SmallCard/SmallCard";

const SmallCardsContainer = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const SmallsCardsList = () => {
  return (
    <SmallCardsContainer>
      <SmallCard day={"LAST MONTH"} daysNum={35} />
      <SmallCard day={"TODAY"} daysNum={3} />
    </SmallCardsContainer>
  );
};

export default SmallsCardsList;
