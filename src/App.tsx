import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResourceList from "./components/ResourceList";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <main className="content-main">
        <ResourceList />
      </main>
    </div>
  );
};

export default App;
