# Nessa aplicação (faz parte da trilha Nodejs do Ignite da Rocketseat) criamos um back-end em NodeJs de transações no qual o usuário pode criar transações e visualizar suas transações 🚀🚀

### Abaixo é citado alguns requisitos funcionais e regras de negócio da aplicação:

➡️ requisitos funcionais: 
- usuário deve poder criar uma nova transação 
- usuário deve poder obter um resumo da conta 
- o usuário deve poder listar todas as transações que já ocorreram 
- o usuário deve poder visualizar uma transação única

➡️ regras de negócio: 
- a transação pode ser do tipo crédito que somará ao valor total , ou débito que subtrairá 
- ao o usuário fazer requisições, deve ser possível identificarmos o usuário entre as requisições 
- se o usuário tentar listar transações, usuário só pode visualizar transações que ele criou

### Algumas libs usadas na aplicação:

- sqlite3 ->  banco de dados relacional → fácil de migrar para outro banco caso necessário
- fastify/cookie -> vamos usar cookie para identificar o usuário que está criando uma transaction
- dotenv -> vamos usar o dotenv para ler o arquivo .env dentro do NodeJs
- fastify -> semelhante ao express → traz parte tradicional usada na construção de uma API (lidar com rotas, parâmetros, cabeçalhos, respostas em JSON, entende requisições em JSON) 
- knex -> um query buiders no qual não precisamos focar muito em aprender sql e podemos focar na linguagem aplicada -> é um construtor de querys, facilita escrita das querys com código JS
- zod -> para fazer a validação de dados como por exemplo as variáveis de ambiente da aplicação, dados enviados como parâmetros em rotas

### Caso desejar testar a aplicação na sua máquina baixar o repositório e rodar o comando 'npm run dev' no terminal do repositório, você pode usar o insomnia para testar as rotas da aplicação 🚀
