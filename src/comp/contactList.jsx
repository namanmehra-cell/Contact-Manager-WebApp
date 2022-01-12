import user from "../images/user.png"

export default function ContactList(props){
    

    function del(){
        props.ondel(props.id);
    }

    return(
        <>
        <div style={{  maxWidth: "500px",
            margin: "auto",
        padding:"12px"}} className="ui celled list">
        <ul class="list-group">
        <li class="list-group-item">
        <span><img src={user} width="30" height="30" className="d-inline-block align-top" alt="" />
        <h1>{props.name}</h1><h5>{props.num}</h5></span>
        
        <button onClick={del} type="button" class="btn btn-warning">Delete Contact</button>
        </li>
        </ul>
        
        </div>
        </>
        )
        
    }