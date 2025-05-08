const upload_Btn = document.getElementById('upload').addEventListener('click',()=>{
    const p = document.getElementById('comment-section')
    const texts = document.getElementById('comments')
    const text1 = texts.value
    const p1 = document.createElement('p')
    p1.innerText = text1
    p.appendChild(p1)
    texts.value = ''
})
