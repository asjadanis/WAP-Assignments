// Fetch version
function handleButtonClick() {
  const date = document.getElementById("date").value;
  const apiKey = "nWAmGvfvdAHZKG1d6PJNF4eb6sN8pXwqslbulVE4";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const error = data.error;
      if (error && error.code === "OVER_RATE_LIMIT") {
        return alert("You have exceeded the rate limit for this API");
      }
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
