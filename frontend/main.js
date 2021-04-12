// const { response } = require("express")
let africa = 0;
let europe = 0;
let asia = 0;
let americas = 0;

let resultId

let category = ['Music','Food', 'Culture', "Activities"]

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

    const firstnameV = document.querySelector('#signup-firstname').value
    const lastnameV = document.querySelector('#signup-lastname').value
    const emailV = document.querySelector('#signup-email').value
    const passwordV = document.querySelector('#signup-password').value

    try {
        const response = await axios.post('http://localhost:3011/users',{
            firstname: firstnameV,
            lastname: lastnameV,
            email: emailV,
            password: passwordV
        })
        const userId = response.data.user.id 
        localStorage.setItem('userId', userId)
        console.log(response.data.user.id)
        let userName = document.querySelector('.user-name')
        userName.innerText = `Welcome ${response.data.user.firstname}`
        document.querySelector('#dashboardScreen').classList.remove('hidden')
        document.querySelector('.home-page').classList.add('hidden')
        document.querySelector('#signUpScreen').classList.add('hidden')
        document.querySelector('#loginScreen').classList.add('hidden')
    } catch (error) {
        console.log(error)
        alert('name and email already taken')   
    }
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
    //    console.log(response.data.user.id)
    //    console.log(response.data.message)
    //    console.log(response.data)
    if (response.data.message === 'login successful'){
       let userName = document.querySelector('.user-name')
       userName.innerText = `Welcome back ${response.data.user.firstname}`
       document.querySelector('#dashboardScreen').classList.remove('hidden')
       document.querySelector('.home-page').classList.add('hidden')
       document.querySelector('#signUpScreen').classList.add('hidden')
       document.querySelector('#loginScreen').classList.add('hidden')
   }else{
       alert('email or password is incorrect')
   }
   } catch (error) {
       console.log(error)
       alert('email or password is incorrect') 
   }
})


const music = document.querySelector(("input[name=Music]"))
music.addEventListener('change', ()=>{
    let formcount1 = 0;
    if(formcount1 === 0){
        console.log("you clicked it")
             africa = africa + 2;
             europe = europe + 2;
             asia =  asia + 1;
             americas = americas + 3;
             formcount1 = 1;
    }else if(formcount1 === 1) {
        console.log("you unclicked it")
        africa = africa - 2;
        europe = europe - 2;
        asia =  asia - 1;
        americas = americas - 3;
        formcount1 = 0
    }
})

const food = document.querySelector(("input[name=Food]"))
food.addEventListener('change', ()=>{

    let formcount1 = 0;
    if(formcount1 === 0){
        console.log("you clicked it")
        africa = africa + 1;
        europe = europe + 3;
        asia = asia + 2;
        americas = americas + 1;
        formcount1 = 1;
    }else{
        console.log("you unclicked it")
        africa = africa - 1;
        europe = europe - 3;
        asia = asia - 2;
        americas = americas - 1;
        formcount1 = 0;
    }
})

const culture = document.querySelector(("input[name=Culture]"))
culture.addEventListener('change', ()=>{
        let formcount1 = 0;
        if(formcount1 === 0){
            console.log("you clicked it")
            africa =  africa + 3;
            europe =  europe + 2;
            asia = asia + 2;
            americas = americas + 3;
            formcount1 = 1;
        }else{
            console.log("you unclicked it")
            africa =  africa - 3;
            europe =  europe - 2;
            asia = asia - 2;
            americas = americas - 3;
            formcount1 = 0;
        }
        
})

const activities = document.querySelector(("input[name=Activities]"))
activities.addEventListener('change', ()=>{
        let formcount1 = 0;
        if(formcount1 === 0){
            console.log("you clicked it")
            africa = africa + 1;
            europe = europe + 2;
            asia = asia + 2;
            americas = americas + 3;
            formcount1 = 1;

        }else{
            console.log("you unclicked it")
            africa = africa - 1;
            europe = europe - 2;
            asia = asia - 2;
            americas = americas - 3;
            formcount1 = 0;
        }
})



let click = 0;
let Imgclick1 = 0;
let Imgclick2 = 0;
let Imgclick3 = 0;
let Imgclick4 = 0;

let africaImg = document.querySelector('.africa_img')
africaImg.addEventListener('click',  () =>{
    if (Imgclick1 === 0){
        africaImg.classList.add('selected')
        africa = africa + 1;
        click++;
        Imgclick1 = 1;
    }
    else if (Imgclick1 === 1){
        africaImg.classList.remove('selected')
        africa = africa - 1;
        click = click - 1;
        Imgclick1 = 0;
    }
    if (click > 2){
        alert('You Have Clicked 2 Images') 
        africaImg.classList.remove('selected')
        click = 2;
    }
console.log(click)

})
let americanImg = document.querySelector('.american_img')
americanImg.addEventListener('click',  () =>{

    if (Imgclick2 === 0){
        americanImg.classList.add('selected')
        americas = americas + 1;
        Imgclick2 = 1;
        click++;
    }
    else if (Imgclick2 === 1){
        americanImg.classList.remove('selected')
        americas = americas - 1;
        click = click - 1;
        Imgclick2 = 0;
    }
    if (click> 2){
        alert('You Have Clicked 2 Images') 
        americanImg.classList.remove('selected')
        click = 2;
    }
    console.log(click)

})
let asianImg = document.querySelector('.asian_img')
asianImg.addEventListener('click',  () =>{

    if (Imgclick3 === 0){
        asianImg.classList.add('selected')
        asia = asia + 1;
        Imgclick3 = 1;
        click++;
    }
    else if (Imgclick3 === 1){
        asianImg.classList.remove('selected')
        asia = asia - 1;
        click = click - 1;
        Imgclick3 = 0;
    }
    if (click> 2){
        alert('You Have Clicked 2 Images') 
        asianImg.classList.remove('selected')
        click = 2;
    }
    console.log(click)
})
let europeanImg = document.querySelector('.european_img')
europeanImg.addEventListener('click',  () =>{
    if (Imgclick4 === 0){
        europeanImg.classList.add('selected')
        europe = europe + 1;
        click++;
        Imgclick4 = 1;
    }
    else if (Imgclick4 === 1){
        asianImg.classList.remove('selected')
        europe = europe - 1;
        click = click - 1;
        Imgclick4 = 0;
    }
    if (click> 2){
        alert('You Have Clicked 2 Images') 
        asianImg.classList.remove('selected')
        click = 2;
    }
console.log(click)

})

document.querySelector('.next').addEventListener('click',  () =>{
    africaImg.classList.remove('selected')
    americanImg.classList.remove('selected')
    asianImg.classList.remove('selected')
    europeanImg.classList.remove('selected')


        africaImg.src = "./images/africa2.jpg";
        europeanImg.src = "./images/europe2.jpg";
        americanImg.src = "./images/american2.jpg";
        asianImg.src = "./images/asia2.jpg"

        Imgclick1 = 0;
        Imgclick2 = 0;
        Imgclick3 = 0;
        Imgclick4 = 0;
        click = 0;
        console.log(click)

})



let i = 0;
document.querySelector('.option-form').addEventListener('submit', async(event) =>{
    event.preventDefault()
    document.querySelector('#dashboardScreen').classList.add('hidden')
    document.querySelector('#dashboardScreen2').classList.remove('hidden')
    console.log (i)
})

let currentCategory = document.querySelector('.category')
currentCategory.innerText = category[i]
console.log (i)
document.querySelector('.skip').addEventListener('click', ()=>{
console.log (i)
       i++
       currentCategory.innerText = category[i]
       console.log(i)
       if( i === 4){
           document.querySelector('#dashboardScreen2').classList.add('hidden')
           document.querySelector('#dashboardScreen3').classList.remove('hidden') 
           i = 0;
        }
                finalContinent()
})

let finalContinent = () =>{
    let result = Math.max(africa,europe,americas,asia)
        console.log(result)
    let final = document.querySelector('#final-result')
    if(result === africa){

        final.innerText = "Africa Next"
    }
    if(result === europe){
        final.innerText = "Europe Next"
    }
    if(result === americas){
        final.innerText = "North Or South America Next"
    }
    if(result === asia){
     final.innerText = "Asia Next"
    }
}

document.querySelector('#logout-link').addEventListener('click', ()=>{
    localStorage.removeItem('userId')
    document.querySelector('.option-form').reset();
    document.querySelector('.login-form').reset();
    document.querySelector('.signup-form').reset();
    document.querySelector('#dashboardScreen3').classList.add('hidden')
    document.querySelector('.home-page').classList.remove('hidden')
    africa =  0;
    europe = 0;
    asia = 0;
    americas = 0;
    i = 0;
})


