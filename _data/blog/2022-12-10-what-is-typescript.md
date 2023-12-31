---
template: BlogPost
path: /blog/what-is-typescript
date: 2022-12-10T15:19:48.197Z
title: What is TypeScript?
tags:
  - typescript
  - javascript
featured: false
draft: false
thumbnail: /assets/what_is_typescript.png
metaDescription: ''
author: Urvashi
---

Over the years, the popularity as well as the complexity of JavaScript programs have grown exponentially.

A﻿s you know, JavaScript is a weakly typed language. This means that it is unable to cope with the complexities of such large projects. As JavaScript developers, it's easy to miss out on one of the most common types of error: **TypeError**.

# Type Errors

T﻿ype errors happen when there's a type mismatch between the data and the operation you want to perform on it.

F﻿or example:

```javascript
let n = 1
n.toLowerCase() // Uncaught TypeError: n.toLowerCase is not a function
```

You might discover this type of error after running the code. It would be useful if JavaScript could catch such errors during development, even before we run the code.

T﻿here are other cases where JavaScript does not even throw an error at all!

F﻿or example, the specification says that trying to call something that isn't callable should throw an error. So naturally, accessing a property that doesn't exist on an object should throw an error as well.

I﻿nstead, JavaScript returns \`undefined\`. This behaviour could lead to further errors like:

```javascript
let obj = { }
console.log(obj.x.y) // Uncaught TypeError: Cannot read properties of undefined (reading 'y')
```

# typeof and instanceof

T﻿o avoid these, you can use the \`typeof\` and \`instanceof\` operators which helps you to identify the type of a value. But they are not enough.

```javascript
typeof 1 // number
typeof "apple" // string
typeof {} // object
typeof [] // object
typeof (() => {}) // function

new Date() instanceof Date // true
[] instanceof Array // true

```

# TypeScript vs JavaScript

T﻿his is where TypeScript enters the picture. The goal of TypeScript is to be a static typechecker for JavaScript programs.

I﻿n other words, it is a tool that runs before your code is run and ensures that the types of the values in the program are correctly used.

C﻿onsider this example:

```javascript
// Valid JS
let s = "Hello World"
console.log(s - 2) // NaN

```

```typescript
let s = "Hello World"
console.log(s - 2) // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

T﻿ypeScript throws an error when you try to perform an arithmetic operation on a string. This is useful in catching potential errors if we try to use the result of this expression i.e. \`NaN\` as a string.

N﻿ote that the browser cannot run TypeScript.
Therefore, TypeScript is transpiled (translated and compiled) into plain JavaScript, so it can be run in any JavaScript runtime.
This makes it a popular choice for building scalable and maintainable applications, as the type checking can help catch errors early on and prevent bugs from being introduced later on.

TypeScript was developed and is maintained by Microsoft.
It is designed to be used in large-scale applications and is often used with Angular, a popular JavaScript framework for building web applications.
Y﻿ou can learn more about it on <https://www.typescriptlang.org/>
