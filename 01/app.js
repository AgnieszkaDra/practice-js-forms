const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
})

const firstName = document.querySelector('input[name="firstName"]')
const lastName = document.querySelector('input[name="lastName"]')

const submit = document.querySelector('input[type="submit"]')

submit.addEventListener('click', function(){
if(firstName.value !== '' && lastName.value !== ''){
const ul = document.querySelector('.users-list')
    
const li = document.createElement('li')
li.innerText = firstName.value + lastName.value

ul.appendChild(li)
}
})
console.log(firstName)


