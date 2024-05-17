const express = require('express') // Vào thư mục node_modules tải thư viện express lên lưu vào biến express
const app = express() //trả về một install 
const port = 3000


//route
app.get('/', (req, res) => {
    var a=1, b=2;
    c = a +b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})