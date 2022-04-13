

// PROJEKTY

// stała allCItems, przechowująca tablicę ("[el1,el2]") wszyskich klas .cItem w #projects
const allCItems = document.querySelectorAll("#projects .cItem");
// wyciągamy każdy .cItem osobno
allCItems.forEach( cItem => {
  // każdemu po kliknięciu dodajemy funkcję strzałkową
  cItem.onclick = () => {
    // usuń klasę .active ze wszystkich elemenyów
    allCItems.forEach( cItem2 => {
      cItem2.classList.remove("active")
    })
    // do klikniętego elementu dopisz klasę ".active"
    cItem.classList.add("active")
  }
})

// COOKIES

document.querySelector(".cookies button").onclick = e =>  {
    e.target.parentElement.remove();
}