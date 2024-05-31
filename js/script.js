const sketchpad = document.getElementById("sketchpad")

function generateSquares(squares) {
  for(let i = 0; i < squares * squares; i++) {
    const square = document.createElement("div")
    square.style.height = `${600 / 16}px`
    square.style.width = `${600 / 16}px`
    square.addEventListener("mouseenter", function(e) {
      square.classList.add("hovered")
    })
    sketchpad.appendChild(square)
  }
}

generateSquares(16)
