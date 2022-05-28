import styled from "@emotion/styled";

const CardContainer = styled.section`
  margin: 20px;
  padding: 15px;
  min-height: 325px;
  min-width: 310px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08))
    drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));

  :hover {
    opacity: 0.7;
  }

  h3 {
    font-size: 15px;
    font-weight: 600;
    color: #151522;
  }
`;

const BigCard = () => {
  return (
    <CardContainer>
      <h3>Transactions Last Year</h3>
    </CardContainer>
  );
};

export default BigCard;
