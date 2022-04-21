// ZMIENNA PRZETRZYMUJĄCA INFOMARCJĘ O ILOŚCI KOMENTARZY
let oldDataLength = 0;

// POBIERANIE KOMENTARZY
function getComments(){
  fetch(location.origin + "/getComments") // wysyła zapytanie do getcomment
  // zamieniamy odpowiedźna formę jsonową
  .then(dt => dt.json())
  .then(dt => {
    
    // sprawdzenie ilości komentarzy
    if(dt.length == oldDataLength){ 
      console.log("Nie ma nowych komentarzy");
      return;
    }else{
      oldDataLength = dt.length;
    }

    // Segregowanie komentarzy od najnowszych
    dt.reverse();

    // pobieramy sekcję komentarzy z HTML'A
    const commmentSection = document.querySelector(".commentsSection")
    // czyścimy komentarze
    commmentSection.innerText = "";

    // pętla, która wyświetla komentarze z dt jako comment
    for(let comment of dt){
      // tworzymy nowy element article (dla komentarza)
      const article = document.createElement("article");
  
      // tworzymy nowy element DIV (dla nicku)
      const nick = document.createElement("div");
      nick.innerText = comment.nick; // wpisujemy do DIV nick (pobrany z dt)
      article.append(nick); // przypinamy div do article
  
      // tworzymy nowy element DIV (dla komentarza)
      const content = document.createElement("div");
      content.innerText = comment.comment;
      article.append(content);
      
      // przypinamy article d oprzygotowanej sekcji Z HTML'a
      commmentSection.append(article);
    }
  })
}

getComments();


// WYSYŁANIE KOMENTARZY

const form = document.querySelector("form");  // pobieramy form Z HTML'a
form.addEventListener("submit", e => {  // WYŁAPUJEMY MOMENT WYSŁANIA FORMULARZA
  e.preventDefault();  // BLOKUJEMY DOMYŚLNĄ AKCJĘ WYDARZENIA (WYSŁANIE FORMULARZA)

  // POBRANIE DANYCH Z FORMULARZA
  const form = e.target;
  const nick = form[0].value;
  const comment = form[1].value;

  // WYSYŁAMY DANE Z FORMULARZA DO SERWERA
  fetch(form.action + "?nick=" + nick + "&comment=" + comment)
  .then(dt => dt.text())
  .then(dt => {
    
    console.log(dt)  // wyświetlamy odpowiedź z serwera
    getComments();
  })

})

// WYKONUJ FUNKCJĘ getComments CO SEKUNDĘ (1000 MILISEKUND)
setInterval(getComments, 1000)