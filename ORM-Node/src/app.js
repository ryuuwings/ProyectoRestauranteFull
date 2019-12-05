import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import clientsRoutes from './routes/clientes';
import tablesRoutes from './routes/mesas';
import waiterRoutes from './routes/camareros';
import productsRoutes from './routes/productos';
import detailRoutes from './routes/detalles';
import billRoutes from './routes/facturas';
import imageRoutes from './routes/imagenes';

//initialization
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(json());
var cors = require('cors');
app.use(cors());

//routes
app.use('/api/clientes',clientsRoutes);
app.use('/api/mesas',tablesRoutes);
app.use('/api/camareros', waiterRoutes);
app.use('/api/productos', productsRoutes);
app.use('/api/facturas', billRoutes);
app.use('/api/detalles', detailRoutes);
app.use('/api/imagenes', imageRoutes)

export default app;