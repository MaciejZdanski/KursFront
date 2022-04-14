const name = 'John';
const age = 25;

let year = 2022;
// age++
year++
// console.log(name + ' ma ' + age + ' lat');
// console.log("age: " + age + " year: " + year);

const user = {
  name: 'John',
  age: 25,
  "jest adminem": true
}

// console.log(user)
// console.log(user['age'])
// console.log(console)
// console.log(user.name)

const users = ['John', 'Jane', 'Mary', 'Mark'];

// console.log(users[3])


const company = {
  name: 'Google',
  workers: [
    {
      name: 'John',
      age: 25,
    },
    {
      name: 'Jane',
      age: 30,
    }
  ]
}
// console.log(company.workers[0])

// FUNKCJA
// function greet(name) {
//   return 'Witaj ' + name + ' !'
// }

// FUNKCJA STRZAŁKOWA
const greet = name => {
  return 'Witaj ' + name + ' !'
}


// greet("John")
// "Witaj John !"
// const message = greet("Jane")
// console.log( message )

// console.log( greet("Jane") )

// METODY
const konsola = {
  log(string){
    console.log(string)
  },
  assert(){
    // costam
  }
}

// console.log(konsola)
// console.log(console)




// DOM - DOCUMENT OBJECT MODEL
// console.log(document)

// document.querySelector("h1").innerText = "Hello World!";
// document.querySelector("h1").style.cssText 

const h1 = document.querySelector("h1")
h1.innerText = "HW2"
h1.style.cssText = `
  color: red;
  font-size: 50px;
  text-align: center;
`
const h2 = document.createElement("h2")
h2.innerText = "Hello from the js side!"
document.querySelector("body > header").append(h2)


// EVENTS
// h2.addEventListener("click", e => {
//   console.log(e)
// })
h2.addEventListener("click", function ( e ) {
  console.log(e)
})

// "ŚCIĄGANIE EVENT LISTENERÓW"
const thisEvent = e => {
  console.log(e)
}
h1.addEventListener("click", thisEvent)
h1.removeEventListener("click", thisEvent)


// OPERATOR WARUNKOWY
const workers = [
  { name: 'John',
    sex : 'male',
  },
  { name: 'Jane',
    sex : 'female',
  },
  { name: 'Maria',
    sex : 'female',
  },
  {name: 'Bob',
    sex : 'male',
  }
]

for(const worker of workers){
  
  if( worker.sex == 'female'){
    // console.log(worker.name + " is FEMALE ")
  }else{
    // console.log(worker.name + " is NOT FEMALE ")
  }



}


const checkAdmin = isAdmin => {
  if(isAdmin){
    console.log("WITAJ ADMINIE")
  }else{
    console.log("WITAJ UŻYKOWNIKU")
  }
}

let isAdmin = false;

h1.addEventListener("click", e => {
  isAdmin = !isAdmin;
  checkAdmin(isAdmin)
})


  var ZMIENNA_Y = 1000;



  if(true){
    let ZMIENNA_X = 0;
    var ZMIENNA_Y = 0;
    // console.log("NO jest.")
  }
  
  // console.log(ZMIENNA_Y)
  // console.log(ZMIENNA_X)