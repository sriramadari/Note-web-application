import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import CreateArea from "./CreateArea"
function App(){
    const [notes,setnotes]=useState([]);

  function addNote(note){
    setnotes(prevValue=>{
      return [...prevValue,note];
    })
  }
function deleteNote(id){
setnotes(prevValue=>{
 return prevValue.filter((noteitem,index)=>{
    return index!==id;
  });
});
}
    return <div>
    <Header/>
    <CreateArea
    onAdd={addNote}
    />
  { notes.map((eachNote,index)=>{
    return (
      <Note
      id={index}
        key={index}
        title={eachNote.title}
        desc={eachNote.content}
        onDelete={deleteNote}
      />  );
  })}
    <Footer/>
    </div>
}
export default App;
