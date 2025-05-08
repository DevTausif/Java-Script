const btn = document.getElementById('red-btn')
btn.addEventListener('click',()=>{
    const h1 = document.getElementsByTagName('h1')
    for(const h1s of h1){
       h1s.style.color = 'red'
    }
})


