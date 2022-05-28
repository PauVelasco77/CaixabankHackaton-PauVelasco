import styled from "@emotion/styled";
import NeoLogo from "../../svg/NeoLogo";

const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 48px 0 30px 30px;

  & h1 {
    font-family: "Montserrat", sans-serif;
    color: #4a35c5;
    font-size: 30px;
    font-weight: 700;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NeoLogo />
      <h1>BANKS</h1>
    </HeaderWrapper>
  );
};

export default Header;
