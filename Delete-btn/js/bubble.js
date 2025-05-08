document.getElementById('item-2').addEventListener('click',(event)=>{
    console.log('item-2')
    event.stopPropagation()
})

document.getElementById('list-ul').addEventListener('click',(events)=>{
    console.log('list-ul')
    events.stopPropagation()
})
document.getElementById('list-container').addEventListener('click',(events)=>{
    console.log('list-container')
    events.stopPropagation()
})