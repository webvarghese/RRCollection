import {useEffect, useState} from "react"
const Person =({addPerson, updatePerson, deletePerson, clearFields, persons,closeRoute})=>{
    const [personId, setPersonId] = useState("")
    const [personName, setPersonName] = useState("")
    const [personAddress, setPersonAddress] = useState("")

    const fillPerson =(id)=>{
        const objPerson = persons.filter(person=>person.personId === id)[0]
        setPersonId(objPerson.personId)
        setPersonName(objPerson.personName)
        setPersonAddress(objPerson.personAddress)
    }

    useEffect(()=>{
        clearPerson()
    },[clearFields])

    const clearPerson =()=>{
        setPersonId("")
        setPersonName("")
        setPersonAddress("")
    }

    return (
        <div className="PersonBox">
            <div className ="closeBtn" onClick={()=>closeRoute()}>X</div>
            <div className="heading">Persons</div>
            <div className = "saveBox">
                <div className="inputGroup">
                    <input className = "hidden"
                    type="text"
                    value={personId}
                    onChange={(e)=>setPersonId(e.target.value)}
                    />
                    <label>Person Name<input className="inputItem"
                    type="text"
                    value={personName}
                    onChange ={(e)=>setPersonName(e.target.value)}
                    ></input></label>
                    <label>Person Address<input className="inputItem"
                    type="text"
                    value={personAddress}
                    onChange ={(e)=>setPersonAddress(e.target.value)}
                    ></input></label>
                </div>
                <div className="buttonGroup">
                    <button className="btn btnAdd" onClick={()=>addPerson({personName,personAddress})}>Add</button>
                    <button className="btn btnUpdate" onClick ={()=>updatePerson({personId,personName,personAddress})}>Update</button>
                    <button className="btn btnClear" onClick={()=>clearPerson()}>Clear</button>
                    <button className="btn btnDelete" onClick={()=>deletePerson(personId)}>Delete</button>
                </div>
            </div>
            <div className="tableBox">
                {persons.map((person, index) =>{
                    return (
                <div className="displayGroup" key={index} onClick={()=>fillPerson(person.personId)}>
                    <p>{person.personId}</p>
                    <p>{person.personName}</p>
                    <p>{person.personAddress}</p>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Person