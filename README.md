# :construction: README em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

# Car Shop

## Sobre o Projeto
Esta aplicação é uma API para gerenciamento de concessionária de veículos, desenvolvido com principios de POO, CRUD e banco de dados NoSQL.

## Tecnologias e Ferramentas empregadas

TDD;
Node.js;
TypeScript;
Chai;
Docker;
NoSQL;
MongoDB.

## Status do Projeto
Aplicação em funcionamento.

## Pastas desenvolvidas por mim, com seus respectivos arquivos

./src/controller,
./src/Domains,
./src/interfaces,
./src/middleware,
./src/Routes,
./src/services,
./tests/unit/Models.

## Acesso à Aplicação
### Instalação e Execução

Clone o repositório em sua maquina e siga os passos.

Use o comando:

      $ git clone git@github.com:Janio-Souza/Car-shop.git

1. Entre no diretório Car-shop:

        $ cd Car-shop

2. Instale as dependencias:

        $ npm install

3. Iniciada pelo Docker através do comando:
  
        $ docker compose up -d

Serão iniciados os dois containers:
  1. container docker car_shop_db, com o banco de dados mongo;
  2. container docker car_shop, com o backend em Node.js;

4. Utilize a extensão do VScode 'Thunder Client', ou qualquer outra aplicação de cliente API de sua preferencia para acessar as rotas:

        http://localhost:3001/cars
  
        http://localhost:3001/cars/:id
  
        http://localhost:3001/motorcycles
  
        http://localhost:3001/motorcycles/:id

## Contribuintes
|Nome|GitHub|
| -------- | -------- |
|Janio Souza|https://github.com/Janio-Souza|

## Contato
[GitHub: Janio Souza](https://github.com/Janio-Souza)
