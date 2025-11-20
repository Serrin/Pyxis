
import assert from "./assert.js";
globalThis.assert = assert;

// import the defaultExport object
import defaultExport from "./pyxis.js";
globalThis.pyxis = defaultExport;

// import with default with name
//import { default as pyxis } from "./pyxis.js";
//globalThis.pyxis = pyxis;

// import all into a new celestra object
//import * as pyxis from "./pyxis.js";
//globalThis.pyxis = pyxis;


/* Pyxis.js v1.0.0 testcases for ESM environment */


try {


const testCases = [];


alert("Start of the test.");


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.not(true));
    assert.isTrue(pyxis.not(false));
    assert.strictEqual(pyxis.not, pyxis.NOT);
  }, "not();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.and(true, true));
    assert.isFalse(pyxis.and(true, false));
    assert.isFalse(pyxis.and(false, true));
    assert.isFalse(pyxis.and(false, false));
    assert.strictEqual(pyxis.and, pyxis.AND);
  }, "and();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.or(true, true));
    assert.isTrue(pyxis.or(true, false));
    assert.isTrue(pyxis.or(false, true));
    assert.isFalse(pyxis.or(false, false));
    assert.strictEqual(pyxis.or, pyxis.OR);
  }, "or();")
);


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.xor(true, true));
    assert.isTrue(pyxis.xor(true, false));
    assert.isTrue(pyxis.xor(false, true));
    assert.isFalse(pyxis.xor(false, false));
    assert.strictEqual(pyxis.xor, pyxis.XOR);
  }, "xor();")
);


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.nand(true, true));
    assert.isTrue(pyxis.nand(true, false));
    assert.isTrue(pyxis.nand(false, true));
    assert.isTrue(pyxis.nand(false, false));
    assert.strictEqual(pyxis.nand, pyxis.NAND);
  }, "nand();")
);


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.nor(true, true));
    assert.isFalse(pyxis.nor(true, false));
    assert.isFalse(pyxis.nor(false, true));
    assert.isTrue(pyxis.nor(false, false));
    assert.strictEqual(pyxis.nor, pyxis.NOR);
  }, "nor();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.xnor(true, true));
    assert.isFalse(pyxis.xnor(true, false));
    assert.isFalse(pyxis.xnor(false, true));
    assert.isTrue(pyxis.xnor(false, false));
    assert.strictEqual(pyxis.xnor, pyxis.XNOR);
  }, "xnor();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.equals(true, true));
    assert.isFalse(pyxis.equals(true, false));
    assert.isFalse(pyxis.equals(false, true));
    assert.isTrue(pyxis.equals(false, false));
    assert.strictEqual(pyxis.equals, pyxis.EQUALS);
  }, "equals();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.implies(true, true));
    assert.isFalse(pyxis.implies(true, false));
    assert.isTrue(pyxis.implies(false, true));
    assert.isTrue(pyxis.implies(false, false));
    assert.strictEqual(pyxis.implies, pyxis.IMPLIES);
  }, "implies();")
);


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.nandImplies(true, true));
    assert.isTrue(pyxis.nandImplies(true, false));
    assert.isFalse(pyxis.nandImplies(false, true));
    assert.isFalse(pyxis.nandImplies(false, false));
    assert.strictEqual(pyxis.nandImplies, pyxis.NAND_IMPLIES);
  }, "nandImplies();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.norImplies(true, true));
    assert.isTrue(pyxis.norImplies(true, false));
    assert.isFalse(pyxis.norImplies(false, true));
    assert.isTrue(pyxis.norImplies(false, false));
    assert.strictEqual(pyxis.norImplies, pyxis.NOR_IMPLIES);
  }, "norImplies();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.converseImplies(true, true));
    assert.isTrue(pyxis.converseImplies(true, false));
    assert.isFalse(pyxis.converseImplies(false, true));
    assert.isTrue(pyxis.converseImplies(false, false));
    assert.strictEqual(pyxis.converseImplies, pyxis.CONVERSE_IMPLIES);
  }, "converseImplies();")
);


testCases.push(
  assert.testSync( () => {
    assert.isFalse(pyxis.converseNandImplies(true, true));
    assert.isFalse(pyxis.converseNandImplies(true, false));
    assert.isTrue(pyxis.converseNandImplies(false, true));
    assert.isFalse(pyxis.converseNandImplies(false, false));
    assert.strictEqual(pyxis.converseNandImplies, pyxis.CONVERSE_NAND_IMPLIES);
  }, "converseNandImplies();")
);


testCases.push(
  assert.testSync( () => {
    assert.isTrue(pyxis.converseNorImplies(true, true));
    assert.isFalse(pyxis.converseNorImplies(true, false));
    assert.isTrue(pyxis.converseNorImplies(false, true));
    assert.isTrue(pyxis.converseNorImplies(false, false));
    assert.strictEqual(pyxis.converseNorImplies, pyxis.CONVERSE_NOR_IMPLIES);
  }, "converseNorImplies();")
);


alert("End of the test.");


testCases
  .filter((item) => !assert.testCheck(item))
  .map((item) => JSON.stringify(item))
  .forEach((item) => alert(item));


} catch (error) {
  alert(error);
}
