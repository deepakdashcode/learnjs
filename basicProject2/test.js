const darkBtn = document.getElementById('btnDark')

darkBtn.addEventListener('click', (event)=>{
    const body = document.querySelector('body')
    const className = body.getAttribute('class')
    if(className === 'bg-black')
    {
        body.setAttribute('class', '')
    }
    else{
        body.setAttribute('class', 'bg-black')
    }  
})


const height = document.getElementById('height')
const weight = document.getElementById('weight')
const form = document.getElementById('bmiForm')
const result = document.getElementById('result')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const weightNum = Number(weight.value.trim())
    const heightNum = Number(height.value.trim()) / 100
    let bmi = weightNum / (heightNum**2)
    bmi = +bmi.toFixed(2)
    
    
    result.innerText = bmi
})