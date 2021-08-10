const Reserva = require("../model/reserva.js");


module.exports = app => {
        
    app.get("/reserva", async (req, res) => {
        const data = await Reserva.find({});
    
        return res.json(data);
    });
    
    app.post("/reserva", async (req, res) => {

        try {
            const data = await Reserva.create(req.body);
    
            return res.json(data);
         }
         catch (e) {
            /*console.log(e);*/
         }
       
       
    });
    app.delete("/reserva", async (req, res) => {
        console.log(req.query)
        try {
            const data = await Reserva.findByIdAndDelete(req.query.id);
            return res.json(data);
         }
         catch (e) {
            /*console.log(e);*/
         }
       
       
    });
}
