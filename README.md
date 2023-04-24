# Projeto de Visualização de Dados do Brasil com React.js e d3.js

Este projeto é um aplicativo web que utiliza as bibliotecas React.js e d3.js para exibir visualizações de dados sobre o Brasil. O objetivo principal é fornecer informações interessantes e úteis sobre o país, utilizando dados fictícios para a criação de gráficos e mapas interativos.

## Tecnologias Utilizadas

(*)React.js: Uma biblioteca JavaScript de código aberto para criar interfaces de usuário
(*)d3.js: Uma biblioteca JavaScript para visualização de dados interativos em páginas web
(*)Docker: Uma plataforma para desenvolvimento, envio e execução de aplicativos em contêineres

## Como rodar o projeto

Para rodar o projeto é necessário ter o Docker instalado em sua máquina. Siga os passos abaixo:

`+`Clone o repositório para sua máquina:

```git clone https://github.com/seu-usuario/nome-do-projeto.git```

`+`Acesse a pasta do projeto:

`cd nome-do-projeto`

`+`Construa a imagem do Docker:

`docker build -t nome-da-imagem .`

`+`Inicie o container:

`docker run -p 3000:3000 nome-da-imagem`

`+`Abra o navegador e acesse a aplicação em http://localhost:3000.

##Funcionalidades

`*`Mapa do Brasil: Exibe um mapa interativo do Brasil, com a possibilidade de seleção de estados e exibição de informações sobre cada um deles.
`*`Gráfico de Barras: Exibe um gráfico de barras com os dados fictícios.

### `npm test`

