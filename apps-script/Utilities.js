const getAllDataArrays = ()=>{
    const dataArray = {}
    dataArray.Taluks = getTaluks()
    dataArray.Blocks = getBlocks()
    dataArray.StayAuthorities = getStayAuthorities()
    dataArray.Persons = getPersons()
    return dataArray
  }