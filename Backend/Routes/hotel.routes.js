import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
  getHotelRooms,
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
router.get("/hotels", getHotels);

// CountByCity
router.get("/countByCity", countByCity);

// CountByType
router.get("/countByType", countByType);

// GetHotelRooms
router.get("/getHotelRooms", getHotelRooms);

export default router;