// routes/index.js

const express = require("express");
const router = express.Router();
const controller = require("../controllers/currencyExchange");

// 定義路由
router.get("/api/currencyExchange/", controller.CurrencyExchangeService);

module.exports = router;
