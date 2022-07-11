import {Routes, Route} from "react-router-dom"
import MainSheet from "../MainSheet/MainSheet"
import Taluk from "../Taluk/Taluk"
import Block from "../Block/Block"
import StayAuthority from "../StayAuthority/StayAuthority"
import Person from "../Person/Person"
import MessageBox from "../Utilities/MessageBox"
import Nav from "../Nav/Nav"
import {useEffect, useState} from "react"
import { runGoogleScript } from "../../Functions/Functions"

const MainBox =()=>{
    const [taluks, setTaluks] = useState([])
    const [blocks, setBlocks] = useState([])
    const [stayAuthorities, setStayAuthorities] = useState([])
    const [persons, setPersons] = useState([])
    const [selectedRoute, setSelectedRoute] = useState("")
    const [message,setMessage] = useState("")
    const [messageBox, setMessageBox] = useState(false)
    const [color, setColor] = useState("")
    useEffect(()=>{
        const getDataArrays =async ()=>{
            try {
                const dataArray = await runGoogleScript("getAllDataArrays")
                setTaluks(dataArray.Taluks)
                setBlocks(dataArray.Blocks)
                setStayAuthorities(dataArray.StayAuthorities)
                setPersons(dataArray.Persons)
            } catch (error) {
                console.log(error)
            }
        }
        getDataArrays()
    },[])
    const clearFields = ()=>{
        console.log("clear called")
    }
    const selectRoute =(no)=>{
        setSelectedRoute(no)
    }
    const closeRoute =()=>{
       setSelectedRoute("")
    }
    const showMessage =(msg,clr)=>{
        setMessage(msg)
        setColor(clr)
        setMessageBox(true)
        const timeout = setTimeout(()=>{
         setMessage("")
         setColor("")
         setMessageBox(false) 
        },3000)
      }
    //---------------------Taluks------------------------------------------------------  
    const addTaluk = async(obj)=>{
        try {
            const objTaluk = await runGoogleScript("addTaluk",obj)
            setTaluks([...taluks, objTaluk])
            showMessage(`Successfully added the Taluk ${objTaluk.talukName}`,"add" )
            clearFields()
        } catch (error) {
           console.log(error) 
        }                
    }

    const updateTaluk = async(obj)=>{
        try {
            const objTaluk = await runGoogleScript("updateTaluk",obj)
            setTaluks(taluks.map((taluk)=>{
                if(taluk.talukId === objTaluk.talukId){
                    return objTaluk
                } else {
                    return taluk
                }
            }))
            showMessage(`Successfully updated the Taluk ${objTaluk.talukName}`,"update" )
            clearFields()
        } catch (error) {
           console.log(error) 
        }
    }

    const deleteTaluk = async (id)=>{
        try {
            const returnId = await runGoogleScript("deleteTaluk", id)
            setTaluks(taluks.filter(taluk=>taluk.talukId !== returnId))
            showMessage(`Successfully deleted the Taluk with id no. ${returnId}`,"delete" )
            clearFields()
        } catch (error) {
            console.log(error)
        }
    }
    //------------------------------------------Blocks--------------------------------------------
    const addBlock = async(obj)=>{
        try {
            const objBlock = await runGoogleScript("addBlock",obj)
            setBlocks([...blocks, objBlock])
            showMessage(`Successfully added the Block ${objBlock.blockName}`,"add" )
            
            clearFields()
        } catch (error) {
           console.log(error) 
        }                
    }

    const updateBlock = async(obj)=>{
        try {
            const objBlock = await runGoogleScript("updateBlock",obj)
            setBlocks(blocks.map((block)=>{
                if(block.blockId === objBlock.blockId){
                    return objBlock
                } else {
                    return block
                }
            }))
            showMessage(`Successfully updated the Block ${objBlock.blockName}`,"update" )
            clearFields()
        } catch (error) {
           console.log(error) 
        }
    }

    const deleteBlock = async (id)=>{
        try {
            const returnId = await runGoogleScript("deleteBlock", id)
            setBlocks(blocks.filter(block=>block.blockId !== returnId))
            showMessage(`Successfully deleted the Block with id no. ${returnId}`,"delete" )
            clearFields()
        } catch (error) {
            console.log(error)
        }
    }
//-------------------------------StayAuthority-------------------------------------------------------------------------
const addStayAuthority = async(obj)=>{
    try {
        const objStayAuthority = await runGoogleScript("addStayAuthority",obj)
        setStayAuthorities([...stayAuthorities, objStayAuthority])
        showMessage(`Successfully added the StayAuthority ${objStayAuthority.stayAuthorityName}`,"add" )
        
        clearFields()
    } catch (error) {
       console.log(error) 
    }                
}

const updateStayAuthority = async(obj)=>{
    try {
        const objStayAuthority = await runGoogleScript("updateStayAuthority",obj)
        setStayAuthorities(stayAuthorities.map((stayAuthority)=>{
            if(stayAuthority.stayAuthorityId === objStayAuthority.stayAuthorityId){
                return objStayAuthority
            } else {
                return stayAuthority
            }
        }))
        showMessage(`Successfully updated the StayAuthority ${objStayAuthority.stayAuthorityName}`,"update" )
        clearFields()
    } catch (error) {
       console.log(error) 
    }
}

const deleteStayAuthority = async (id)=>{
    try {
        const returnId = await runGoogleScript("deleteStayAuthority", id)
        setStayAuthorities(stayAuthorities.filter(stayAuthority=>stayAuthority.stayAuthorityId !== returnId))
        showMessage(`Successfully deleted the StayAuthority with id no. ${returnId}`,"delete" )
        clearFields()
    } catch (error) {
        console.log(error)
    }
}

//-------------------------------------Persons --------------------------------------------------------
const addPerson = async(obj)=>{
    try {
        const objPerson = await runGoogleScript("addPerson",obj)
        setPersons([...persons, objPerson])
        showMessage(`Successfully added the Person ${objPerson.personName}`,"add" )
        
        clearFields()
    } catch (error) {
       console.log(error) 
    }                
}

const updatePerson = async(obj)=>{
    try {
        const objPerson = await runGoogleScript("updatePerson",obj)
        setPersons(persons.map((person)=>{
            if(person.personId === objPerson.personId){
                return objPerson
            } else {
                return person
            }
        }))
        showMessage(`Successfully updated the Person ${objPerson.personName}`,"update" )
        clearFields()
    } catch (error) {
       console.log(error) 
    }
}

const deletePerson = async (id)=>{
    try {
        const returnId = await runGoogleScript("deletePerson", id)
        setPersons(persons.filter(person=>person.personId !== returnId))
        showMessage(`Successfully deleted the Person with id no. ${returnId}`,"delete" )
        clearFields()
    } catch (error) {
        console.log(error)
    }
}

//------------------------------------------------------------------------------------------------------
//--------------------------------Return Divs--------------------------------------------------------
    return (
        <>
        <Nav selectRoute={selectRoute}/>
        {messageBox && <MessageBox message={message} color = {color}/>}
        <MainSheet/>
        {selectedRoute === 1 && <Taluk taluks={taluks} addTaluk={addTaluk} updateTaluk={updateTaluk} deleteTaluk={deleteTaluk} clearFields={clearFields} closeRoute={closeRoute} />}
        {selectedRoute === 2 && <Block blocks={blocks} addBlock={addBlock} updateBlock={updateBlock} deleteBlock={deleteBlock} clearFields={clearFields} closeRoute={closeRoute} />}
        {selectedRoute === 3 && <StayAuthority stayAuthorities={stayAuthorities} addStayAuthority={addStayAuthority} updateStayAuthority={updateStayAuthority} deleteStayAuthority={deleteStayAuthority} clearFields={clearFields} closeRoute={closeRoute} />}
        {selectedRoute === 4 && <Person persons={persons} addPerson={addPerson} updatePerson={updatePerson} deletePerson={deletePerson} clearFields={clearFields} closeRoute={closeRoute} />}
        {selectedRoute === 0 && <></>}
        </>
    )
}
export default MainBox