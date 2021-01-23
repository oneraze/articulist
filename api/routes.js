const app = require("../app");

// REQUIRE ROUTES

// GET
app.get("/", (req, res) => {
    res.render("index", {
        brand: "Articulist",
		filesystem: [
            {
                type: "folder",
                title: "School",
                files: [
                    {
                        type: "folder",
                        title: "English",
                        files: [
                            {
                                type: "note",
                                title: "Journal",
                                content: "BLLOOOOOO"
                            }
                        ]
                    }
                ]
            }
        ],
        folder: function (file) {
            return file.type == "folder";
        },
        note: function (file) {
            return file.type == "note";
        },
        uuid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
              let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
              return v.toString(16)
            })
        }
    })
})


// POST


// LISTEN

const listener = app.listen(3000, () => {
    console.log("Listening on port " + listener.address().port)
})