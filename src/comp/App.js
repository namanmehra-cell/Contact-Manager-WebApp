import React,{useState} from 'react';
import Header from './header';
import Contact from './addContact';
import ContactList from './contactList';
import './App.css';

function App() {

    const [theme, setTheme] = useState("light")
    const [text,setText] = useState("Switch to Dark")
    const [state, setstate] = useState([])

    function changeState(state){
        setstate(function changeIt(prevValue){
            return[...prevValue,state]
        })
    }

    function changeTheme(){
        if(theme==="light"){
            setTheme("dark")
            document.body.style.backgroundColor='#322F3D';
            setText("Switch to Light")
        }
        else{
            setTheme("light")
            document.body.style.backgroundColor='white';
            setText("Switch to Dark")
        }
    }

  function deleteContact(id){
    setstate((prevValue)=>{
        return(prevValue.filter((item,index)=>{
            return index !== id;
        }))
    })
  }


    
return<>
<Header type={text} mode={theme} toogleSwitch={changeTheme} />
<Contact onAdd={changeState} mode={theme}/>
<p style={{fontSize:"29px",fontWeight:"normal",maxWidth: "500px",margin: "auto",paddingTop:"20px"}} 
className={`text-${theme==='light'? 'dark':'light'}`}>Contact List</p>
{state.map((items,index)=>{
return(
    <ContactList
    id={index}
    key={index}
    num={items.number}
    name={items.name}
    ondel={deleteContact}/>
)
})}

</> 
}

export default App;
