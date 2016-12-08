db.characters.drop();
db.tvshows.drop();

db.createCollection('characters');
db.characters.insert(
    [
        {
            name: "Homer Simpson",
            tvshowName: "The Simpson"
        },
        {
            name: "Marge Simpson",
            tvshowName: "The Simpson"
        },
        {
            name: "Buffy Summers",
            tvshowName: "The Vampire Slayer"
        },
    ]
);

db.createCollection('tvshows');
db.tvshows.insert(
    [
        {
            title: "The Simpson",
            casting:
            [
                ObjectId("5849340de3c73032107a578c"),
                ObjectId("5849340de3c73032107a578d")
            ]
        },
        {
            title: "The Vampire Slayer",
            casting:
            [
                ObjectId("5849340de3c73032107a578c")
            ]
        },

    ]
);