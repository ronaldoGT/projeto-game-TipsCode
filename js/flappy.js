function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//teste
//const b = new Barreira(true)
//b.setAltura(200)
//document.querySelector('[tp-flappy]').appendChild(b.elemento)


function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barrreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.superior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
    }

    this.getX = () => parent(this.elemento.style.left.split('px'))

    this.setX = x => this.elemento.style.left = '${x}px'

    this.getLargura = () => this.elemento.clientWidt

    this.sortearAbertura()
    this.setX(x)
}

const b = new Barreira(700, 200, 800)
document.querySelector('[tp-flappy]').appendChild(b.elemento)

