# Documentação

## Exemplo rodando
http://starwars.francisgregori.com.br/

## Rodar localmente
- `yarn` Instala as dependências 
- `yarn dev` Roda a aplicação localmente
- `yarn build` Faz o build dos arquivos (os arquivos serão gerados na pasta `public`)

## Estrutura do projeto
- `src`
    - `assets`  (contém todos os assets do projeto)
    - `common` (contém o template.html e um arquivo responsável por todas as dependencias do projeto(css e js))
    - `components` (contém componentes utilizados no projeto como header e footer)
    - `redux-flow` (contém as configurações do redux, reducers e action creators)
    - `screens` (contém os arquivos de 'screen' do projeto)
    - `utils` (contém arquivos com funções que são utilizadas em diversos lugares do projeto)
    - `storybook` (responsável por armazenar os stories dos components)
    - `webpack` (contém todas as configurações do Webpack)

## Scripts
- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on `8888` port
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.
- `yarn build-css`: Script to generate the CSS files based on the SCSS styles
- `yarn watch-css`: Script to watch the SCSS changes and update the CSS styles on `yarn dev`


## Créditos
A estrutura base do projeto foi feita utilizando o [Workflow ReactJS](https://github.com/fdaciuk/workflow-reactjs) do [@fdaciuk](https://github.com/fdaciuk).

[swapi.co](https://swapi.co/) - API utilizada para pegar os dados dos filmes


