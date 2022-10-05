const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')
const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http:localhost:8080', 'https://myapp.co'];
const options = {
  oriigin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log('Mi port' +  port);
});
