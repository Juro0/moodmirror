let addnotewindow_error_onewordtoolong
let addnotewindow_error_moodnotchosed
let addnotewindow_error_onewordnotwritten
let addnotewindow_error_descriptionnotwritten

let stats_firstdate
let stats_lastdate

let notify_download
let notify_reset

let loadLenguage = (data) => {
    data = JSON.parse(data)

    // MENU
    let menu = data.menu
    document.getElementById('menubtn-diary').innerText = menu.goto_diary
    document.getElementById('menubtn-stats').innerText = menu.goto_stats
    document.getElementById('menubtn-info').innerText = menu.goto_info
    document.getElementById('menubtn-lenguage').innerText = menu.execute_lenguage
    document.getElementById('menubtn-reset').innerText = menu.execute_reset

    let diary = data.diary
    document.getElementsByClassName('add-note-cta')[0].innerText = diary.add_note_button.add_note_text
    document.getElementsByClassName('add-note-subtitle')[0].innerText = diary.add_note_button.add_note_subtext
    document.getElementsByClassName('label')[0].innerText = diary.add_note_window.one_word_input
    document.getElementsByClassName('label')[1].innerText = diary.add_note_window.description_input
    
    addnotewindow_error_onewordtoolong = diary.add_note_window.errors.one_word_too_long
    addnotewindow_error_moodnotchosed = diary.add_note_window.errors.mood_not_chosen
    addnotewindow_error_descriptionnotwritten = diary.add_note_window.errors.description_not_written
    
    // STATS
    let stats = data.stats
    document.getElementsByClassName('mus-title')[0].innerText = stats.most_used_word_label
    document.getElementsByClassName('notecount-title')[0].innerText = stats.total_notes_label
    stats_lastdate= stats.last_date_label
    stats_firstdate = stats.first_date_label
    
    // NOTIFY
    let notify = data.notify
    notify_download = notify.download
    notify_reset = notify.reset

    // GENERAL
    let general = data.general
    document.getElementById('confirm-accept').innerText = general.confirm_button
    document.getElementById('confirm-deny').innerText = general.cancel_button
    document.getElementById('addnote-confirm').innerText = general.confirm_button
    document.getElementById('addnote-deny').innerText = general.cancel_button

}

let changeLenguage = (len) => {
    localStorage.len = len
    location.reload()
}

let showChangeLenguage = () => {
    document.getElementById("changelenguage-window").classList.remove('hide')
}

let hideChangeLenguage = () => {
    document.getElementById("changelenguage-window").classList.add('hide')
}

let addFlagListener = () => {

    document.getElementById('close-lenguage-window').addEventListener(
        'click',
        ()=>{
            hideChangeLenguage()
        }
    )

    const flags = document.getElementsByClassName('flag-img')
    for(let flag of flags){
        flag.addEventListener('click', ()=>{
            changeLenguage(flag.id)
        })
    }

}
addFlagListener()

const lenguage = eval(localStorage.getItem('len'))
loadLenguage(lenguage, 'diary')
