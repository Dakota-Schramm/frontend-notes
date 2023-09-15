const getData = (e) => {
  console.log(e.target.value)
}
const inputField = document.getElementById('text')

const debounce = function (fn, delay) {
  let timer
  return function () {
    let context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, delay)
  }
}

inputField.addEventListener('keyup', debounce)
