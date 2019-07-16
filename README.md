# Default Project

## Tecnologias
<img src="https://i.imgur.com/CAA1pgG.png" title="React, Sass, Webpack" >

## Sumário
1. [Alias](#alias)
1. [Primeiros Passos](#primeiros-passos)
1. [Criando novo átomo](#criando-novo-átomo)
1. [Criando novo componente](#criando-novo-componente)
1. [Criando nova página](#criando-nova-página)
1. [Usando um componente](#usando-um-componente)
1. [Rodar Storybook](#rodar-storybook)

## Alias

Temos os seguintes alias configurados no webpack
- `app-components` - Referência para a pasta `src/ui/components`
- `app-pages` - Referência para a pasta `src/ui/pages`
- `app-router` - Referência para a pasta `src/router`

## Primeiros passos

Instalar as dependências
```bash
npm install
# ou
yarn
```

Rodar o projeto
```bash
npm start
```

## Criando novo átomo

Executar o comando
```bash
npm run create-atom [nome-do-atomo]
# exemplo: npm run create-atom label
```
Este comando:
- Cria uma pasta dentro de `components/_atoms` para o átomo
- Cria os arquivos `[nome-do-átomo].atom.jsx` e `[nome-do-componente].style.scss` dentro da pasta
- Adiciona o _export_ desse átomo no `index.js` dos átomos

Para criar um átomo void (sem filhos), basta adicionar `void` no final do comando
```bash
npm run create-atom input void
```

## Criando novo componente

Executar o comando
```bash
npm run create-component [nome-do-componente]
# exemplo: npm run create-component menu-link
```
Este comando:
- Cria uma pasta dentro de `components` para o componente
- Cria os arquivos `[nome-do-componente].component.jsx`, `[nome-do-componente].stories.jsx` e `[nome-do-componente].style.scss` dentro da pasta
- Adiciona o _export_ desse componente no `index.js` dos componentes

Para criar um PureComponent, basta adicionar `pure` no final do comando
```bash
npm run create-component menu-link pure
```

## Criando nova página

Executar o comando
```bash
npm run create-page [nome-da-pagina]
# exemplo: npm run create-page login
```
Este comando:
- Cria uma pasta dentro de `pages` para a página
- Cria os arquivos `[nome-da-pagina].page.jsx` e `[nome-da-pagina].style.scss` dentro da pasta
- Adiciona o _export_ desse componente no `index.js` das páginas

## Usando um componente

Dentro da pasta `src/ui/components` temos um arquivo `index.js`, que exporta todos os componentes que temos no projeto

Pode se importar um componente usando o alias `app-components` que faz referência a essa pasta

Exemplo
```js
import { MeuComponente } from 'app-components'
```

Caso importar mais de um componente, basta separa-los por vírgula

Exemplo
```js
import { MeuComponente, OutroComponente } from 'app-components'
```

## Rodar Storybook

Para executar o Storybook execute no terminal o seguinte comando

Exemplo
```bash
npm run storybook
```

