document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('login-btn').addEventListener('click',(event)=>{
    event.preventDefault()
    const phn_num = document.getElementById('phone-number').value
    const pin_num = document.getElementById('pin').value
    if(phn_num.length === 11 && pin_num.length === 4){
        window.location.href = 'home.html'
    }
    else{
        alert('Invalid')
    }    
})
})