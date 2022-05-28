import "./App.css";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SmallCard from "./components/SmallCard/SmallCard";

function App() {
  return (
    <>
      <Header />
      <Description />
      <SmallCard day={"LAST MONTH"} daysNum={35} />
      <NavBar />
    </>
  );
}

export default App;
