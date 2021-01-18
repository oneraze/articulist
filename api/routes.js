const app = require("../app");

// REQUIRE ROUTES

// GET
app.get("/", (req, res) => {
    res.render("index", {
        brand: "Articulist"
    })
})

// POST


// LISTEN

app.listen(3000, () => {
    console.log("Listening on port 3000")
})