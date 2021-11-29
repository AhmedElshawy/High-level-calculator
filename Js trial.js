




let input = document.getElementById("input")
let result = document.getElementById("result")
let number = document.querySelectorAll(".numbers div")
let operator = document.querySelectorAll(".operators div")
let clear = document.getElementById("clear")



for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click" , (eo) => {


    let currentString = input.innerHTML
    let lastChar = currentString[ currentString.length - 1 ]

    input.innerHTML += eo.target.innerHTML
  })
  
}


for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click" , (eo) => {

    input.innerHTML += eo.target.innerHTML

  })
  
}

result.addEventListener("click" , () => {


  let inputString = input.innerHTML 

  let arrNumbers =  inputString.split(/\+|\-|\*|\//g)
  console.log(arrNumbers)

  let arroperators = inputString.replace(/[0-9]|\./g , "").split("")
  console.log(arroperators)


  let divide = arroperators.indexOf("/")

  while (divide != -1 ) {
    arrNumbers.splice(divide , 2 , arrNumbers[divide] / arrNumbers[divide+1])
    arroperators.splice(divide , 1 )
    divide = arroperators.indexOf("/")
  }

  let multiply = arroperators.indexOf("*")

  while (multiply != -1) {
    arrNumbers.splice(multiply , 2 , arrNumbers[multiply] * arrNumbers[multiply+1])
    arroperators.splice(multiply , 1)
    multiply = arroperators.indexOf("*")
  }

  let subtraction = arroperators.indexOf("-")

  while (subtraction != -1 ) {
    arrNumbers.splice(subtraction , 2 , arrNumbers[subtraction] - arrNumbers[subtraction+1])
    arroperators.splice(subtraction , 1 )
    subtraction = arroperators.indexOf("-") 
  }

  let add = arroperators.indexOf("+")

  while (add != -1 ) {

    arrNumbers.splice(add , 2 , parseFloat(arrNumbers[add]) + parseFloat(arrNumbers[add+1]))
    arroperators.splice(add , 1 )
    add = arroperators.indexOf("+")
  }

  input.innerHTML = arrNumbers[0]


})

clear.addEventListener("click" , () => {


  input.innerHTML = ""
  
})

