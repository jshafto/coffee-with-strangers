const express = require('express');
const { key } = require("../config/index").googleMaps
const router = express.Router();

router.get("/", (req, res) => {
    const options = {
        title: "Google Map Test",
        key,
        lat: 47.608013, 
        lng: -122.335167,
        zoom: 10
    }
    res.render("map", options)
});


module.exports = router;
