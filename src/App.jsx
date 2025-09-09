import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WhatToExpect from "./components/WhatToExpect";
 import CommunityAndConnection from "./components/CommunityAndConnection";
import LetterFromGold from "./components/LetterFromGold";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Hero />
        <Mission />
        <WhatToExpect />
        <CommunityAndConnection />
        <LetterFromGold />
        {/* <Contact /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
