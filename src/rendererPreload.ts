import { contextBridge } from "electron";
const { addNum } = require("./core/dllParser");

contextBridge.exposeInMainWorld("Natives", {
  adition: (a: number, b: number) => addNum(a, b),
});
