const { MongoClient } = require(`mongodb`);
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: async (callback) => {
        await client.connect();
            _db = client.db(`users`);
            console.log("Connected to MongoDB !!");
        },
    
    getDb: function () {
        return _db;
    },
};