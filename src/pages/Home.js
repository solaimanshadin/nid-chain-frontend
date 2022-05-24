// import { ethers } from "ethers";
// import { useEffect, useState } from "react";
// import { TaskContactAddress } from "config";
// import TaskAbi from "utils/TaskContract.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Header from "components/Header/Header";
function App() {
  
  return (
    <div className="App bck-img">
      <Header />

      <div className="container d-flex align-items-center h-100">
        <ServiceCard />
      </div>
    </div>
  );
}

export default App;
