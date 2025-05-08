document.getElementById('input').addEventListener('keyup',(event)=>{
    const text = event.target.value
    const deleteBtn = document.getElementById('delete-btn')
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled',true)
    }
})
document.getElementById('delete-btn').addEventListener('click',()=>{
    const secret = document.getElementById('secret')
    secret.style.display = 'none'
})
