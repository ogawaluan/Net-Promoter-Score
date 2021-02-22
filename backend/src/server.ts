import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'hi user!' });
});

app.post('/', (request, response) => {
  return response.json({ message: "Dados salvos com sucesso" });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});