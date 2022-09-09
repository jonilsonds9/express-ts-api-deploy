# Instalação express com typescript e deploy

## Inice um projeto node:
```sh
npm init -y
```

## Instale o express como dependência de produção:
```sh
npm install express
```

## Agora instale os pacotes para habilitar o typescript no projeto:
```sh
npm install -D typescript ts-node @types/node @types/express
```
Importante: Aqui você poderia instalar apenas o `@types/node` e o `@types/express` mais para funcionar você precisar ter instalado o `typescript` e o `ts-node` globalmente no sistema:
```sh
npm install -g ts-node
npm install -g typescript
```
Porém isso não é tão interessante já que podemos esquecer de atualizar e tal. Então é melhor deixarmos por projeto e instalar tudo conforme o comando anterior, que instala as 4 dependências.

## Crie uma arquivo `index.ts` e coloque o seguinte conteúdo:
```ts
import express from 'express';

// rest of the code remains same
const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
```

## Adicione novos scripts no `package.json` para iniciar o servidor e fazer o build do projeto (para deploy):
```json
"build": "tsc --project ./",
"start": "ts-node index.ts"
```

## Execute o servidor com o seguinte comando:
```sh
npm run start
```

## E acesse o endereço `http://localhost:3000` no navegador  e veja o resultado!

## Configurar typescript:
No terminal, execute o seguinte comando:
```sh
npx tsc --init
```
Ele vai criar o arquivo `tsconfig.json`, nesse arquivo, adicione ou descomente se estiver comentado a linha:
```sh
"outDir": "./",
```
E deixe da seguinte forma:
```sh
"outDir": "./dist",
```
Veja também se a seguinte linha existe, caso estiver comentado, descomente:
```sh
"rootDir": "./",
```
Caso seus arquivos estejam dentro de outra pasta como `src` altere o `rootDir` citado acima.