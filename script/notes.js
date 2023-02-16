
let noteGenerator = (mood, oneword, date, desc, pushnote = true) => {

    const moodDict = {
        "happy": "uil uil-grin note-mood happy-mood",
        "good": "uil uil-smile note-mood good-mood",
        "confused": "uil uil-confused note-mood confused-mood",
        "sad": "uil uil-sad-squint note-mood sad-mood"
    }

    let div1 = document.createElement('div')
    div1.classList.add('note', 'hor-center')

    let div2 = document.createElement('div')
    div2.classList.add('note-first-line')

    let i = document.createElement('i')
    addClasses(i, moodDict[mood])

    let p1 = document.createElement('p')
    p1.classList.add('note-title')
    p1.innerText = oneword

    let p2 = document.createElement('p')
    p2.classList.add('note-date')
    p2.innerText = date

    let p3 = document.createElement('p')
    p3.classList.add('note-description')
    p3.innerText = desc

    div2.appendChild(i)
    div2.appendChild(p1)
    div2.appendChild(p2)

    div1.appendChild(div2)
    div1.appendChild(p3)

    addFirstChild(div1)

    if(pushnote){
        pushNote(
            {
                mood: mood,
                oneword: oneword,
                date: date,
                description: desc
            }
        )
    }

}

let showNewNoteWindows = () => {
    document.getElementById('addnote-window').classList.remove('hide')
}

let hideNewNoteWindows = () => {
    document.getElementById('addnote-window').classList.add('hide')
}

let resetAddnoteInputs = () => {
    const addnotewindow = document.getElementById('addnote-window')
    const moods = addnotewindow.getElementsByClassName('ms-mood')
    for(let mood of moods){
        mood.classList.remove('active')
    }
    document.getElementById('oneword').value = ''
    document.getElementById('note').value = ''
    document.getElementById('input-error').innerText = ''
}

let showInputError = text => {
    document.getElementById('input-error').innerText = text
}

let checkCorrectsInput = () => {

    let moodOK = false;
    let onewordOK = false;
    let descOK = false;

    // MOOD CHECK
    const addnotewindow = document.getElementById('addnote-window')
    const moods = addnotewindow.getElementsByClassName('ms-mood')
    for(let mood of moods){
        if(mood.classList.contains('active')){
            moodOK = true;
        }
    }

    // ONE WORD CHECK
    if(document.getElementById('oneword').value.replaceAll(' ', '') != ''){
        onewordOK = true;
    }
    if(document.getElementById('oneword').value.length > 20){
        showInputError(addnotewindow_error_onewordtoolong)
        return false
    }    

    // DESC CHECK
    if(document.getElementById('note').value.replaceAll(' ', '') != ''){
        descOK = true;
    }

    if(!moodOK){
        showInputError(addnotewindow_error_moodnotchosed)
        return false
    } else if (!onewordOK){
        showInputError(addnotewindow_error_onewordnotwritten)
        return false
    } else if (!descOK){
        showInputError(addnotewindow_error_descriptionnotwritten)
        return false
    }
    return true

}
