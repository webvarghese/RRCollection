import {useEffect, useState} from "react"
const Block =({addBlock, updateBlock, deleteBlock, clearFields, blocks,closeRoute})=>{
    const [blockId, setBlockId] = useState("")
    const [blockName, setBlockName] = useState("")

    const fillBlock =(id)=>{
        const objBlock = blocks.filter(block=>block.blockId === id)[0]
        setBlockId(objBlock.blockId)
        setBlockName(objBlock.blockName)
    }

    useEffect(()=>{
        clearBlock()
    },[clearFields])

    const clearBlock =()=>{
        setBlockId("")
        setBlockName("")
    }

    return (
        <div className="BlockBox">
            <div className ="closeBtn" onClick={()=>closeRoute()}>X</div>
            <div className="heading">Blocks</div>
            <div className = "saveBox">
                <div className="inputGroup">
                    <input className = "hidden"
                    type="text"
                    value={blockId}
                    onChange={(e)=>setBlockId(e.target.value)}
                    />
                    <label>Block Name<input className="inputItem"
                    type="text"
                    value={blockName}
                    onChange ={(e)=>setBlockName(e.target.value)}
                    ></input></label>
                </div>
                <div className="buttonGroup">
                    <button className="btn btnAdd" onClick={()=>addBlock({blockName})}>Add</button>
                    <button className="btn btnUpdate" onClick ={()=>updateBlock({blockId,blockName})}>Update</button>
                    <button className="btn btnClear" onClick={()=>clearBlock()}>Clear</button>
                    <button className="btn btnDelete" onClick={()=>deleteBlock(blockId)}>Delete</button>
                </div>
            </div>
            <div className="tableBox">
                {blocks.map((block, index) =>{
                    return (
                <div className="displayGroup" key={index} onClick={()=>fillBlock(block.blockId)}>
                    <p>{block.blockId}</p>
                    <p>{block.blockName}</p>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Block