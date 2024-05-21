
import { createRequire } from "module";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
import express from 'express';
import { engine } from 'express-handlebars'; // Vào thư mục node_modules tải thư viện express lên lưu vào biến express
import { dir } from "console";
const morgan = require('morgan')
const app = express() //trả về một install 
const port = 3000
var path = require('path');


app.use(express.static(path.join(__dirname, '/public')));
console.log('path:     '+  path.join(__dirname, 'public'))

//HTTP LOGGER
app.use(morgan('combined'))

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/recourses/views'));


//route
app.get('/', (req, res) => {
  res.render('home')
})

//route
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})