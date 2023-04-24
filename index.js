const express = require('express')
const app = express()
const PORT = 80
const object = {
    "message": 'My name is Ely Schoenfield',
    "timestamp": time.time()
}
app.get('/', (req, res) => {
    res.json(object);
    res.sendStatus(200);
  });
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
  