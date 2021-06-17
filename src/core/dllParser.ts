// Extraction of all functions from the dll

import ffi from "ffi-napi";
import ref from "ref-napi";
import path from "path";

const calls = ffi.Library(path.resolve(__dirname, "./mathFunctions.dll"), {
  add: ["int", ["int", "int"]],
});

// exporting in that way so we can export as function
module.exports = {
  // ADDITION
  addNum(a: number, b: number) {
    return calls.add(a, b);
  },
};
