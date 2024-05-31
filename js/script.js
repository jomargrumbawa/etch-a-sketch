const sketchpad = document.getElementById("sketchpad")
const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function() {
  let newSize = Number(prompt("Enter a number between 16-100"))
    generateSquares(newSize)
})

function generateSquares(squares) {
  sketchpad.innerHTML = ""
  for(let i = 0; i < squares * squares; i++) {
    const square = document.createElement("div")
    square.style.height = `${600 / squares}px`
    square.style.width = `${600 / squares}px`
    square.addEventListener("mouseenter", function(e) {
      square.classList.add("hovered")
    })
    sketchpad.appendChild(square)
  }
}

generateSquares(16)
