const button = document.querySelector('.container button');
const joketxt=document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',getJoke);

button.addEventListener('click',getJoke);

async function getJoke(){
    const data= await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj=await data.json();
    //console.log(jokeobj);
    joketxt.innerHTML=jokeobj.joke;
}