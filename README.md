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

2 在项目跟目录下添加 .eslintrc.js

```js
{
  'root': true,
  'extends': [
    'sh'
  ]
}
```

3 在项目跟目录添加 .prettierrc

```js
{
    "tabWidth": 2
}
```