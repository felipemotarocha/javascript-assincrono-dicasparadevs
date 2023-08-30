/* Contexto: */
// - O callback é utilizado para encaderar ações e ele resolve uma por vez. 

/* Exemplo: */

// Eu preciso logar com o meu usuário. 
// Logou? Agora pegue os vídeos desse usuário. 
// Pegou? Mostre os detalhes dos vídeos. 

/* Funcionamento: */
//  - Quando a função que tiver o callback for chamada, como um dos parâmetros precisamos passar uma função anônima e
//  dentro dessa função, receberemos uma prop que vai conter o valor adicionado no callback.
//  - Se houver erro na primeira ação do callback, as demais não serão realizadas.
/* Motivo da inutilização: */
//  - Ele é o antecessor das promisses e atualmente é pouco utilizado.
//  - Na medida que adicionamos mais ações para serem encadeados, o código se torna complexo e mais difícil de manter.

/* ------------------------------------------------------------------------------------------------------ */

// Referência: https://www.youtube.com/watch?v=WUmAAxH9n-A


const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = true;

    if (error) {
      return onError(new Error("error in login!"));
    }

    console.log("user logged!");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500);
};

const user = loginUser(
  "felipe@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
      getVideoDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails });
      });
    });
  },
  (error) => {
    console.log({ error });
  }
);

// console.log({ user });
