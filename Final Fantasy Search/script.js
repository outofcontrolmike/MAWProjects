

var fetcher = fetch('https://www.moogleapi.com/api/v1/characters')
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not okay");
  }
  return response.json();
})

console.table(fetcher);

function createCharacters() {
    let character = "";
}
