const getStayAuthority =(id)=>{
    const data = getObjectById_("StayAuthorities", id,2)
    const objStayAuthority ={}
    objStayAuthority.stayAuthorityId = data[0]
    objStayAuthority.stayAuthorityName = data[1]
    return objStayAuthority
  }

  const getStayAuthorities =()=>{
    const stayAuthorityList = getObjectArray_('StayAuthorities',2)
    const stayAuthorities = []
    stayAuthorityList.map((data)=>{
      const objStayAuthority ={}
      objStayAuthority.stayAuthorityId = data[0]
      objStayAuthority.stayAuthorityName = data[1]
      stayAuthorities.push(objStayAuthority)
    })
    return stayAuthorities
  }


const addStayAuthority=(data)=>{
    const objArray = [data.stayAuthorityName]
    const id = addObject_('StayAuthorities',objArray)
    const objAdded = getStayAuthority(id)
    return objAdded
  }

 
  const updateStayAuthority=(data)=>{
    const objArray = [data.stayAuthorityId, data.stayAuthorityName]
    const id = updateField_('StayAuthorities',data.stayAuthorityId,2,objArray)
    const objUpdated = getStayAuthority(id)
    return objUpdated
  }

  const deleteStayAuthority =(id)=>{
      if(deleteObject_("StayAuthorities",id)){
          return id
      } else {
          return 0
      }
  }