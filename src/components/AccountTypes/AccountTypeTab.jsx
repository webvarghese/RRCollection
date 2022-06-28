import { useState, useEffect } from "react";

function AccountTypeTab({filterList}) {
  const [searchText, setSearchText] = useState("");
  const onSearch = (e)=>{
    const str = e.target.value
    filterList(str)
    setSearchText(str)
  }
  
  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <input
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={onSearch}
          />
        </li>
      </ul>
    </>
  );
}

export default AccountTypeTab;
