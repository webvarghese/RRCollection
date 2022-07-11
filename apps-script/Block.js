const getBlock =(id)=>{
    const data = getObjectById_("Blocks", id,2)
    const objBlock ={}
    objBlock.blockId = data[0]
    objBlock.blockName = data[1]
    return objBlock
  }

  const getBlocks =()=>{
    const blockList = getObjectArray_('Blocks',2)
    const blocks = []
    blockList.map((data)=>{
      const objBlock ={}
      objBlock.blockId = data[0]
      objBlock.blockName = data[1]
      blocks.push(objBlock)
    })
    return blocks
  }


const addBlock=(data)=>{
    const objArray = [data.blockName]
    const id = addObject_('Blocks',objArray)
    const objAdded = getBlock(id)
    return objAdded
  }

 
  const updateBlock=(data)=>{
    const objArray = [data.blockId, data.blockName]
    const id = updateField_('Blocks',data.blockId,2,objArray)
    const objUpdated = getBlock(id)
    return objUpdated
  }

  const deleteBlock =(id)=>{
      if(deleteObject_("Blocks",id)){
          return id
      } else {
          return 0
      }
  }