
// @ts-check
/// <reference lib="esnext" />
/// <reference lib="esnext.iterator" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="webworker.importscripts" />
"use strict";

/**
 * @name Pyxis.js
 * @description A TypeScript module providing basic logical operations as functions.
 * @version 1.0.0
 * @author Ferenc Czigler
 * @see https://github.com/Serrin/
 * @license MIT https://opensource.org/licenses/MIT
 */


const VERSION = "Pyxis.js 1.0.0";


/* Core Operators */


/**
 * @description NOT operation
 *
 * @param {unknown }x
 * @returns {boolean}
 */
const not = (x: unknown): boolean => !x;
/** @description Alias for NOT operation */
const NOT = not;


/**
 * @description AND operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const and = (x: unknown, y: unknown): boolean => Boolean(x && y);
/** @description Alias for AND operation */
const AND = and;


/**
 * @description OR operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const or = (x: unknown, y: unknown): boolean => Boolean(x || y);
/** @description Alias for OR operation */
const OR = or;


/**
 * @description XOR operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const xor = (x: unknown, y: unknown): boolean => !x !== !y; /* Exclusive OR */
/** @description Alias for XOR operation */
const XOR = xor;


/**
 * @description NAND operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const nand = (x: unknown, y: unknown): boolean => !(x && y);
/** @description Alias for NAND operation */
const NAND = nand;


/**
 * @description NOR operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const nor = (x: unknown, y: unknown): boolean => !(x || y);
/** @description Alias for NOR operation */
const NOR = nor;


/**
 * @description Exlusive NOR operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const xnor = (x: unknown, y: unknown): boolean => !x === !y;
/** @description Alias for XNOR operation */
const XNOR = xnor;


/* Implications */


/**
 * @description Logical equals operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const equals = (x: unknown, y: unknown): boolean => Boolean(x) === Boolean(y);
/** @description Alias for EQUALS operation */
const EQUALS = equals;


/**
 * @description IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const implies = (x: unknown, y: unknown): boolean => !x || Boolean(y);
/** @description Alias for IMPLIES operation */
const IMPLIES = implies;


/**
 * @description NAND IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const nandImplies = (x: unknown, y: unknown): boolean => Boolean(x) && !y;
/** @description Alias for NAND IMPLIES operation */
const NAND_IMPLIES = nandImplies;


/**
 * @description NOR IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const norImplies = (x: unknown, y: unknown): boolean => Boolean(x) || !y;
/** @description Alias for NOR IMPLIES operation */
const NOR_IMPLIES = norImplies;


/**
 * @description CONVERSE IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const converseImplies = (x: unknown, y: unknown): boolean => !y || Boolean(x);
/** @description Alias for CONVERSE IMPLIES operation */
const CONVERSE_IMPLIES = converseImplies;


/**
 * @description CONVERSE NAND IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const converseNandImplies = (x: unknown, y: unknown): boolean => Boolean(y) && !x;
/** @description Alias for CONVERSE NAND IMPLIES operation */
const CONVERSE_NAND_IMPLIES = converseNandImplies;


/**
 * @description CONVERSE NOR IMPLIES operation
 *
 * @param {unknown} x
 * @param {unknown} y
 * @returns {boolean}
 */
const converseNorImplies = (x: unknown, y: unknown): boolean => Boolean(y) || !x;
/** @description Aliasfor CONVERSE NOR IMPLIES operation */
const CONVERSE_NOR_IMPLIES = converseNorImplies;


/* ESM export */

export {
  VERSION,
  /* Core Operators */
  not, NOT,
  and, AND,
  or, OR,
  xor, XOR,
  nand, NAND,
  nor, NOR,
  xnor, XNOR,
  /* Implications */
  equals, EQUALS,
  implies, IMPLIES,
  nandImplies, NAND_IMPLIES,
  norImplies, NOR_IMPLIES,
  converseImplies, CONVERSE_IMPLIES,
  converseNandImplies, CONVERSE_NAND_IMPLIES,
  converseNorImplies, CONVERSE_NOR_IMPLIES
};

export default {
  VERSION,
  /* Core Operators */
  not, NOT,
  and, AND,
  or, OR,
  xor, XOR,
  nand, NAND,
  nor, NOR,
  xnor, XNOR,
  /* Implications */
  equals, EQUALS,
  implies, IMPLIES,
  nandImplies, NAND_IMPLIES,
  norImplies, NOR_IMPLIES,
  converseImplies, CONVERSE_IMPLIES,
  converseNandImplies, CONVERSE_NAND_IMPLIES,
  converseNorImplies, CONVERSE_NOR_IMPLIES
};
