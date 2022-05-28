import styled from "@emotion/styled";

const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: "Montserrat";

  & h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    color: #00093e;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #00093e;
  }
`;

const Description = () => {
  return (
    <DescriptionContainer>
      <h2>Transactions history</h2>
      <p>These are your monthly and daily actions. 📊</p>
    </DescriptionContainer>
  );
};

export default Description;
