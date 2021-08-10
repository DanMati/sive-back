const Motorista = require("../model/motorista");

module.exports = app => {

    app.get("/motorista", async (req, res) => {
        const data = await Motorista.find({});
    
        return res.json(data);
    });
    
    app.post("/motorista", async (req, res) => {
        const data = await Motorista.create(req.body);
    
        return res.json(data);
    });
}
