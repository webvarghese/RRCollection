import {useEffect, useState} from "react"
const StayAuthority =({addStayAuthority, updateStayAuthority, deleteStayAuthority, clearFields, stayAuthorities,closeRoute})=>{
    const [stayAuthorityId, setStayAuthorityId] = useState("")
    const [stayAuthorityName, setStayAuthorityName] = useState("")

    const fillStayAuthority =(id)=>{
        const objStayAuthority = stayAuthorities.filter(stayAuthority=>stayAuthority.stayAuthorityId === id)[0]
        setStayAuthorityId(objStayAuthority.stayAuthorityId)
        setStayAuthorityName(objStayAuthority.stayAuthorityName)
    }

    useEffect(()=>{
        clearStayAuthority()
    },[clearFields])

    const clearStayAuthority =()=>{
        setStayAuthorityId("")
        setStayAuthorityName("")
    }

    return (
        <div className="StayAuthorityBox">
            <div className ="closeBtn" onClick={()=>closeRoute()}>X</div>
            <div className="heading">StayAuthorities</div>
            <div className = "saveBox">
                <div className="inputGroup">
                    <input className = "hidden"
                    type="text"
                    value={stayAuthorityId}
                    onChange={(e)=>setStayAuthorityId(e.target.value)}
                    />
                    <label>StayAuthority Name<input className="inputItem"
                    type="text"
                    value={stayAuthorityName}
                    onChange ={(e)=>setStayAuthorityName(e.target.value)}
                    ></input></label>
                </div>
                <div className="buttonGroup">
                    <button className="btn btnAdd" onClick={()=>addStayAuthority({stayAuthorityName})}>Add</button>
                    <button className="btn btnUpdate" onClick ={()=>updateStayAuthority({stayAuthorityId,stayAuthorityName})}>Update</button>
                    <button className="btn btnClear" onClick={()=>clearStayAuthority()}>Clear</button>
                    <button className="btn btnDelete" onClick={()=>deleteStayAuthority(stayAuthorityId)}>Delete</button>
                </div>
            </div>
            <div className="tableBox">
                {stayAuthorities.map((stayAuthority, index) =>{
                    return (
                <div className="displayGroup" key={index} onClick={()=>fillStayAuthority(stayAuthority.stayAuthorityId)}>
                    <p>{stayAuthority.stayAuthorityId}</p>
                    <p>{stayAuthority.stayAuthorityName}</p>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StayAuthority