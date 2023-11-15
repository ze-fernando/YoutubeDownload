const route = require('express').Router();
const video = require('../service/service');

route.post('/mp3', async (req, res)=>{
    var url = req.body.url;
    await audio(url);

    return res.status(200).send('OK');
});

route.post('/mp4', async (req, res)=>{
    var url = req.body.url;
    video(url);

    return res.status(200);
});

module.exports = route;