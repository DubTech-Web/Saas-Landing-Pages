
// import Logo from "./Logo";
// import NavBar  from "./NavBar";
// import  Buttons  from "./Buttons";
import  Main  from "./Hero";
import Benefit from './Benefit'
import Pricing  from "./Pricing";
import Contact  from "./Contact";
import  Support from "./Support";






function App() {
  return (
    <>
    <div className="font-[Inter] bg-gradient-to-r from-emerald-50 from-10% via-pink-50 via-60% to-emerald-100 to-90%   ">
      <Main />
      </div>
      <div>
      <Support />
      <Benefit />
      <Pricing />
      <Contact />
      </div>
  
   </>
  );
  
}

 {/* <div className="md:mx-10 mb-30 mt-4 p-4 rounded-lg flex items-center justify-between ">
        <Logo />
        <NavBar />
        <Buttons />
      </div> */}


export default App;







