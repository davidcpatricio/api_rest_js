import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening on ${port}`);
  console.log(`CTRL + Click on http://localhost:${port}`);
});
