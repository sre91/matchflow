import { Router } from "express";
import {
  createMatch,
  deleteMatch,
  getMatchById,
  getMatches,
  updateMatch,
} from "../controllers/matchController";

const router = Router();

router.post("/", createMatch);

router.get("/", getMatches);

router.get("/:id", getMatchById);

router.patch("/:id", updateMatch);

router.delete("/:id", deleteMatch);

router.get("/error", (req, res) => {
  throw new Error("MatchFlow Test Error");
});
export default router;
