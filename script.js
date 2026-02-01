const factText = document.getElementById("fact");
const button = document.getElementById("newFact");

async function loadFact() {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=fr");
    const data = await response.json();
    factText.textContent = data.text;
  } catch (error) {
    factText.textContent = "Impossible de charger le fun fact 🌊";
    console.error(error);
  }
}

button.addEventListener("click", loadFact);
loadFact();
