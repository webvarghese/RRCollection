// import Login from "./components/Login";
import MainBox from "./components/MainBox/MainBox";

import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  const logged = (log) => {
    setAuth(log);
  };
  return <>{auth ? <MainBox /> : <Login logged={logged} />}</>;
}

export default App;
