// import { ethers } from "ethers";
// import { useEffect, useState } from "react";
// import { TaskContactAddress } from "config";
// import TaskAbi from "utils/TaskContract.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Header from "components/Header/Header";
function App() {
  // const [tasks, setTasks] = useState([]);
  // const [input, setInput] = useState("");
  // const [currentAccount, setCurrentAccount] = useState("");
  // const [correctNetwork, setCorrectNetwork] = useState(false);
  // const connectWallet = async () => {
  //   try {
  //     const { ethereum } = window;
  //     if (!ethereum) {
  //       console.log("Meta mask not detected!");
  //       return;
  //     }

  //     let chainId = await ethereum.request({ method: "eth_chainId" });

  //     const rinkebyChainID = "0x4";
  //     if (chainId !== rinkebyChainID) {
  //       return;
  //     } else {
  //       setCorrectNetwork(true);
  //     }
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     setCurrentAccount(accounts[0]);
  //   } catch (error) {}
  // };

  // const addTask = async () => {
  //   let task = {
  //     taskText: input,
  //     isDeleted: false,
  //   };
  //   try {
  //     const { ethereum } = window;
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const TaskContract = new ethers.Contract(
  //         TaskContactAddress,
  //         TaskAbi.abi,
  //         signer
  //       );
  //       TaskContract.addTask(task.taskText, task.isDeleted).then(() => {
  //         setTasks([...tasks, task]);
  //       });
  //     }
  //   } catch (error) {}
  // };
  // const getAllTasks = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const TaskContract = new ethers.Contract(
  //         TaskContactAddress,
  //         TaskAbi.abi,
  //         signer
  //       );

  //       let allTasks = await TaskContract.getMyTasks();
  //       setTasks(allTasks);
  //     } else {
  //       console.log("Ethereum object doesn't exist");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAllTasks();
  // }, []);
  // const deleteTask = (key) => async () => {
  //   console.log(key);

  //   // Now we got the key, let's delete our tweet
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const TaskContract = new ethers.Contract(
  //         TaskContactAddress,
  //         TaskAbi.abi,
  //         signer
  //       );

  //       // let deleteTaskTx = await TaskContract.deleteTask(key, true);
  //       let allTasks = await TaskContract.getMyTasks();
  //       setTasks(allTasks);
  //     } else {
  //       console.log("Ethereum object doesn't exist");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="App bck-img">
      {/* {currentAccount === "" ? (
        <>
          <h1>
            <button className="btn btn-success" onClick={connectWallet}>
              Connect Wallet
            </button>
          </h1>
          <ServiceCard />
        </>
      ) : (
        correctNetwork && (
          <>
            <div className="container">
              <h1>Tasks</h1>
              <div className="card">
                <div className="card-body">
                  <input
                    type="text"
                    value={input}
                    className="form-control"
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="card-footer">
                  <button onClick={addTask} className="btn btn-success">
                    Add Task
                  </button>
                </div>
              </div>
            </div>
            <div>
              <ul className="list-group">
                {tasks?.map((el) => (
                  <li className="list-group-item">
                    {el.taskText}{" "}
                    <button onClick={deleteTask(el.id)} className="btn btn-sm">
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )
      )} */}
      <Header />

      <div className="container d-flex align-items-center h-100">
        <ServiceCard />
      </div>
    </div>
  );
}

export default App;
