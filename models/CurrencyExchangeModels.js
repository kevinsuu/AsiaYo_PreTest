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

    amount = parseFloat(amount.replace(/,/g, ""));

    if (isNaN(amount)) {
      throw new Error(`Amount must be a number`);
    }

    const result = Math.round(amount * exchangeRates[source][target] * 100) / 100;
    const formattedResult = result.toLocaleString();
    return formattedResult;
  }
}

module.exports = CurrencyExchangeModels;
