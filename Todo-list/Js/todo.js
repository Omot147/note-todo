const myNotes = [];
const delStack = [];
let newDiv;
const innCont = document.querySelector('.container');
const note = document.getElementById('message_body');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const undoBtn = document.getElementById('undo-btn');
const getNote = document.querySelector('.icon');

getNote.addEventListener('click', () => {
   if(note.style.display = 'none'){
    note.setAttribute('style', 'display:flex;')
   }else{
    note.style.display = 'none';
   };
});

function addNote(){

//savebtn function
saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
});

saveBtn.addEventListener('click', saveNote);
function saveNote(){
   note.style.display = 'none';
   const newDiv = document.createElement('div');
   newDiv.className = 'new';
   innCont.appendChild(newDiv);
   newDiv.textContent = note.value;
  const content = note.value;
  localStorage.setItem('notePad', content);
  myNotes.push(content);

};

//clearbtn function
clearBtn.addEventListener('click', (e) => {
   e.preventDefault();
});

clearBtn.addEventListener('click', clearNote);
function clearNote(){
   delStack.push(note.value);
   localStorage.removeItem('notePad');
   myNotes.pop();
};

}

addNote();


