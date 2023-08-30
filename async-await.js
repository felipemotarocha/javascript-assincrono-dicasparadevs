/* Contexto: */
// - A promisse é a sucessora dos callbacks. Sua utiliação é mais simples e organizada. 

/* Exemplo: */

// Eu preciso logar com o meu usuário. 
// Logou? Tô os dados do usuário. Agora pegue os vídeos dele. 
// Pegou? Tô as referências dos vídeos. Agora devolva os detalhes dos vídeos. 

/* Funcionamento: */
//  - Inicialemnte é necessário criar uma promisse com new Promisse().
//  Ela irá receber duas props: resolve e reject.
//  O resolve será utilizado para guardar os dados que essa promessa nos deu.
//  O reject pode ser utilizado para adicionarmos uma mensagem de erro ou algma ação quando a promessa falhar.
//  - Para consumir essa promisse chamaremos ela como se fosse uma função: Exemplo: promessa().
//  Se a promessa não falhar, utilizaremos o método then para pegar os dados retornados dentro do resolve.
//  Se a mesma der erro, podemos utilizar o catch para capturar o erro adicionado dentro do reject.
//  - Se tivermos várias promessas em sequência, se uma delas falhar, as que estão abaixo não serão iniciadas.
//  - Se eu quiser resolver todas as promessas primeiro antes de retornar os dados, devo utilizar o Promisse.all()

// Referência: https://www.youtube.com/watch?v=WUmAAxH9n-A

/* ------------------------------------------------------------------------------------------------------ */

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = true;

    if (error) {
      reject(new Error("error in login!"));
    }

    console.log("user logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails");
      resolve({ title: "video title" });
    }, 2500);
  });
};

const displayUser = async () => {
  try {
    const user = await loginUser("felipe@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideoDetails(videos[0]);

    console.log({ videoDetails });
  } catch (error) {
    console.log({ error });
  }
};

displayUser();
