
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    
    if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.classList.add('list-group-item');
      newNote.textContent = noteInput.value;
      notesList.appendChild(newNote);
      
      noteInput.value = ''; 
    } else {
      alert("Por favor, insira uma nota.");
    }
  }
  