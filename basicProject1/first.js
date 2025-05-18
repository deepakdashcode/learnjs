const btns = Array.from(document.querySelectorAll('.buttons'))
btns.forEach((item)=>{
    item.style.backgroundColor = item.id
    console.log(item.id);

    item.addEventListener('click', (event)=>{
        document.body.style.backgroundColor = event.target.id
    })
})
