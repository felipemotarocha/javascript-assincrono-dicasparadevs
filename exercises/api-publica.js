const axios = require("axios");

function apiGitHub() {
  console.log("Início da função");
  setTimeout(() => {
    return axios
      .get("https://api.github.com")
      .then((req) => console.log(req.data))
      .catch((err) => {
        console.log(err);
      });
  }, 3000);

  console.log("Fim da função");
}

console.log("Fora da função");

apiGitHub();
