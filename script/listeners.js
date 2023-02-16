
let clickListener = (target, fun) => {

    target.addEventListener('click', ()=>{
        fun.call()
    })

}

// MENU

clickListener(
    document.getElementById('menubtn-lenguage'),
    ()=>{
        showChangeLenguage()
    }
)

clickListener(
    document.getElementById('menubtn-reset'),
    ()=>{
        resetLocalStorage()
    }
)

clickListener(
    document.getElementsByClassName('menu-info-text')[0],
    ()=>{
        url("https://github.com/juro0/moodmirror")
    }
)

// ADD NOTE

clickListener(
    document.getElementById('addnote-btn'),
    ()=>{
        showNewNoteWindows()
    }
)

clickListener(
    document.getElementById('addnote-deny'),
    ()=>{
        resetAddnoteInputs();
        hideNewNoteWindows();
    }
)

clickListener(
    document.getElementById('addnote-confirm'),
    ()=>{
        if(checkCorrectsInput()){
            noteGenerator(getSelectedMood(), document.getElementById('oneword').value, getDate(), document.getElementById('note').value)
            resetAddnoteInputs()
            hideNewNoteWindows()
        }
    }
)