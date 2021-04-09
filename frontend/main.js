// const { response } = require("express")
let africa = 0;
let europe = 0;
let asia = 0;
let americas = 0;

let category = ['Music','Food', 'Culture', "Activities"]
console.log(category[3])

document.querySelector('#signup-link').addEventListener('click', ()=>{
    document.querySelector('#signUpScreen').classList.remove('hidden')
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#loginScreen').classList.add('hidden')

})
document.querySelector('#login-link').addEventListener('click', ()=>{
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#loginScreen').classList.remove('hidden')
    document.querySelector('#signUpScreen').classList.add('hidden')

})

document.querySelector('.signup-form').addEventListener('submit', async(event) =>{
    event.preventDefault()

    const nameV = document.querySelector('#signup-name').value
    const emailV = document.querySelector('#signup-email').value
    const passwordV = document.querySelector('#signup-password').value

    try {
        const response = await axios.post('http://localhost:3011/users',{
            name: nameV,
            email: emailV,
            password: passwordV
        })
        const userId = response.data.user.id 
        localStorage.setItem('userId', userId)
        console.log(response.data.user.id)
    } catch (error) {
        console.log(error)
        alert('name and email already taken')   
    }
    document.querySelector('#dashboardScreen').classList.remove('hidden')
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#signUpScreen').classList.add('hidden')
    document.querySelector('#loginScreen').classList.add('hidden')
})

document.querySelector('.login-form').addEventListener('submit', async(event) =>{
    event.preventDefault()

    const emailV = document.querySelector('#login-email').value
    const passwordV = document.querySelector('#login-password').value
    let response;
    try {
        response = await axios.post('http://localhost:3011/users/login',{
           email: emailV,
           password: passwordV
       })
       const userId = response.data.user.id 
       localStorage.setItem('userId', userId)
       console.log(response.data.user.id)
       console.log(response.data.message)
   } catch (error) {
       console.log(error)
       alert('email or password is incorrect') 
   }
 if (response.data.message === 'login successful'){
    document.querySelector('#dashboardScreen').classList.remove('hidden')
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#signUpScreen').classList.add('hidden')
    document.querySelector('#loginScreen').classList.add('hidden')
}else{
    alert('email or password is incorrect')
}
})

document.querySelector('.option-form').addEventListener('submit', async(event) =>{
    event.preventDefault()

    const music = document.querySelector('#option1').value
    const food = document.querySelector('#option2').value
    const activities = document.querySelector('#option3').value
    const culture = document.querySelector('#option4').value
    console.log(music)
    console.log(food)
    console.log(activities)
    console.log(culture)

    if( music === 'Music'){
        africa = africa + 2;
        europe = europe + 2;
        asia = asia + 1;
        americas = americas + 3;
    } 
   if( food === 'Food'){
        africa = africa + 1;
        europe = europe + 3;
        asia = asia + 2;
        americas = americas + 1;
    } 
  if( culture === 'Culture'){
        africa = +3;
        europe = +2;
        asia = +2;
        americas = +3;
    } 
  if( activities === 'Activities'){
        africa = +1;
        europe = +2;
        asia = +2;
        americas = +3;
    } 
    console.log(africa)
    console.log(europe)
    console.log(asia)
    console.log(americas)



    document.querySelector('#dashboardScreen').classList.add('hidden')
    document.querySelector('#dashboardScreen2').classList.remove('hidden')
})

let i = 0;
let currentCategory = document.querySelector('.category')
currentCategory.innerText = category[0]
document.querySelector('.skip').addEventListener('click', ()=>{
       currentCategory.innerText = category[i]
       i++
       if( i === 3){
            document.querySelector('#dashboardScreen2').classList.add('hidden')
            document.querySelector('#dashboardScreen3').classList.remove('hidden') 
            i = 0;
       }
})


