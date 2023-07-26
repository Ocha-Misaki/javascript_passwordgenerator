{
  'use strict'

  const keywords =['a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const symbols = ['!','#','$','%','&','?']
  
  //スライダー
  const passwordLength = document.querySelector('#password-length')
  const input = document.querySelector('#slider')
  passwordLength.textContent = input.value
  input.addEventListener('input', (event) => {
    passwordLength.textContent = event.target.value
  })

  //チェックボックス
  const createNewArray = (element, array) => {
    element.addEventListener('change', () => {
      if(element.checked === true){
        array.forEach((word)=> {
          keywords.push(word)
        })
      }else{
        array.forEach((word) => {
          keywords.pop(word)
        })
      }
    })
  }
  const numberCheckBox = document.querySelector('#number')
  createNewArray(numberCheckBox, numbers)
  const symbolCheckBox = document.querySelector('#symbol')
  createNewArray(symbolCheckBox, symbols)

  
  const buttonElement = document.querySelector('button')
  buttonElement.addEventListener('click', () => {
    const pElement = document.querySelector('p')
    let password = ''
    for(let i = 0; i< input.value; i++){
      let randomNum = Math.floor(Math.random() * keywords.length)
      password += keywords[randomNum]
    }
    pElement.textContent = password
  })
}