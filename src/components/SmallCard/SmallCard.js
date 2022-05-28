import styled from "@emotion/styled";

const CardContainer = styled.section`
  height: 145px;
  width: 150px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08))
    drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));

  & h4 {
    font-weight: 700;
    font-size: 15px;
    color: #171725;
  }
  & h3 {
    font-weight: 500;
    font-size: 48px;
    color: #6979f8;
  }
  & p {
    font-weight: 400;
    font-size: 12px;
    color: #999999;
  }
`;

const SmallCard = ({ daysNum, day }) => {
  return (
    <CardContainer>
      <h4>Transactions</h4>
      <h3>{daysNum}</h3>
      <p>{day}</p>
    </CardContainer>
  );
};

export default SmallCard;
