
// localStorage.notes = JSON.stringify([
//     {
//         mood: "happy",
//         date: "12/01/0000",
//         oneword: "juri",
//         desc: "Lorem ipsum dolor sit amen"
//     }
// ])

let checkFirstTime = () => {
    if(localStorage.getItem('notes')){
        return false
    }
    return true
}

let firstTime = () => {
    localStorage.setItem('notes', '[]')
    changeLenguage('en_EN')
}

let checkLocalStorage = () => {
    if(checkFirstTime()){
        firstTime()
    } else {
            const notes = JSON.parse(localStorage.notes)
            for(let note of notes){
                noteGenerator(note.mood, note.oneword, note.date, note.description, false)
            }
        }
}

let resetLocalStorage = () => {
    showConfirm(notify_reset,
    ()=>{
        let actuallenguage = localStorage.len
        localStorage.clear()
        localStorage.setItem('len', actuallenguage)
        location.reload()
    })
}

let pushNote = note => {
    let notes = JSON.parse(localStorage.notes)
    notes.push(note)
    localStorage.notes = JSON.stringify(notes)
}

checkLocalStorage()
