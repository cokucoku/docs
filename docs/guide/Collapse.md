# Collapse 折叠面板
### 基础用法：
<div class="leeblock">
    <div class="leesource">
        <lee-collapse v-model="expname1" @change="handleChange">
            <lee-collapse-item title="ECMAScript 6 简介" name="1">
            <div>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</div>
            </lee-collapse-item>
            <lee-collapse-item title="Module 的语法" name="2">
            <div>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</div>
            </lee-collapse-item>
            <lee-collapse-item title="变量的解构赋值" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</div>
            </lee-collapse-item>
            <lee-collapse-item title="let 和 const 命令" name="4">
            <div>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</div>
            <div>const声明一个只读的常量。一旦声明，常量的值就不能改变。</div>
            </lee-collapse-item>
        </lee-collapse>
    </div>
<lee-code>

```html
<lee-collapse v-model="expname1" @change="handleChange">
  <lee-collapse-item title="ECMAScript 6 简介" name="1">
    <div>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</div>
  </lee-collapse-item>
  <lee-collapse-item title="Module 的语法" name="2">
    <div>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</div>
  </lee-collapse-item>
  <lee-collapse-item title="变量的解构赋值" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</div>
  </lee-collapse-item>
  <lee-collapse-item title="let 和 const 命令" name="4">
    <div>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</div>
    <div>const声明一个只读的常量。一旦声明，常量的值就不能改变。</div>
  </lee-collapse-item>
</lee-collapse>
```
```js
<script>
  export default {
    data() {
      return {
        expname1: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
</lee-code>
</div>

### 手风琴：
<div class="leeblock">
    <div class="leesource">
        <lee-collapse v-model="expname2" @change="handleChange" accordion>
  <lee-collapse-item title="ECMAScript 6 简介" name="1">
    <div>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</div>
  </lee-collapse-item>
  <lee-collapse-item title="Module 的语法" name="2">
    <div>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</div>
  </lee-collapse-item>
  <lee-collapse-item title="变量的解构赋值" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</div>
  </lee-collapse-item>
  <lee-collapse-item title="let 和 const 命令" name="4">
    <div>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</div>
    <div>const声明一个只读的常量。一旦声明，常量的值就不能改变。</div>
  </lee-collapse-item>
</lee-collapse>
    </div>
<lee-code>

```html
<lee-collapse v-model="expname2" @change="handleChange" accordion>
  <lee-collapse-item title="ECMAScript 6 简介" name="1">
    <div>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</div>
  </lee-collapse-item>
  <lee-collapse-item title="Module 的语法" name="2">
    <div>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</div>
  </lee-collapse-item>
  <lee-collapse-item title="变量的解构赋值" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</div>
  </lee-collapse-item>
  <lee-collapse-item title="let 和 const 命令" name="4">
    <div>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</div>
    <div>const声明一个只读的常量。一旦声明，常量的值就不能改变。</div>
  </lee-collapse-item>
</lee-collapse>
```
```js
<script>
  export default {
    data() {
      return {
        expname2: '1'
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
</lee-code>
</div>

### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
v-model|绑定展开的项目|String,Array|项目的name值|-
accordion|手风琴|Boolean|-|false

### 事件

事件名称|说明|回调参数
:------|:------|:------
change|变化事件|展开项目的数组集合

<script>
  export default {
    data() {
      return {
        expname1: ['1'],
        expname2: '1'
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>