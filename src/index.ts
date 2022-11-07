import express from "express";
import routes from "./url-shortner/routes";

const app = express();

app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
