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
- yarn add socket.io => instala o socket.io.
- yarn add @types/socket.io -D => instala as tipagens do socketio.

## TYPESCRIPT

- yarn tsc --init => Inicia um documento tsconfig.json.

## Comandos Migrations:

- yarn typeorm migration:create -n CreateSettings => cria a migration de nome CreateSettings na pasta Migrations.
- yarn typeorm migration:run => roda as migrations

## Oque sao Migrations?

```

Database Migrations (ou Schema Migrations)? Trata-se de técnicas e ferramentas que auxiliam no versionamento da base de dados durante o desenvolvimento, que normalmente evitam a escrita de scripts SQL e fazem as atualizações no banco por meio da própria linguagem de programação e frameworks que estejamos utilizando.

Neste contexto específico, migration é a definição que se dá ao gerenciamento de mudanças incrementais e reversíveis em esquemas (estrutura) de banco de dados. Isso permite que seja possível ter um controle "das versões" do banco de dados.

As migrations são executadas sempre que for necessário atualizar a estrutura do banco ou reverter as alterações para uma migration antiga.

Não necessariamente cada migration é uma atualização no banco de dados, a forma mais comum é uma atualização fazer uso de várias migrations.

É algo muito usado no desenvolvimento de software ágil, onde geralmente o desenvolvimento da aplicação é feito em conjunto com um banco de dados que está em construção. Assim, a estrutura da base de dados vai sendo alterada em conjunto com o desenvolvimento.
```

## O que é um seeder?

```

Como o próprio nome diz, um seeder é um semeador. Neste contexto específico serve para alimentar a base de dados com dados.

Geralmente é usado para popular a base com dados padrões, necessários pro funcionamento correto da aplicação.

Por exemplo: você desenvolve uma aplicação que só pode ser acessada por usuários autenticados, quando esta publicação for publicada pela primeira vez, a estrutura do banco de dados vai ser criada. Como será possível acessar a aplicação para criar o primeiro usuário? Bem, existem várias maneiras de se lidar com isso, o seeder é uma delas (Uma ótima maneira).
```

## Seeder e migration podem fazer a mesma coisa, ou são sempre coisas diferentes?

```
Embora relacionadas, elas não tem nada a ver. Seeder faz uma coisa, migration faz outra.

Dependendo da ferramenta/framework que estiver usando, uma migration específica pode conter um seeder específico, mas tenha em mente que a migration atualiza a estrutura da base de dados, enquanto o seeder serve para popular a base.
```

## Socket io

[Documentacao.](https://socket.io/docs/v4/index.html)

```
Socket.IO é uma biblioteca JavaScript para aplicativos da web em tempo real. Ele permite a comunicação bidirecional em tempo real entre clientes e servidores da Web. Ele tem duas partes: uma biblioteca do lado do cliente que é executada no navegador e uma biblioteca do lado do servidor para Node.js. Ambos os componentes têm uma API quase idêntica.
```
