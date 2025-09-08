// notizen anzeigen lassen
let notesTitles = ['Ba','Aufgaben'];
let notes = ['banana','raspberry'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
// ich muss definiern wo sie anzuzeigen sind
let contentRef = document.getElementById('content') 
contentRef.innerHTML = "";   

// -> wann werden sie angezeigt
 for (let indexNote = 0; indexNote < notes.length; index++) {
    contentRef.innerHTML += getnoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
// ich muss definiern wo sie anzuzeigen sind
let trashContentRef = document.getElementById('trash_content') 
trashContentRef.innerHTML = "";   

// -> wann werden sie angezeigt
 for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getnoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNoteTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`;
}

// notizen hinzufügen
function addnote() {
    // Eingabe auslesen
    let noteInputRef = document.getElementById('note_input');
    let note_input = noteInputRef.value;
    // Eingabe speichern bzw. hinzufügen
    notes.push(noteInput);
    //Eingabe anzeigen lassen
    renderNotes();
    renderTrashNotes()

    noteInputRef.value = "";
}

function noteTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notes.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}
// notizen löschen
// welche notiz muss gelöscht werden
// wann muss die notiz gelöscht werden
// anzeige updaten
function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
}


// notizen archivieren