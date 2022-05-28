import styled from "@emotion/styled";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useState } from "react";

const NavBarWrapper = styled.section`
  margin: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .bottomBar {
    margin-top: 20px;
    height: 5px;
    width: 33%;
    margin-left: ${(props) => props.bottomPosition};
    background-color: #000;
    border-radius: 50px;
    transition: 0.5s;
  }
`;

const NavBarContainer = styled.div`
  height: 62px;
  width: 100%;
  background-color: #2d14c4;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon {
    color: #fff;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
`;

const NavBar = () => {
  const [bottomBarPosition, setBottomBarPosition] = useState("33%");

  return (
    <NavBarWrapper bottomPosition={bottomBarPosition}>
      <NavBarContainer>
        <SignalCellularAltIcon
          className="icon"
          onClick={() => setBottomBarPosition("0%")}
        />
        <ExploreIcon
          className="icon"
          onClick={() => setBottomBarPosition("33%")}
        />
        <PersonIcon
          className="icon"
          onClick={() => setBottomBarPosition("66%")}
        />
      </NavBarContainer>
      <div className="bottomBar"></div>
    </NavBarWrapper>
  );
};

export default NavBar;
