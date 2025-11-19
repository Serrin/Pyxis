
# `Pyxis.js`

Version: __1.0.0__
Author: __Ferenc Czigler__
License: __MIT__

A TypeScript and JavaScript module implementing fundamental and extended logical operations based on JavaScript truthiness.
All functions accept `unknown` values and evaluate them using `Boolean(...);`.

---

## Table of Contents

1. Overview
2. How to import
3. Truthiness Rules
4. Function API
  - `not(x);` and `NOT(x);`
  - `and(x, y);` and `AND(x, y);`
  - `or(x, y);` and `OR(x, y);`
  - `xor(x, y);` and `XOR(x, y);`
  - `nand(x, y);` and `NAND(x, y);`
  - `nor(x, y);` and `NOR(x, y);`
  - `xnor(x, y);` and `XNOR(x, y);`
  - `equals(x, y);` and `EQUALS(x, y);`
  - `implies(x, y);` and `IMPLIES(x, y);`
  - `nandImplies(x, y);` and `NAND_IMPLIES(x, y);`
  - `norImplies(x, y);` and `NOR_IMPLIES(x, y);`
  - `converseImplies(x, y);` and `CONVERSE_IMPLIES(x, y);`
  - `converseNandImplies(x, y);` and `CONVERSE_NAND_IMPLIES(x, y);`
  - `converseNorImplies(x, y);` and `CONVERSE_NOR_IMPLIES(x, y);`
5. Truth Tables
6. Examples
7. License

---

## Overview

This module provides a suite of logical functions that operate on _truthiness_ rather than strict booleans.

Every input is coerced using: `Boolean(x);` which makes the library compatible with JavaScript idioms.

For instance:

- `and("hello", 1);` -> `true`
- `or(0, null);` -> `false`
- `xor(undefined, "nonempty");` -> `true`

Each logical function also includes an alias in uppercase for semantic clarity.

---

## How to import

````js
// import the defaultExport object
import defaultExport from "./pyxis.js";
globalThis.pyxis = defaultExport;

// import with default with name
import { default as pyxis } from "./pyxis.js";
globalThis.pyxis = pyxis;

// import all into a new celestra object
import * as pyxis from "./pyxis.js";
globalThis.pyxis = pyxis;

// import some functions
import { or, XOR } from "./pyxis.mjs";
globalThis.or = or;
globalThis.XOR = XOR;
````

---

## Truthiness Rules

A value is __truthy__ if `Boolean(value) === true`.
Examples:

| Truthy                           | Falsy           |
|----------------------------------|-----------------|
| `"text"`                         | `""`            |
| `1`, `-1`, any non-zero number   | `0`, `-0`       |
| `1n`, `-1n`, any non-zero bigint | `0n`            |
| `{}`, `[]`                       | `null`          |
| `function () {}`                 | `undefined`     |
| `Symbol();`                      | `NaN`           |

---

## Function API

Each function is documented below with examples.

---

### `not(x);` / `NOT(x);`

Returns the negation of `x` based on truthiness.

````js
not(x: unknown): boolean
````

#### Examples

````js
not(true);          // false
not(0);             // true
not("hello");       // false
````

---

### `and(x, y);` / `AND(x, y);`

Logical AND — true if __both__ `x` and `y` are truthy.

````js
and(x: unknown, y: unknown): boolean
````

#### Examples

````js
and(true, 1);       // true
and(true, 0);       // false
````

---

### `or(x, y);` and `OR(x, y);`

Logical OR — true if __either__ `x` or `y` is truthy.


````js
or(x: unknown, y: unknown): boolean
````

#### Examples

````js
or(0, "yes");        // true
or(null, undefined); // false
````

---

### `xor(x, y);` and `XOR(x, y);`

Exclusive OR — true if __exactly one__ of `x` and `y` is truthy.

````js
xor(x: unknown, y: unknown): boolean
````

#### Examples

````js
xor(true, false);   // true
xor(1, "x");        // false
````

---

### `nand(x, y);` and `NAND(x, y);`

Negated AND — false only if __both__ are truthy.

````js
nand(x: unknown, y: unknown): boolean
````

#### Examples

````js
nand(true, true);   // false
nand(true, 0);      // true
````

---

### `nor(x, y);` and `NOR(x, y);`

Negated OR — true only if __neither__ `x` nor `y` is truthy.

````js
nor(x: unknown, y: unknown): boolean
````

#### Examples

````js
nor(0, null);       // true
nor(0, "a");        // false
````

---

### `xnor(x, y);` and `XNOR(x, y);`

Exclusive NOR — true if `x` and `y` have __the same truthiness__.

````js
xnor(x: unknown, y: unknown): boolean
````

#### Examples

````js
xnor(true, 1);      // true
xnor(false, "");    // true
xnor(1, 0);         // false
````

---

### `equals(x, y);` and `EQUALS(x, y);`

Returns true if both values evaluate to the same boolean.

Equivalent to:

````js
Boolean(x) === Boolean(y)
````

````js
equals(x: unknown, y: unknown): boolean
````

---

### `implies(x, y);` and `IMPLIES(x, y);`

Logical implication:
`x -> y` is false only when `x` is truthy __and__ `y` is falsy.

````js
implies(x: unknown, y: unknown): boolean
````

---

### `nandImplies(x, y);` and `NAND_IMPLIES(x, y);`

True when `x` is truthy __and__ `y` is falsy.
Equivalent to:

````
x ∧ ¬y
````

````js
nandImplies(x: unknown, y: unknown): boolean
````

---

### `norImplies(x, y);` and `NOR_IMPLIES(x, y);`

True when `x` is truthy OR `y` is falsy.

````js
norImplies(x: unknown, y: unknown): boolean
````

---

### `converseImplies(x, y);` and `CONVERSE_IMPLIES(x, y);`

Reverse implication: `y -> x`

False only when `y` is truthy and `x` is falsy.

````js
converseImplies(x: unknown, y: unknown): boolean
````

---

### `converseNandImplies(x, y);` and `CONVERSE_NAND_IMPLIES(x, y);`

True when `y` is truthy __and__ `x` is falsy.

````js
converseNandImplies(x: unknown, y: unknown): boolean
````

---

### `converseNorImplies(x, y);` and `CONVERSE_NOR_IMPLIES(x, y);`

True when `y` is truthy OR `x` is falsy.

````js
converseNorImplies(x: unknown, y: unknown): boolean
````

---

## Truth Tables

Truth tables assume strict booleans (`true` and `false`)
even though the functions accept any values.

### Core Operators

| x | y | AND | OR | XOR | NAND | NOR | XNOR and EQUALS |
|---|---|-----|----|-----|------|-----|-----------------|
| F | F | F   | F  | F   | T    | T   | T               |
| F | T | F   | T  | T   | T    | F   | F               |
| T | F | F   | T  | T   | T    | F   | F               |
| T | T | T   | T  | F   | F    | F   | T               |

### Implications

| x | y | implies (->) | nandImplies (x ∧ ¬y) | norImplies (x ∨ ¬y) |
|---|---|--------------|----------------------|---------------------|
| F | F | T            | F                    | T                   |
| F | T | T            | F                    | F                   |
| T | F | F            | T                    | T                   |
| T | T | T            | F                    | T                   |

| x | y | converseImplies | converseNandImplies (y ∧ ¬x) | converseNorImplies (y ∨ ¬x) |
|---|---|-----------------|------------------------------|-----------------------------|
| F | F | T               | F                            | T                           |
| F | T | F               | T                            | T                           |
| T | F | T               | F                            | F                           |
| T | T | T               | F                            | T                           |

---

## Examples

````js
import { xor, implies, nor } from "./pyxis.js";

xor(1, "a"); // false (both truthy)

implies(true, 0); // false

nor(null, undefined); // true
````

---

## License

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

MIT License

SPDX short identifier: MIT

Copyright (c) 2025 Ferenc Czigler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

© Copyright 2025 Ferenc Czigler [https://github.com/Serrin](https://github.com/Serrin)
