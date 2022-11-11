## Glossário de Dependências

### Dependencies
- react                         : Lib React
- react-dom                     : Responsável por ligar com o DOM

### devDependencies
- @babel/cli                    : Linha de Comando do Babel
- @babel/core                   : Lib/ Centro Babel
- @babel/preset-env             : Responsável gerenciar o código de acordo com o ambiente
- @babel/preset-react           : Predefinição para o React
- @types/react                  : Definições de TypeScript para react
- @types/react-dom              : Definições de TypeScript para react-dom
- babel-loader                  : Faz a integração entre o Babel e o Webpack
- html-webpack-plugin           : Injeta o arquivo js no html automaticamente
- webpack                       : É um empacotador de módulos
- webpack-cli                   : Linha de Comando do Webpack
- webpack-dev-server            : Server do Webpack
- cross-env                     : Define variáveis ambiente independente do ambiente
- style-loader                  : Responsável por carregar os estilos no Webpack - Trabalha em conjunto com o css-loader
- css-loader                    : Responsável por carregar os estilos no Webpack - Trabalha em conjunto com o style-loader
- sass                          : Pré-processador de estilos scss e sass
- react-refresh-webpack-plugin  : Um plugin EXPERIMENTAL do Webpack para habilitar "Fast Refresh"
- react-refresh                 : Permite editar componentes React em um aplicativo em execução sem perder seu estado

## Hooks

- useState  : Contém dois elementos, o valor do estado e uma função set
- useEffect : Dispara uma função quando algo acontecer na aplicação

## TypeScript

### Configuração

- Instalação: `yarn add typescript -D`
- Inicialização do TypeScript: `yarn tsc --init`
- Config tsconfig: {
    - "compilerOptions": {
        Add/Active
        ```
            "lib": ["dom", "dom.iterable", "esnext"],
            "allowJs": true,
            "allowSyntheticDefaultImports": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "jsx": "react-jsx",
        ```

        Remove/Delete
        ```
            "target": "es5",
            "module": "commonjs",
        ```
    - `"include": ["src"]`
}