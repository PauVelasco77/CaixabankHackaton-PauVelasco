import "./App.css";
import BigCard from "./components/BigCard/BigCard";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SmallsCardsList from "./SmallsCardsList/SmallsCardsList";

function App() {
  return (
    <>
      <Header />
      <Description />
      <SmallsCardsList />
      <BigCard />
      <NavBar />
    </>
  );
}

export default App;
