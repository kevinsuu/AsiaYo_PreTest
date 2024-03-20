// CurrencyExchangeModels.js
class CurrencyExchangeModels {
  constructor(fileReaderService) {
    this.fileReaderService = fileReaderService;
  }

  readExchangeRates() {
    return this.fileReaderService.readFileSync();
  }

  exchange(source, target, amount) {
    const exchangeRates = this.readExchangeRates();

    if (!exchangeRates[source] || !exchangeRates[source][target]) {
      throw new Error(`Unsupported currency pair: ${source} to ${target}`);
    }
    const commaPattern = /^(?:\d{1,3},)*\d{3}(?:,\d{3})*$/;
    const hasComma = commaPattern.test(amount);

    if (hasComma) {
      amount = amount.replace(/,/g, "");
    }
    if (!/^\d+(\.\d+)?$/.test(amount) || isNaN(parseFloat(amount))) {
      throw new Error(`Amount must be in valid format and a number`);
    }
    amount = Math.round(parseFloat(amount) * 100) / 100;
    const result = Math.round(amount * exchangeRates[source][target] * 100) / 100;
    const formattedResult = result.toLocaleString();
    return formattedResult;
  }
}

module.exports = CurrencyExchangeModels;
