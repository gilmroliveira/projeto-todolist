Vamos fazer em duas partes: `README.md` e depois os comandos Git para criar o repositório e dar push.

***

## 1. README.md para `projeto-todolist`

Na raiz de `projeto-todolist` (mesmo nível de `backend`, `frontend`, `database`), crie um arquivo `README.md` com:

```markdown
# Projeto ToDoList - Node.js + MariaDB

Sistema de lista de tarefas (ToDoList) para gerenciamento de atividades diárias, com backend em Node.js/Express e persistência dos dados em MariaDB/MySQL. O frontend simples em HTML/JS é usado para testar os endpoints da API.

## 1. Estrutura do projeto

```
/projeto-todolist
├── /backend
│   ├── /src
│   │   ├── /config
│   │   │   └── db.js
│   │   ├── /controllers
│   │   │   └── tarefasController.js
│   │   ├── /models
│   │   │   └── tarefaModel.js
│   │   ├── /routes
│   │   │   └── tarefasRoutes.js
│   │   └── server.js
│   ├── package.json
│   └── .env (não versionado, apenas local)
├── /frontend
│   └── index.html
├── /database
│   └── script_criacao.sql
└── README.md
```

## 2. Tecnologias utilizadas

- **Backend**
  - Node.js
  - Express
  - mysql2
  - cors
  - dotenv
  - body-parser
  - nodemon (desenvolvimento)

- **Banco de dados**
  - MariaDB ou MySQL

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript (vanilla)

## 3. Configuração do Banco de Dados

### 3.1. Criação do banco e tabela

No MariaDB/MySQL, executar o script em `database/script_criacao.sql`:

```
CREATE DATABASE IF NOT EXISTS todolist;
USE todolist;

CREATE TABLE IF NOT EXISTS tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  status BOOLEAN DEFAULT FALSE,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2. Configuração da conexão

Arquivo `backend/src/config/db.js`:

```
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'todolist'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao MariaDB/MySQL com sucesso!');
});

module.exports = connection;
```

Arquivo `.env` (na pasta `backend`, não incluso no repositório):

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SUA_SENHA_AQUI
DB_NAME=todolist
PORT=3000
```

> O professor pode ajustar `DB_USER`, `DB_PASSWORD` e `DB_NAME` conforme o ambiente dele.

## 4. Backend (API REST)

### 4.1. Instalação

```
cd backend
npm install
```

### 4.2. Execução

```
npm run dev
```

O servidor iniciará em:

```
http://localhost:3000
```

### 4.3. Endpoints

- `POST /tarefas`  
  Cadastrar nova tarefa.  
  Corpo (JSON):
  ```
  { "descricao": "Minha tarefa" }
  ```

- `GET /tarefas`  
  Listar todas as tarefas.

- `PUT /tarefas/:id`  
  Marcar tarefa como concluída (altera `status` para `true`).

- `DELETE /tarefas/:id`  
  Remover tarefa.

## 5. Frontend de teste

Arquivo `frontend/index.html` contém uma interface simples para:

- Cadastrar tarefas.
- Listar tarefas.
- Marcar como concluídas.
- Remover tarefas.

Para usar:

1. Certifique-se de que o backend está rodando (`npm run dev` na pasta `backend`).
2. Abra `frontend/index.html` no navegador (pode ser com Live Server ou abrindo o arquivo diretamente).
3. Interaja com a página para testar os endpoints da API.
6. Como o professor pode rodar o projeto

1. Clonar o repositório:
   ```
   git clone https://github.com/gilmroliveira/projeto-todolist.git
   cd projeto-todolist/backend
   ```

2. Instalar dependências:
   ```
   npm install
   ```

3. Criar o banco e a tabela executando `database/script_criacao.sql` no MariaDB/MySQL.

4. Criar o arquivo `.env` na pasta `backend` com os dados de conexão ao banco.

5. Rodar o servidor:
   ```
   npm run dev
   ```

6. Abrir o `frontend/index.html` no navegador e testar as funcionalidades.

---

## 2. Criar repositório no GitHub e fazer push

### 2.1. Iniciar Git local e primeiro commit

No PowerShell:

```
cd C:\projetos\projeto-todolist

git init
git add .
git commit -m "Projeto ToDoList - backend, frontend e banco"
```

Se quiser que o `.env` não vá para o GitHub, crie um `.gitignore` na raiz com:

```
backend/.env
node_modules/
```

e rode de novo:

```
git add .gitignore
git commit -m "Adiciona .gitignore"
```

### 2.2. Criar repositório no GitHub

1. No GitHub, clique em **New repository**.
2. Nome: `projeto-todolist`.
3. Deixe **sem** README inicial.
4. Clique em **Create repository**.

Pegue a URL HTTPS, algo como:

```
https://github.com/gilmroliveira/projeto-todolist.git
```

2.3. Conectar o repositório local ao remoto

No terminal, ainda em `C:\projetos\projeto-todolist`:

```
git branch -M main
git remote add origin https://github.com/gilmroliveira/projeto-todolist.git
git push -u origin main
```

Se o GitHub criou README e der erro “fetch first”.

```
git pull origin main --allow-unrelated-histories
git push -u origin main
```
2.4. Conferir

Abra no navegador:

```
https://github.com/gilmroliveira/projeto-todolist
```

e veja se aparecem:

- Pastas `backend`, `frontend`, `database`.
- Arquivo `README.md`.
- Arquivo `database/script_criacao.sql`.

Se quiser, manda:

- O nome real que usou no repositório.
- Qualquer erro que aparecer no `git push`.

que oriento o comando exato (principalmente se der de novo o “fetch first”).
