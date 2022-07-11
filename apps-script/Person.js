const getPerson =(id)=>{
    const data = getObjectById_("Persons", id,3)
    const objPerson ={}
    objPerson.personId = data[0]
    objPerson.personName = data[1]
    objPerson.personAddress = data[2]
    return objPerson
  }

  const getPersons =()=>{
    const personList = getObjectArray_('Persons',3)
    const persons = []
    personList.map((data)=>{
      const objPerson ={}
      objPerson.personId = data[0]
      objPerson.personName = data[1]
      objPerson.personAddress = data[2]
      persons.push(objPerson)
    })
    return persons
  }


const addPerson=(data)=>{
    const objArray = [data.personName,data.personAddress]
    const id = addObject_('Persons',objArray)
    const objAdded = getPerson(id)
    return objAdded
  }

 
  const updatePerson=(data)=>{
    const objArray = [data.personId, data.personName,data.personAddress]
    const id = updateField_('Persons',data.personId,3,objArray)
    const objUpdated = getPerson(id)
    return objUpdated
  }

  const deletePerson =(id)=>{
      if(deleteObject_("Persons",id)){
          return id
      } else {
          return 0
      }
  }