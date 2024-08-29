/* JS FOR NOTES PAGE */

const addBox = document.querySelector(".addbox"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p")
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");


const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novenmber", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isedit = false, editId;

addBox.addEventListener("click",() => {
    popupTitle.innerText = "Add a new Note";
    addBtn.innerText = "Add Note";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});

closeIcon.addEventListener("click",() => {
    isedit = false;
    titleTag.value =  "";
    descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showNotes(){
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {
        let liTag = ` <li class="note">
                            <div class="details">
                                <p>${note.title}</p><hr>
                                <span>${note.description}</span>
                            </div>
                            <div class="bottom-content">
                                <span>${note.date}</span>
                                <div class="setting">
                                    <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                    <ul class="menu">
                                        <li onclick="editNote(${index},'${note.title}', '${note.description}')"><i class="fa-solid fa-pen"></i>Edit</li>
                                        <li onclick="deleteNote(${index})"><i class="fa-solid fa-trash-can"></i>Delete</li>
                                    </ul>
                                </div>
                            </div>
                        </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

function showMenu(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem){
            elem.parentElement.classList.remove("show");
        }
    });
}

function editNote(noteId, title, desc){
    isedit = true;
    editId = noteId;
    addBox.click();
    titleTag.value = title;
    descTag.value = desc;
    addBtn.innerText = "Update Note";
    popupTitle.innerText = "Update a Note";
    
}

function deleteNote(noteId){
    let confirmdel = confirm("Are you sure you want to delete this note?");
    if(!confirmdel){ return; }
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    let noteDesc = descTag.value;
    

    if(noteTitle || noteDesc){
        let dataObj = new Date(),
        month = months[dataObj.getMonth()],
        day = dataObj.getDate(),
        year = dataObj.getFullYear();

        let noteInfo = {
            title: noteTitle, description: noteDesc,
            date: `${day} ${month}, ${year}`
        }
        if(!isedit){
            notes.push(noteInfo); 
        }
        else{
            isedit = false;
            notes[editId] = noteInfo;
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
});






