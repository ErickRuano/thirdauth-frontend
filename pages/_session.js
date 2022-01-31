import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const Session = ({children}) => {
  const [logged, setLogged] = useState(false);
  const router = useRouter()

  useEffect(() => {
    //read token from localStorage
      if (localStorage.getItem("token")) {
        setLogged(true);
      } else {
        router.push({
            pathname: '/'
        });
        setLogged(false);
      }
      // localStorage.getItem("token") ? setLogged(true) : setLogged(false);
    // return () => {
    //   console.log(logged)
    // };
  }, []);
    return (
        <>
          { logged ? children : <span>no tienes acceso</span> }
        </>
    );
  };
  
  export default Session
  