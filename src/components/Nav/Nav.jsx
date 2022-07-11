import { Link } from "react-router-dom";

function Nav({selectRoute}) {
  return (
    <>
      <div className="Nav">
       <div className="tablet" onClick={()=>selectRoute(1)}>
          Taluk
        </div>
        <div className="tablet" onClick={()=>selectRoute(2)}>
          Block
        </div>
        <div className="tablet" onClick={()=>selectRoute(3)}>
          StayAuthority
        </div>
        <div className="tablet" onClick={()=>selectRoute(4)}>
          Person
        </div>
      </div>
    </>
  );
}

export default Nav;