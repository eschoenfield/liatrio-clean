const express = require('express');
const app = express();
const PORT = 80;
const object = {
    "message": 'My name is Ely Schoenfield',
    "timestamp": new Date().getTime()
}
app.get('/', (req, res) => {
    res.json(object);
    res.sendStatus(200);
  });
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
  