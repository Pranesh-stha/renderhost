import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



app.get('/hi', (req, res) => {
  res.status(200).json('Hi from Express server 👋 v2');

});

app.get('/pranesh', (req, res) => {
  res.status(200).json('Hi from pranesh home server yeah 👋');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
