const apiInsult =
  "https://evilinsult.com/generate_insult.php?lang=en&type=json";
const apiChuck = "https://api.chucknorris.io/jokes/random";
const root = document.getElementById("root");
root.style = "display: flex; justify-content: center; margin:20vh";
const navi = document.getElementById("nav");
navi.style = "display: flex; justify-content: center; gap:1vw";
const btnInsult = document.createElement("button");
btnInsult.textContent = "Get insult";
const btnChuck = document.createElement("button");
btnChuck.textContent = "Chuck norris joke";
const btnRick = document.createElement("button");
btnRick.textContent = "Best jokes of 2021 (exclusive)";
navi.append(btnInsult, btnChuck, btnRick);

btnInsult.addEventListener("click", function () {
  fetch(apiInsult)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      root.textContent = " ";
      const insultJoke = document.createElement("p");
      insultJoke.textContent = data.insult;
      root.appendChild(insultJoke);
    });
});

btnChuck.addEventListener("click", function () {
  fetch(apiChuck)
    .then((Response) => Response.json())
    .then((data) => {
      root.textContent = " ";
      console.log(data);
      const chuckIcon = document.createElement("img");
      chuckIcon.src = data.icon_url;
      const chuckJoke = document.createElement("p");
      chuckJoke.textContent = data.value;
      chuckIcon.appendChild(chuckJoke);
      root.append(chuckIcon, chuckJoke);
    });
});

btnRick.addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=emb_logo&ab_channel=RickAstley",
    "popup",
    "width=600,height=600"
  );
});
