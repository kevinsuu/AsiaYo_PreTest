//currencyExchange.js
const CurrencyExchangeModels = require("../models/CurrencyExchangeModels");
const FileReaderService = require("../models/FileReaderService");

exports.CurrencyExchangeService = async (req, res) => {
  try {
    const { source, target, amount } = req.query;
    // 實例化 FileReaderService
    const fileReaderService = new FileReaderService("./data/exchangeRates.json");

    // 實例化 CurrencyExchangeModels 並將 FileReaderService 傳遞給它
    const service = new CurrencyExchangeModels(fileReaderService);

    const result = service.exchange(source, target, amount);

    res.json({ msg: "success", amount: result.toString() });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: err.message });
  }
};
