import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import customerRoutes from "./routes/customerRouter";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: [process.env.DOMAIN_URL || "http://localhost:3030"],
  optionsSuccessStatus: 200,
};
 
app.use(cors(corsOptions));
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite cada IP para 100 solicitações por janela
});
app.use(limiter);
app.use(express.json());

app.use("/customers", customerRoutes);

export default app;
