function displayPoem(response) {
  // console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "46f53o0114a0et1fb464bc0d734f573e";
  let context =
    "You are a romantic poet expert in Mexican culture and traditions. You write beautiful and creative poems that capture the essence of Mexico. Your mission is to generate EXACTLY 4 lines. Return ONLY raw HTML. Do not include markdown. Do not include extra sentences. Do not generate more than 4 <p> elements. Make sure to follow user instructions";
  let prompt = `User instructions: Generate a Mexican Poem or Calaverita about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt= ${prompt}&context=${context}&key=${apikey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class= "generating"> ⏳Generating the Mexican Poem about ${instructionsInput.value} </div>`;

  // console.log("generating poem");
  // console.log(`Prompt: ${prompt}`);
  // console.log(`Context: ${context}`);
  // console.log(apiURL);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
