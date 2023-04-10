# Backend

Este projeto backend foi criado usando Node.js, Express, TypeScript e a arquitetura limpa (Clean Architecture). A arquitetura limpa permite que o código seja facilmente escalável, testável e de fácil manutenção.

## Estrutura do projeto

O projeto é dividido em várias camadas, seguindo os princípios da arquitetura limpa:

- `src/domain`:Contém as regras de Negócios Empresariais.
- `src/application`: Contém a aplicação Regras de Negócios
- `src/infra`: Contém a implementação de interfaces de repositório, adaptadores.
- `src/interfaces`: Contém as implementações específicas de framework, banco de dados e serviços de terceiros.
- `src/main`: Contém a configuração principal do aplicativo e inicialização do servidor.

## Requisitos

- Node.js
- TypeScript
- Express

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/projeto-backend.git
```

1. Navegue até a pasta do projeto:

```
cd projeto-backend
```

1. Instale as dependências:

```
npm install
```

1. Transpile o TypeScript:

```
npm run build
```

1. Inicie o servidor:

```
npm start
```

## Testes

Para executar os testes, use o seguinte comando:

```
npm test
```

## Endpoints

O projeto inclui os seguintes endpoints:

- POST /customers/create
  Cria um novo cliente. - Payload de exemplo:
      
          {
            "fullName": "João da Silva",
            "cpf": "529.982.247-25",
            "email": "joao.silva@example.com",
            "favoriteColor": "Azul",
            "observation": "Alguma observação sobre o cliente."
          }

       
- GET /customers/teste
  rota teste para listar os Clientes
