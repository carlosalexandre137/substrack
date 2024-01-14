# Substrack - Gerenciador de Assinaturas

## Descrição do Projeto

Substrack é um projeto desenvolvido em React.js que funciona como um gerenciador de assinaturas. O objetivo principal é demonstrar o progresso contínuo de desenvolvimento e aprendizado em React, enquanto construímos um aplicativo para gerenciar assinaturas.

## Funcionalidades Principais

- Adicionar, visualizar, atualizar e excluir assinaturas.
- Linha do tempo para documentar o progresso e melhorias ao longo do tempo.
- Design responsivo para uma experiência de usuário consistente em diferentes dispositivos.

## Tecnologias Utilizadas

- React.js
- Tailwind CSS

## Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node.js)

## Como Iniciar o Projeto

1. Clone este repositório.
2. Navegue até o diretório do projeto via terminal.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.
5. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

- `src/` : Contém o código-fonte do projeto.
  - `assets/` : Armazenar arquivos estativos.
  - `components/` : Componentes React reutilizáveis.
  - `config/` : Constantes pré-definidas do projeto.
  - `contexts/` : Contextos do projeto para compartilhar dados.
  - `controller/` : Auxiliar na formatação de valores para a visualização.
  - `hooks/` : Hooks personalizados para compartilhar lógicas entre os componentes
  - `model/` : Conexão com o banco de dados (localstorage).
  - `pages/` : Páginas do projeto.
  - `reducers/` : Gerenciar estados do projeto.
  - `utils/` : Funcionalidades reutilizáveis.

## Linha do Tempo

### [Versão 2.0.0] - [14/01/2024]

- Criação de páginas utilizando rotas com o react-router-dom
- Utilização de rotas aninhadas e dinâmicas.
- Navegação no header.
- Criação de Hooks personalizados, Contexts e Reducers.
- Utilizando a biblioteca react-toastify para enviar notificações de sucesso.

### [Versão 1.0.0] - [02/01/2024]

- Funcionalidade de adicionar/editar/remover assinaturas.
- Visualização básica de assinaturas.
- Estilização inicial.
- Utilização do State do react

### Próximas Atualizações Planejadas

- Vite e Styled Components
- TypeScript

## Acesso ao Projeto

A versão mais recente do "substrack" está disponível [aqui](https://substrack.vercel.app/). Sinta-se à vontade para explorar e testar!

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE). Consulte o arquivo LICENSE.md para obter mais detalhes.
