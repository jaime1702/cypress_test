# cypress_test

**cypress_test** trata-se de um repositório de automação de testes E2E utilizando o framework cypress.io

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

## 🔧 Instalação

Realizar a instalação do Node (LTS) em seu ambiente de trabalho(**_recomendamos utilizar o nvm para gerenciar as versões do node da sua máquina local_**)

<a href="https://nodejs.org/en/download/" target="_blank"> <img src="https://nodejs.org/static/images/logo.svg" alt="node" width="80" height="80"/> </a>

<a href="https://github.com/nvm-sh/nvm" target="_blank"> <img src="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg" alt="node" width="80" height="80"/> </a>

Realizar a instalação do Visual Studio Code em seu ambiente de trabalho

<a href="https://code.visualstudio.com/download" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="vscode" width="80" height="80"/> </a>

Realizar a instalação do Git em seu ambiente de trabalho para pode realizar interações com o repositorio

<a href="https://git-scm.com/downloads" target="_blank"> <img src="https://git-scm.com/images/logo@2x.png" alt="git" width="120" height="60"/> </a>

Realizar a instalação do Docker em seu ambiente de trabalho

Obs: Para as versões do docker 1.X.X deve instalar o docker compose separado, acima de 2.X.X o mesmo está incluso.

<a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" alt="docker" width="120" height="60"/> </a>

Realizar a instalação do gerenciador de pacotes _YARN_ atráves do gerenciador de pacotes NPM

```
npm install --global yarn
```

# ⚙️ Executando os testes

## Como executar os testes automatizados.

### 🔩 Instalar os pacotes para a execução do projeto

Esse comando ira permitir instalar todos os pacotes utilizados na automação

abra o terminal na pasta raiz do projeto e execute

```
yarn
```

### 🔩 Executar o Cypress em modo interface

Após realizar a instalação dos pacotes esse comando ira permitir abrir o cypress em modo interface

abra o terminal na pasta raiz do projeto e execute

```
yarn cypress open
```

### ⚠️ Baselines do Cypress Image Diff

Ao executar seus testes utilizando o Cypress Image Diff, certifique-se de que a imagem do Cypress Image Diff esteja sendo executada em um contêiner Docker, de acordo com as configurações definidas em seu arquivo de pipeline.

Isso é essencial para garantir a consistência e a integridade das baselines, pois o Docker fornece um ambiente isolado e reprodutível para a geração das imagens de referência. Caso as baselines sejam geradas fora do Docker, podem ocorrer divergências entre as imagens utilizadas nos testes e as baselines, levando a resultados inconsistentes e falsos positivos/negativos.

### 🔩 Executar o Cypress em modo headless

Após realizar a instalação dos pacotes esse comando ira permitir abrir o cypress em modo headless

abra o terminal na pasta raiz do projeto e execute

```
yarn test:docker
```

### 🔩 Adicionar testes de regressão visual

Quando necessário você pode adicionar testes de regressão visual.
Adicione no código no momento exato da comparação o seguinte comando

```bash
cy.compareScreenshot('Nome do snapshot')
```

# 🛠️ Construído com

## Ferramentas utilizadas para o desenvolvimento

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - Framework de Automação
- [Yarn](https://classic.yarnpkg.com/en/) - Gerenciador de Pacotes
- [Eslint](https://eslint.org/) - Ferramenta de análise de código
- [Prettier](https://prettier.io/) - Ferramenta de formatação de código
- [Docker](https://www.docker.com/) - Ferramenta de contêinerização
- [Cypress-image-diff](https://github.com/uktrade/cypress-image-diff) - Ferramenta de regressão visual
