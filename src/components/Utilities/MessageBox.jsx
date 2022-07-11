const MessageBox =({message, color})=>{
  return (
    <div className="MessageBox">
      <div className ={`msgBox ${color}`} >
        <h4>{message}</h4>
      </div>
    </div>
    
  )
}
export default MessageBox