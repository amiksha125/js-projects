// if u inspect go to application -> locale storage, u will see a key value , value will contain the content od each note

// add event to + button to create a new note container
const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl)
});

function deletenote(id, element){
   const notes = getNotes().filter((note) => note.id != id);
   saveNote(notes);
   appEl.removeChild(element);
}

function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;
    
    //to delete element when it is double clicked

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deletenote(id, element);
        }
    })

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    })

    return element;
}

function updateNote(id, value){
   const notes = getNotes();
   const target = notes.filter( (note) => note.id == id)[0];
   target.content = value;
   saveNote(notes)
}

function addnote(){
    const notes = getNotes();

    const noteObj = {
        id: Math.floor(Math.random() * 1000000),
        content: ""
    }
    
    console.log(noteObj);
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    
    notes.push(noteObj);

    saveNote(notes)
    
}

function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes) )
}

function getNotes(){
   return JSON.parse(localStorage.getItem("note-app") || "[]")
}

btnEl.addEventListener("click", addnote);