// import Login from "./components/Login";
import MainSheet from "./components/MainSheet/MainSheet.jsx";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  const logged = (log) => {
    setAuth(log);
  };
  return <>{auth ? <MainSheet /> : <Login logged={logged} />}</>;
}

export default App;
