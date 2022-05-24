import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import 'dashboard/scss/style.scss'
import Swal from 'sweetalert2';

const DefaultLayout = () => {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        Swal.fire({
          icon: "error",
          title: "Blockchain wallet not detected!",
          text: 'You need to connect your blockchain wallet to use this application. Use meta "Metamask" and "Rinkeby" network'
        })
        return;
      }
      let chainId = await ethereum.request({ method: "eth_chainId" });

      const rinkebyChainID = "0x4";
      if (chainId !== rinkebyChainID) {
        Swal.fire({
          icon: "error",
          title: "Wrong network!",
          text: 'You are connected to wrong network, to use this application connect to "Rinkeby" network'
        })
        return;
      }
      await ethereum.request({
        method: "eth_requestAccounts",
      });
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Browser not compatible!",
        text: 'To connect with blockchain network you will need to connect "Metamask" wallet in rinkeby network'
      })
      console.log("Filed to connect!")
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
