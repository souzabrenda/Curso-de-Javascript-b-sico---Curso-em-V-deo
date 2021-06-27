const Select = document.querySelector("#quadro-de-notas")
const Input = document.querySelector("#input-nota")
const quadroDeNotas = document.querySelector('#resultados')
const LiMedia = document.querySelector('li#media')
const LiMenorNota = document.querySelector('li#menor-nota')
const LiMaiorNota = document.querySelector('li#maior-nota')

const ERROR_MENOR_QUE_ZERO = "Digite um número maior que 0."
const ERROR_TOTAL_NOTAS_EXCEDIDO = "O número de notas foi excedido, favor, digite suas 5 notas válidas do semestre atual"

const baseCreateElementOptions = {
  innerText: '', 
  value: ''
}

const Form = document.querySelector('form')
const Button = document.querySelector('#calcular')

Button.setAttribute('disabled', 'true') 

function createElement(tagName = '', props = baseCreateElementOptions) {
  const Element = document.createElement(tagName)
  Element.innerText = props.innerText
  props.value && Element.setAttribute('value', props.value)
  return Element
}


function addnota () {
  const nota = Input.value
  if (nota < 0) return window.alert(ERROR_MENOR_QUE_ZERO)
  
  const index = Select.childNodes.length

  if (index === 4) {  
    Button.removeAttribute('disabled')  
  }

  if (index >= 5) return window.alert(ERROR_TOTAL_NOTAS_EXCEDIDO)

  const Option = createElement("option", {
    innerText: `Nota ${index + 1}: ${nota}`, 
    value: nota
  })

  Select.appendChild(Option)
}


function calcular() {
  let soma = 0
  const notas = []

  for(const option of Select.children) {
    const _nota = Number(option.value)

    notas.push(_nota)
    soma += _nota 

  }
  
  const notasOrdenadas = notas.sort()
  const media = soma / notasOrdenadas.length
  const menorNota = notasOrdenadas[0]
  const maiorNota = notasOrdenadas[notasOrdenadas.length - 1]

  LiMaiorNota.innerText = `Maior nota: ${maiorNota}`
  LiMenorNota.innerText = `Menor nota: ${menorNota}`
  LiMedia.innerText = `Média: ${media}` 
}


Form.addEventListener('submit', event => {
  event.preventDefault()

  addnota()

})

Button.addEventListener('click', calcular)