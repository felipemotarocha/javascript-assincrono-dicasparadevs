const Redis = require("ioredis");
const redis = require("redis");

async function setRedisIo() {
  // Criando um client
  // Exemplo: "redis://user:password@server:port"
  const client = redis.createClient();

  // Sem propriedades: o redis vai procurar na minha máquina localhost algum servidor de redis sem usuário e senha.
  client.connect();

  // Tratando caso dê erro ao enviar tipos de dados incorretos ou outros erros
  try {
    // Adicionando uma chave e valor para que o redis guarde em cache

    const setRedis = await client.set(
      "user",
      "{ name: 'Carlos', age: 23, document: '1748928429'}",
      5 // Expiration: Seconds
    );

    // Acessando o valor através da chave
    const getRedis = await client.get("user");

    console.log(`STATUS: ${setRedis}`);
    console.log(`RESULTADO: ${getRedis}`);

    client.disconnect();
  } catch (err) {
    console.log(
      "Ops, ocorreu um erro ao tentar persistir os dados ou ao buscá-los."
    );
    // Desconectando o client caso dê algum erro para que o redis não continue rodando. 
    // Porém, outra alternativa seria realizar um fallback (segunda opção caso essa requisição falha) ou retentar a cada X tempo.
    client.disconnect();
  }
}

setRedisIo();
