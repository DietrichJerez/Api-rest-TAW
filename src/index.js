const express = require("express"); 
const app = express();

//setting app
app.set("port", 4001)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.post("/user", (req,res) => {
    res.json({  "usuario": {
            "nombre": "Nombre del usuario",
            "email": "correo@example.com",
            "motivoConsulta": "Motivo de la consulta",
            "fechaReserva": "Fecha de reserva (formato YYYY-MM-DD)"

}})
});
app.get("/calendar", (req,res)=> {
    res.json({
        "calendario": {
        "lunes": {
        "9:00 AM": "libre",
        "10:00 AM": "libre",
        "11:00 AM": "ocupado",
        "12:00 PM": "libre",
        "1:00 PM": "libre",
        "2:00 PM": "ocupado",
        "3:00 PM": "libre",
        "4:00 PM": "libre",
        "5:00 PM": "libre",
        "6:00 PM": "libre"
        },
        "martes": {
        "9:00 AM": "ocupado",
        "10:00 AM": "libre",
        "11:00 AM": "libre",
        "12:00 PM": "libre",
        "1:00 PM": "ocupado",
        "2:00 PM": "libre",
        "3:00 PM": "libre",
        "4:00 PM": "libre",
        "5:00 PM": "libre",
        "6:00 PM": "libre"
        },
        "miércoles": {
        "9:00 AM": "libre",
        "10:00 AM": "libre",
        "11:00 AM": "libre",
        "12:00 PM": "libre",
        "1:00 PM": "libre",
        "2:00 PM": "libre",
        "3:00 PM": "libre",
        "4:00 PM": "ocupado",
        "5:00 PM": "libre",
        "6:00 PM": "libre"
        },
        "jueves": {
        "9:00 AM": "libre",
        "10:00 AM": "libre",
        "11:00 AM": "libre",
        "12:00 PM": "ocupado",
        "1:00 PM": "libre",
        "2:00 PM": "libre",
        "3:00 PM": "libre",
        "4:00 PM": "libre",
        "5:00 PM": "libre",
        "6:00 PM": "libre"
        },
        "viernes": {
        "9:00 AM": "ocupado",
        "10:00 AM": "libre",
        "11:00 AM": "libre",
        "12:00 PM": "libre",
        "1:00 PM": "libre",
        "2:00 PM": "libre",
        "3:00 PM": "libre",
        "4:00 PM": "libre",
        "5:00 PM": "libre",
        "6:00 PM": "libre"
        
        }}
  })
})

//levantando el servidor http
app.listen(app.get("port"), ()=>{
    console.log(`servidor iniciado ${app.get("port")}`);
});