const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());


app.get("/", (req, res) => {
    res.send("Chocolate Management System Running Successfully!")
})

app.listen(port, () => {
    console.log(`Our Chocolate Management Server is running on ${port}`);
})