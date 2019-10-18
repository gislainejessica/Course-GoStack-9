# Configuração de ESLint, Prettier e EditorConfig
## ESLint
### Passo 1: Instalar ESLint e configurar no editor
`yarn add eslint`
`yarn eslint --init`
- Instalar extensão ESLint no VScode
- Abrir as configuração do vscode no formato de json e adicionar o seguinte:
```json
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      {
          "language": "javascript",
          "autoFix": true
      },
      {
          "language": "javascriptreact",
          "autoFix": true
      }
    ],
```
- Escolhi usar o metodo **Standard**.

---

### Passo 2: Fazer as modificações a mais no arquivo `.eslintrc.js`

- Adicionar as rules abaixo.

```json
rules: {
  "class-methods-use-this": "off",
  "no-param-reassign":"off",
  "camelcase":"off",
  "no-unsused-vars":["error", {"argsIgnorePattern": "next"}],
  "prettier/prettier": "error",
}
```
---
## Prettier (Verifica tamanho da linha)

- Instalando dependências

  `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

- No arquivo `.eslintrc.js` add prettier

  `extends: ['standard', 'prettier'],`
  `plugins:['prettier'],`
- Criar uma arquivo na raiz `.prettierrc` e add:
  ```json
  {
    "singleQuote": true,
    "semi":false,
    "trailingComma": "es5"
  }
  ```

  - Para aplicar o eslint em todos os arquivos de uma só vez
  ` yarn eslint --fix src --ext .js`

## Editorconfig extensão do vscode
- Mantem padronização entre ambientes diferentes
- Gerar um `.editorconfig` clicando com o botão direito
```js
root = true
[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
