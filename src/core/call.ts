// Serve native functions to the render using ipcMain https://www.electronjs.org/docs/api/ipc-main
import { ipcMain } from "electron";
import { ADD } from "../common/communication";
const { addNum } = require("../core/dllParser");

ipcMain.handle(ADD, async (event, ...args) => {
  console.log("args", args[0], args[1]);
  return await addNum(args[0], args[1]);
});
