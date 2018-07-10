/**
 * Ex: express
 * 
 * const express = require("express");
 * const app = express();
 * app.get("/", (req, res) => {
 *   res.send("Hello World");
 * })
 * app.listen(3000);
 */

const { send } = require("micro");
const { router, get } = require('microrouter');
module.exports = router(
  get("/", (req, res) => send(res, 200, "Hello World"))
);