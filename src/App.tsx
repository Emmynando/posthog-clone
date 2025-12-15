import HomeComp from "./components/Layout/HomeComp";
import MobileHomeComp from "./components/Layout/MobileHomeComp";
import SinglePortalForAll from "./components/modals/SinglePortalForAll";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HomeComp />
      <MobileHomeComp />
      <SinglePortalForAll />
    </>
  );
}

export default App;
