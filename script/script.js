let addClasses = (el, list) => {
    list = list.split(' ')
    for(let element of list){
        el.classList.add(element)
    }
}

let url = link => {
    if(link.startsWith('http')){
        window.open(link, '_blank')
    } else {
        location.href = link
    }
}

const getDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
  
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return `${dd}/${mm}/${yyyy}`;
}

let getSelectedMood = () => {
    const addnotewindow = document.getElementById('addnote-window')
    const moods = addnotewindow.getElementsByClassName('ms-mood')

    for(let mood of moods){
        if(mood.classList.contains('active')){
            return mood.classList[3].split('-')[0]
        }
    }

}  

let addFirstChild = (child) => {
    const parent = document.getElementById('diary-parent');
    parent.insertBefore(child, parent.firstChild);
};

// ==================================================== MENU

const diaryPage = document.getElementById('diary')
const statsPage = document.getElementById('stats')
const infoPage = document.getElementById('info')

let clearPagesClasslist = () => {
    for(let el of document.getElementsByClassName('page')){
        el.classList.remove('pos-1')
        el.classList.remove('pos-2')
        el.classList.remove('pos-3')
        el.classList.remove('pos-4')
        el.classList.remove('pos-5')
    }
}

let showPage = id => {
    clearPagesClasslist()
    if(id=='menubtn-diary'){
        diaryPage.classList.add('pos-3')
        statsPage.classList.add('pos-4')
        infoPage.classList.add('pos-5')
    }
    if(id=='menubtn-stats'){
        setStats()
        diaryPage.classList.add('pos-2')
        statsPage.classList.add('pos-3')
        infoPage.classList.add('pos-4')
    }
    if(id=='menubtn-info'){
        diaryPage.classList.add('pos-1')
        statsPage.classList.add('pos-2')
        infoPage.classList.add('pos-3')
    }
}

let addMenuListener = () => {
    for(let menuBtn of document.getElementsByClassName('menu-button-page')){
        menuBtn.addEventListener('click', ()=>{
            showPage(menuBtn.id)
        })
    }
}
addMenuListener()

// ==================================================== CONFIRM

let hideConfirm = () => {
    document.getElementById('confirm-window').classList.add('hide')
}

let clearListeners = (el) => {
    const clone = el.cloneNode(true);
    el.parentNode.replaceChild(clone, el);
}

let showConfirm = (text, action) => {
    document.getElementsByClassName('confirm-content')[0].innerText = text
    document.getElementById('confirm-window').classList.remove('hide')

    document.getElementById('confirm-deny').addEventListener('click', ()=>{
        hideConfirm()
        clearListeners(document.getElementById('confirm-deny'))
    })
    document.getElementById('confirm-accept').addEventListener('click', ()=>{
        action.call()
        hideConfirm()
        clearListeners(document.getElementById('confirm-accept'))
    })
}

// ==================================================== FLOWING TOGGLER

let clearActive = classElements => {
    for(let el of classElements) {
        el.classList.remove('active')
    }
}

let active = el => {
    el.classList.add('active')
}

let flowingToggler = classId => {
    classElements = document.getElementsByClassName(classId)
    for(let el of classElements) {
        el.addEventListener('click', ()=>{
            clearActive(document.getElementsByClassName(el.classList[0]))
            active(el)
        })
    }
}

let getActiveMod = () => {
    classElements = document.getElementsByClassName('mod')
    for(let el of classElements) {
        if(el.classList.contains('active')){
            return el.id
        }
    }
}

flowingToggler('ms-mood')
flowingToggler('menu-button-page')

// ==================================================== CONSOLE WARNING

let sendMessage = () => {
    console.log("%cFERMO!", "color: #f95fa7; font-family: sans-serif; font-size: 4.5rem; font-weight: bolder; text-shadow: #f0f0f0 2px 2px");
    console.log("%cquesta è una finestra offerta dal browser ai developer per veloci test del sito.",
    "color: #f95fa7; font-family: sans-serif; font-size: 1rem; font-weight: bold")
    console.log("%ca meno che tu non sappia esattamente cosa stai facendo, non incollare ne copiare NIENTE da questa finestra, o potresti condividere le tue note con utenti malintenzionati!",
    "color: #f598c3; font-family: sans-serif; font-size: 1rem")
    console.log("%cper sapere di più su questo tipo di attacchi, documentati sugli attacchi Self-XSS\n\nhttps://en.wikipedia.org/wiki/Self-XSS\n\nse invece sei sicuro di ciò che stai facendo, considera l'idea di collaborare a questa repository!\n\nhttps://github.com/juro0/moodmirror\n\n", "color: #f0f0f0; font-family: sans-serif; font-size: 1rem")
}
sendMessage()
