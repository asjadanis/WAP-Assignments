// Fetch version
function handleButtonClick() {
  const date = document.getElementById("date").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("pic").src = data.url;
      const title = document.createElement("h2");
      title.textContent = data.title;
      const explanation = document.createElement("p");
      explanation.textContent = data.explanation;
      const detailsContainer = document.getElementById("details");
      detailsContainer.appendChild(title);
      detailsContainer.appendChild(explanation);
      document.title = title;
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!!!!");
    });
}
