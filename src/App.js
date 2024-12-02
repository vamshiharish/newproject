import React from "react";

import Navbar from "./components/Navbar/navbar";
 // import OpeningPage from "./components/Openingpage/openingpage";
 import ContentSection from "./components/ContentSection/contentsection";
 import UnorderedList from "./components/UnorderedList/unorderedList";
 import Footer from "./components/Footer/footer";
import './App.css';



function App() {
  return (
    <div>
      <Navbar />
      
      <ContentSection />
      <UnorderedList />
      <Footer />
    </div>
  );
}

export default App;

















