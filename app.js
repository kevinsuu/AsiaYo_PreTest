const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./data/swagger.json"); // 您的 Swagger JSON 文件的路徑

// 設定 body-parser 以處理 POST 請求
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 設定路由
const routes = require("./routes");
app.use("/", routes);

// 監聽端口
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
