import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../Controllers/hotel.js";  
import { verifyAdmin } from "../Utils/verifyToken.js";



const router = express.Router();
//CREATE
router.post("/create", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET Hotel
router.get("/find/:id", getHotel);

//GET ALL Hotels
router.get("/", getHotels);
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router;