import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

import usuario from './src/routers/usuarios.router.js';
import novedad from './src/routers/novedades.router.js';
import elemento from "./src/routers/elementos.router.js";
import ambientes from "./src/routers/ambientes.router.js";
import area from "./src/routers/areas.router.js";
import prestamo from "./src/routers/prestamos.router.js";

const app = express();
const PORT = 3000;

//configuracion
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar CORS para todas las rutas
app.use(cors());

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./src/public'));

app.get('/document',(req, res)=>{
  res.render('documentacion.ejs')
})

//rutas
app.use('/usuario',usuario);
app.use('/novedad',novedad);
app.use('/elemento', elemento);
app.use('/ambiente',ambientes);
app.use('/area',area);
app.use('/prestamo',prestamo);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});