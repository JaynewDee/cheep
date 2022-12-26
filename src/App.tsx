import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResourceList from "./components/ResourceList";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <main className="content-main">
        <ResourceList />
      </main>
      <hr className="hr-sm" style={{ marginTop: "9rem" }}></hr>
      <Footer />
    </div>
  );
};

export default App;
