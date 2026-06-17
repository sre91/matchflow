import { Request, Response } from "express";
import Match from "../models/match";

// Post or create Matches

export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.create(req.body);

    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create match",
    });
  }
};

// Get all Matches

export const getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await Match.find();

    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch matches",
    });
  }
};

// match by ID single item

export const getMatchById = async (req: Request, res: Response) => {
  try {
    const match = await Match.findById(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch match",
    });
  }
};

// update patch matches

export const updateMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update match",
    });
  }
};

// delete by id

export const deleteMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    res.status(200).json({
      message: "Match deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete match",
    });
  }
};
