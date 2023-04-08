# Cadastro de Clientes

**Funcionalidade**: Cadastro de Clientes
Para melhorar a gestão dos clientes de John Doe,
Uma tela de cadastro de clientes deve ser criada,
Onde os clientes possam preencher seus dados pessoais,
E essas informações devem ser armazenadas em um banco de dados Postgres.

**Cenário**: Cliente preenche o formulário de cadastro
Dado que um cliente acessa a tela de cadastro
Quando ele preenche todos os campos obrigatórios do formulário
| campo | valor |
| Nome completo | Fulano da Silva |
| CPF | 123.456.789-00 |
| E-mail | any@email.com |
| Cor preferida | Azul |
| Observações | Alergia a corante vermelho |
E seleciona a opção "Enviar"  
**Então** o sistema deve validar os dados do formulário
E armazenar as informações no banco de dados
E informar ao cliente que o cadastro foi realizado com sucesso

**Cenário**: Cliente tenta enviar o formulário com campos vazios
Dado que um cliente acessa a tela de cadastro
Quando ele deixa um ou mais campos obrigatórios em branco
E seleciona a opção "Enviar"  
**Então** o sistema deve identificar campos vazios
E exibir uma mensagem de erro informando quais campos são obrigatórios

**Cenário**: Cliente tenta cadastrar CPF inválido
Dado que um cliente acessa a tela de cadastro
Quando ele preenche um CPF inválido
E seleciona a opção "Enviar"  
**Então** o sistema deve identificar o CPF inválido
E exibir uma mensagem de erro informando que o CPF é inválido

**Cenário**: Cliente tenta cadastrar e-mail inválido
Dado que um cliente acessa a tela de cadastro
Quando ele preenche um e-mail inválido
E seleciona a opção "Enviar"  
**Então** o sistema deve identificar o e-mail inválido
E exibir uma mensagem de erro informando que o e-mail é inválido

**Cenário**: Cliente escolhe uma cor preferida do arco-íris
Dado que um cliente acessa a tela de cadastro
Quando ele seleciona uma cor preferida disponível no arco-íris  
**Então** o sistema deve permitir a seleção da cor
E armazenar a cor selecionada junto às demais informações do cliente