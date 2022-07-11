const getTaluk =(id)=>{
    const data = getObjectById_("Taluks", id,2)
    const objTaluk ={}
    objTaluk.talukId = data[0]
    objTaluk.talukName = data[1]
    return objTaluk
  }

  const getTaluks =()=>{
    const talukList = getObjectArray_('Taluks',2)
    const taluks = []
    talukList.map((data)=>{
      const objTaluk ={}
      objTaluk.talukId = data[0]
      objTaluk.talukName = data[1]
      taluks.push(objTaluk)
    })
    return taluks
  }


const addTaluk=(data)=>{
    const objArray = [data.talukName]
    const id = addObject_('Taluks',objArray)
    const objAdded = getTaluk(id)
    return objAdded
  }

 
  const updateTaluk=(data)=>{
    const objArray = [data.talukId, data.talukName]
    const id = updateField_('Taluks',data.talukId,2,objArray)
    const objUpdated = getTaluk(id)
    return objUpdated
  }

  const deleteTaluk =(id)=>{
      if(deleteObject_("Taluks",id)){
          return id
      } else {
          return 0
      }
  }