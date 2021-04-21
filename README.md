# NWL 05 edicao.

## necessário para conclusao desse projeto:

1. NODEJS
2. yarn
3. VSCODE
4. conhecimento em JavaScript

## NODE

- yarn init -y => Inicia uma arquivo package.json.
- yarn add express => Instala o framework express.
- yarn add @types/express -D => Adiciona as configuracoes de tipagens do express.
- yarn add typescript -D => Instala o typescript como dependencia de desenvolvimento.
- yarn add ts-node-dev -D => Instala o ts-node-dev (equivalente a o nodemon) como dependencia de desenvolvimento.
- yarn add sqlite3. => instala o banco de dado sqlite.
- yarn add typeorm. => instala o typeorm, ele mapeamento objeto relacional que permite fazer uma relação dos objetos com os dados que os mesmos representam.
- yarn add reflect-metadata. => instala o reflect-metadata, esse pacote e usado para construir consultas sql.
- yarn add uuid
- yarn add @types/uuid -D

## TYPESCRIPT

- yarn tsc --init => Inicia um documento tsconfig.json.

## Oque sao Migrations?

Database Migrations (ou Schema Migrations)? Trata-se de técnicas e ferramentas que auxiliam no versionamento da base de dados durante o desenvolvimento, que normalmente evitam a escrita de scripts SQL e fazem as atualizações no banco por meio da própria linguagem de programação e frameworks que estejamos utilizando.

## Comandos Migrations:

- yarn typeorm migration:create -n CreateSettings => cria a migration de nome CreateSettings na pasta Migrations.
- yarn typeorm migration:run => roda as migrations
