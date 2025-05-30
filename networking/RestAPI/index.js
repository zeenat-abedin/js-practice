import express from 'express';

const app = express()

app.all('/', (req,res) => {
    console.log(req);
    console.log(res);
    res.send(`I'm up!`);
})

const PORT = 5111;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})