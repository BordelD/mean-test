db.characters.drop();

db.createCollection('characters');
db.characters.insert(
    [
        {
            name: "Homer Simpson",
            tvShow: "The Simpson"
        },
        {
            name: "Marge simpson",
            tvShow: "The Simpson"
        },
        {
            name: "Bart simpson",
            tvShow: "The Simpson"
        },
        {
            name: "Lisa simpson",
            tvShow: "The Simpson"
        },
        {
            name: "Maggie simpson",
            tvShow: "The Simpson"
        }
    ]
);