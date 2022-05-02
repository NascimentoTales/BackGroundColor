const cores = ['azul', 'vermelho', 'amarelo']

const btn = document.getElementById('btn') 
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    sortearCor() 
})

function sortearCor() {
    
    let escolhida = Math.floor(Math.random() * cores.length) 
    console.log(escolhida);
    switch (escolhida) {
        case 0:
            body.style.backgroundColor = 'blue'
            break;
        case 1:
            body.style.backgroundColor = 'red'
            break;
        case 2:
            body.style.backgroundColor = 'yellow'
                    
        default:
            break;
    }
}