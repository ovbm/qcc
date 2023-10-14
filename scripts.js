let alternateView = false;

const myName = document.getElementById("name");
const switchButton = document.getElementById("switch-button")

function switchName() {
  if (alternateView) {
    myName.textContent = "Hieronymus De Lavorne" 
    switchButton.style.opacity = 1
  } else {
    myName.textContent = "Olivier Baumann"
    switchButton.style.opacity = 0.5
  }
  alternateView = !alternateView
}

switchButton.addEventListener("click", switchName);
