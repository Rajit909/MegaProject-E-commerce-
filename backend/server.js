import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

import app from "./app.js"

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
