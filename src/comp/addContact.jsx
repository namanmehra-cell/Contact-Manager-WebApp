import React,{useState} from "react";

export default function Contact(props){

  const [num, setNum] = useState({
    name:"",
    number:""
  })

  function handleChange(event){
    const value = event.target.value
    const name = event.target.name
    setNum(function change(prevValue){
      if(name==="name"){
        return{
          name: value,
          number:prevValue.number
        }
      }
      else if(name==="number"){
        return{
          name:prevValue.name,
          number:value
        }
      }
    })
  }

  function ert(event){
    props.onAdd(num)
    event.preventDefault(); // Not update screen on clicking buttons
  }

  return(
    <>
    <div style={{maxWidth: "500px",margin: "auto",}} className="col-sm-10 form-group-lg">
    <p className={`text-${props.mode==='light'? 'dark':'light'}`} style={{
    fontSize:"40px"
    }}>Add Contact</p>
    <form>
    <div style={{
          }} className={` mb-3 text-${props.mode==='light'? 'dark':'light'}`} >
    <label for="exampleInputText" >Name</label>
    <input onChange={handleChange}  value={num.name} style={{width:"30%"}} type="text" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp"/>
    </div>
    <div style={{}} className={` mb-3 text-${props.mode==='light'? 'dark':'light'}`} >
    <label for="exampleInputNumber" className="form-label">Phone Number</label>
    <input onChange={handleChange} name="number" value={num.number} style={{width:"30%"}}  className="form-control" aria-describedby="emailHelp"/>
    </div>
    
    <button onClick={ert} className="btn btn-primary">Add</button>
    </form>

    </div>
    </> 
    )
  }