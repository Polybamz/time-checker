const arrival = document.querySelector(".arrival");
const state = document.querySelector(".state");

const arrival1 = document.querySelector(".arrival1");
const state1 = document.querySelector(".state1");

const arrival2 = document.querySelector(".arrival2");
const state2 = document.querySelector(".state2");

arrival.addEventListener('click', ()=>{
    const date = new Date();
    const time = date.getHours();
    const minutes = date.getMinutes();
    const finalTime = time + ":" + minutes;
 
    arrival.innerHTML = finalTime;

    if(finalTime < '11:50'){
        state.innerHTML="Early";
       
    }else{
        state.innerHTML="Late"
        state.classList.add("Late")
    }
    arrival.classList.add('disabled')
});

arrival1.addEventListener('click', ()=>{
    const date = new Date();
    const time = date.getHours();
    const minutes = date.getMinutes();
    const finalTime = time + ":" + minutes;
 
    arrival1.innerHTML = finalTime;

    if(finalTime < '11:50'){
        state1.innerHTML="Early";
       
    }else{
        state1.innerHTML="Late"
        state1.classList.add("Late")
    }
    arrival1.classList.add('disabled')
});

arrival2.addEventListener('click', ()=>{
    const date = new Date();
    const time = date.getHours();
    const minutes = date.getMinutes();
    const finalTime = time + ":" + minutes;
 
    arrival2.innerHTML = finalTime;

    if(finalTime < '11:50'){
        state1.innerHTML="Early";
       
    }else{
        state2.innerHTML="Late"
        state2.classList.add("Late")
    }
    arrival2.classList.add('disabled')
});
