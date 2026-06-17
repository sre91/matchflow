import Express from "express";
import matchRoutes from "./routes/matchRoutes";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { errorMiddleware } from "./middleware/errorMiddleware";

const app = Express();

app.use(Express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to matchflow",
  });
});

app.use("/api/matches", matchRoutes);
app.use(errorMiddleware);

export default app;
