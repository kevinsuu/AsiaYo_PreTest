// FileReaderService.js
const fs = require("fs");

class FileReaderService {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readFileSync() {
    const rawData = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(rawData);
  }
}

module.exports = FileReaderService;
