import { NotFoundError } from "@armughan-ticketing/common";
import express from "express";
import { Ticket } from "../models/ticket";
const router = express.Router();

router.get("/api/tickets", async (req, res) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as indexTicketRouter };
