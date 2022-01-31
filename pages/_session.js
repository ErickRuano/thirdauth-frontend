import { useEffect, useState } from "react";
import {login} from '../services/auth'
const { address, chainId, connectWallet, disconnectWallet, provider } = useWeb3();

const Session = ({children}) => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    login().then(setProfile)
    true ? setLogged(true) : setLogged(false);
    return () => {
      console.log(logged)
    };
  }, []);
    return (
        <>
          { logged ? children : <span>no tienes acceso</span> }
        </>
    );
  };
  
  export default Session
  