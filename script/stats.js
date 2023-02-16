
let notes = JSON.parse(localStorage.notes)

let setMoodCounter = () => {

    let happycount = 0;
    let goodcount = 0;
    let confusedcount = 0;
    let sadcount = 0;

    for(const note of notes) {

        if(note.mood == "happy"){
            happycount++
        }
        else if(note.mood == "good"){
            goodcount++
        }
        else if(note.mood == "confused"){
            confusedcount++
        }
        else if(note.mood == "sad"){
            sadcount++
        }

    }

    const labels = document.getElementsByClassName('mood-circle')
    labels[0].innerText = happycount
    labels[1].innerText = goodcount
    labels[2].innerText = confusedcount
    labels[3].innerText = sadcount

    console.log(happycount)

}

let mostFrequentWords = () => {

    let totalnote = ""
    for(let note of notes){
        totalnote = totalnote + note.description + " " + note.oneword + " "
    }

    text = totalnote

    let wordCount = {};
    let words = text.split(" ");

    let provvisory = []
    for(let word of words) {
        if(word.length>=3){
            provvisory.push(word)
        }
    }
    words = provvisory
  
    for (let word of words) {
      if (wordCount.hasOwnProperty(word)) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    let sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
    let frequentWords = sortedWords.slice(0, 3);
  
    let frequentWordsWithCount = frequentWords.map(word => {
      return {
        word: word,
        count: wordCount[word]
      };
    });
  
    return frequentWordsWithCount;
}

let setMostFrequentWords = () => {
    const mfw = mostFrequentWords()

    const words = document.getElementsByClassName('mus-word')
    const counts = document.getElementsByClassName('mus-count')

    for(let n=0; n<3; n++){
        try{
            words[n].innerText = mfw[n].word
            counts[n].innerText = mfw[n].count
        } catch {
            words[n].innerText = "..."
            counts[n].innerText = "0"
        }
    }

}

let setDates = () => {
    if(notes.length!==0){
        document.getElementsByClassName('first-date')[0].innerText = stats_firstdate + " " + notes[0].date
        document.getElementsByClassName('last-date')[0].innerText = stats_lastdate + " " + notes[notes.length-1].date
    } else {
        document.getElementsByClassName('first-date')[0].innerText = stats_firstdate + " " + "??/??/????"
        document.getElementsByClassName('last-date')[0].innerText = stats_lastdate + " " + "??/??/????"
    }
}

let setCount = () => {
    document.getElementById('notecount').innerText = notes.length
}

let setStats = () => {
    notes = JSON.parse(localStorage.notes)
    setMoodCounter()
    setMostFrequentWords()
    setDates()
    setCount()
}
