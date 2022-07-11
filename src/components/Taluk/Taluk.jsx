import {useEffect, useState} from "react"
const Taluk =({addTaluk, updateTaluk, deleteTaluk, clearFields, taluks, closeRoute})=>{
    const [talukId, setTalukId] = useState("")
    const [talukName, setTalukName] = useState("")

    const fillTaluk =(id)=>{
        const objTaluk = taluks.filter(taluk=>taluk.talukId === id)[0]
        setTalukId(objTaluk.talukId)
        setTalukName(objTaluk.talukName)
    }

    useEffect(()=>{
        clearTaluk()
    },[clearFields])

    const clearTaluk =()=>{
        setTalukId("")
        setTalukName("")
    }

    return (
        <div className="TalukBox">
            <div className ="closeBtn" onClick={()=>closeRoute()}>X</div>
            <div className="heading">Taluks</div>
            <div className = "saveBox">
                <div className="inputGroup">
                    <input className = "hidden"
                    type="text"
                    value={talukId}
                    onChange={(e)=>setTalukId(e.target.value)}
                    />
                    <label>Taluk Name<input className="inputItem"
                    type="text"
                    value={talukName}
                    onChange ={(e)=>setTalukName(e.target.value)}
                    ></input></label>
                </div>
                <div className="buttonGroup">
                    <button className="btn btnAdd" onClick={()=>addTaluk({talukName})}>Add</button>
                    <button className="btn btnUpdate" onClick ={()=>updateTaluk({talukId,talukName})}>Update</button>
                    <button className="btn btnClear" onClick={()=>clearTaluk()}>Clear</button>
                    <button className="btn btnDelete" onClick={()=>deleteTaluk(talukId)}>Delete</button>
                </div>
            </div>
            <div className="tableBox">
                {taluks.map((taluk, index) =>{
                    return (
                <div className="displayGroup" key={index} onClick={()=>fillTaluk(taluk.talukId)}>
                    <p>{taluk.talukId}</p>
                    <p>{taluk.talukName}</p>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Taluk