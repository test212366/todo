const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

let i = 0

btn.addEventListener('click', (e) => {
	if(input.value === '') return
	createDeleteElement(input.value)
	input.value = ''
})

function createDeleteElement(value) {
	i++
	console.log(value)

	const li = document.createElement('li')
	li.className = 'li'
	li.textContent = input.value

	const btn = document.createElement('button')
	btn.className ='btn'
	btn.textContent = 'DEL'
	li.appendChild(btn)

	btn.addEventListener('click', (e) => {
		result.removeChild(li)
		i--
	})

	li.addEventListener('click', (e) => {
		li.classList.toggle('li-active')
	})
	total.textContent = i

	result.appendChild(li)
}