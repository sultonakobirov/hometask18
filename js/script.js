let cross = document.querySelector('.cross')
let container = document.querySelector('.container')
let form = document.querySelector('.form-container')
let thanks = document.querySelector('.thanks-container')

cross.onclick = ()=>{
    form.style.display = 'none'
    thanks.style.display = 'none'
    cross.style.display = 'none'
}
container.querySelector('button').onclick = ()=>{
    cross.style.display = 'block'
    container.style.display = 'none'
    form.style.display = 'flex'
}
form.querySelector('button').onclick = ()=>{
    zero = 0
    for(let i of form.querySelector('form').children){
        if (i.value !== '') {
            zero++
                if (zero >= 3) {
                    form.style.display = 'none'
                thanks.style.display = 'flex'
                setTimeout(()=>{
                    cross.style.display = 'none'
                    thanks.style.display = 'none'
                }, 3000)
                }
        }else{
            form.querySelector('p').style.display = 'block'
        }
    }
}