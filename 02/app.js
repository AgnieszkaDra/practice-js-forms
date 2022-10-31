const email = document.querySelector('input[name="login"]')
const password1 = document.querySelector('input[name="pass1"]')
const password2 = document.querySelector('input[name="pass2"]')
const acceptP = document.querySelector('input[name="acc"]')
const div = document.querySelector('div')
console.log(div.children[0])

const form = document.querySelector('form')
console.log(form)
const submit = document.querySelector('input[type="submit"]')


form.addEventListener('submit', function(e){
    e.preventDefault()
//console.log(submit)
})


submit.addEventListener('click', function(e){
    const isValidEmail = email => {
    const re = /@/
   return re.test(email);
}



if (email.value === '') {
    email.parentElement.children[0].classList.add('color')
        
 
   
} else if (!isValidEmail(email.value)) {
    email.parentElement.children[0].classList.add('color')
    
} 


if(password1.value.length >= 6 &&  password2.value === password1.value && acceptP.checked === true){
   console.log('done')
} else {
    password1.parentElement.children[0].classList.add('color')
    password2.parentElement.children[0].classList.add('color')
}
})









