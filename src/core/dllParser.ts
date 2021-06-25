// Extraction of all functions from the dll

const ffi = require("ffi-napi");

const calls = ffi.Library("mathFunctions", {
  add: ["int", ["int", "int"]],
});

// exporting in that way so we can export as function
module.exports = {
  // ADDITION
  addNum(a: number, b: number) {
    return calls.add(a, b);
  },
};
