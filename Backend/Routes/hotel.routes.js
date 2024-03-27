import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../Controller/hotel.controller.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/search/:id", verifyAdmin, getHotel);

//GET ALL
router.get("/hotels", verifyAdmin, getHotels);

export default router;
