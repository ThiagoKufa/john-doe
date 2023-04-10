# John Doe project
[Arquivo documentação BDD](https://github.com/ThiagoKufa/john-doe/blob/master/docs/cliente.md)

## Como rodar o projeto. 💻

### Requisitos

- Docker
- Docker Composer
- Git

### ****Instalação**** ⌨️

1. Clone o repositório:
    
    ```markdown
    git clone https://github.com/ThiagoKufa/john-doe.git
    ```
    
2. Execute na raiz do projeto os comandos:
    
    ```bash
    docker-compose up -d --build
    ```
    
    ```bash
    cd: backend
    ```
    
    ```bash
    npx prisma migrate Customer
    ```
    
    Se der erro no “npx prisma migrate Customer” execute:
    
    ```bash
    npx prisma migrate reset
    ```
    
3. URL dos containers:
    - backend: localhost:3000
    - frontend: localhost:3030
    - postgres: localhost:5432

## Backend

Este projeto backend foi criado usando Node.js, Express, TypeScript e a arquitetura limpa (Clean Architecture). A arquitetura limpa permite que o código seja facilmente escalável, testável e de fácil manutenção.

### ****Estrutura do projeto****

O projeto é dividido em várias camadas, seguindo os princípios da arquitetura limpa:

- `src/domain`:Contém as regras de Negócios Empresariais.
- `src/application`: Contém a aplicação Regras de Negócios
- `src/infra`: Contém a implementação de interfaces de repositório, adaptadores.
- `src/interfaces`: Contém as implementações específicas de framework, banco de dados e serviços de terceiros.
- `src/main`: Contém a configuração principal do aplicativo e inicialização do servidor.

### ****Endpoints****

O projeto inclui os seguintes endpoints:

- POST → /customers/create
Cria um novo cliente. - Payload de exemplo:
    
    ```json
    {
          "fullName": "João da Silva",
          "cpf": "529.982.247-25",
          "email": "joao.silva@example.com",
          "favoriteColor": "Azul",
          "observation": "Alguma observação sobre o cliente."
        }
    ```
    
- GET → /customers/teste
Rota teste para listar os Clientes.

## Frontend

O projeto frontend é um aplicativo web construído usando React e TypeScript. Ele usa o Vite como seu servidor de desenvolvimento e de construção.
![front](/assets/frontend.png)

### ****Estrutura do projeto****

- `src/assets`: Contém os arquivos compartilhados no projeto.
- `src/componets`: Contém contem os componentes do projeto, o tsx e css: 
`./ui` são componentes ui como button, inputs e etc…  
`./`  contem os componentes mais complexo que utiliza os componentes de ui.
- `src/entities`: Contém as entidades do projeto.
- `src/constants` : Contém  arquivos constantes do projeto e configurações
- `src/style` :Contém arquivos css globais do projeto.

### Rotas

- Raiz:  http://localhost:3030
