import { NidContactAddress } from "config";
import { ethers } from "ethers";
import NidAbi from "utils/NidContract.json";

const useNid = () => {
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const NidContract = new ethers.Contract(
    NidContactAddress,
    NidAbi.abi,
    signer
  );
  const addNid = async (payload) => {
    return await NidContract.addNid(payload);
  };

  const getMyEntries = async () => {
    return await NidContract.getAgentEntries();
  };

  const getDataByNid = async (nid) => {
    return await NidContract.getSingleNid(nid);
  };

  return {
    addNid,
    getMyEntries,
    getDataByNid
  };
};

export default useNid;
