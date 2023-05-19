import React, { useState } from "react";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
function CreateArea(props){
    const [isExpanded,setExpand] = useState(false);
    function expand(){
        setExpand(true);
    }
    function shrink(){
        setExpand(false);
    }
    const [note,setNote]=useState({
        title: "",
        content:""
    })
    function handleChange(event){
        const {name,value}=event.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            };
        })
    }
    function submitNote(event){
        props.onAdd(note)
        setNote({ 
            title: "",
            content:""
        });
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note">
            <input  
              onClick={expand}
                onChange={handleChange}
                
                name="title" 
                value={note.title} 
                placeholder={!isExpanded?"Take a note...":"Title"}
               />

{ isExpanded && (  <textarea 
              
              onMouseOut={shrink}
                
                onChange={handleChange} 
                name="content"
                 value={note.content}
                 placeholder="Take a note..."
                 rows="3"
                /> )}
             <Zoom in={isExpanded}> 
              <Fab onClick={submitNote}><AddSharpIcon /> 
              </Fab>
              </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;