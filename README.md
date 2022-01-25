# eslint-config-sh

![](https://img.shields.io/npm/v/eslint-config-sh.svg?style=flat)
[![NPM download](https://img.shields.io/npm/dm/eslint-config-sh.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-sh)
![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) 
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/sh-react-club/eslint-config-sh) 

## 介绍

把平时自己用的 eslint 代码规范整合到这个项目中，方便其他项目直接使用

## install

1 进入到你的项目运行下面命令

```bash
npm install -save eslint-config-sh
npx install-peerdeps --dev eslint-config-sh
```

<!-- 2 在项目跟目录下添加 .eslintrc.js

```js
module.exports = {
  root: true,
  extends: ["sh"],
};
```

3 在项目跟目录添加 .prettierrc

```js
{
    "tabWidth": 2
}
``` -->

## 使用 

### JavaScrip

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-config-sh

```

```json
{
  "root": true,
  "extends": "sh"
}
```

### Typescript

```
npm install --save-dev eslint typescript  eslint-plugin-babel eslint-plugin-import @typescript-eslint/eslint-plugin eslint-config-sh
```

```json
{
  "root": true,
  "extends": "sh/typescript"
}
```

### React 

```
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-sh

```

```json
{
  "root": true,
  "extends": "sh/react"
}
```


### Vue

```
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-vue eslint-config-sh

```


```json
{
  "root": true,
  "extends": "sh/vue"
}
```

### 项目依赖

- "babel-eslint": "^10.1.0",
- "eslint": "^7.23.0",
- "eslint-config-airbnb": "^18.2.1",
- "eslint-config-prettier": "^8.1.0",
- "eslint-plugin-import": "^2.22.1",
- "eslint-plugin-jsx": "^0.1.0",
- "eslint-plugin-jsx-a11y": "^6.4.1",
- "eslint-plugin-prettier": "^3.3.1",
- "eslint-plugin-react": "^7.23.1",
- "eslint-plugin-react-hooks": "^4.2.0",
- "@typescript-eslint/eslint-plugin": "^5.10.1",
- "@typescript-eslint/parser": "^5.10.1",
- "eslint-plugin-vue": "^8.3.0",
- "typescript": "^4.5.5"
