const route = require('express').Router();
const ytdl = require('../service/service');

route.post('/mp3', async (req, res)=>{
    var url = req.body.url;
    try {
        await ytdl.Audio(url);
        res.status(200).json({message: 'Successful download'});        
    } catch (err) {
        res.status(500).json({message: 'Download error'});
        console.log(err)
    }
        

});

route.post('/mp4', async (req, res)=>{
    var url = req.body.url;
    try {
        await ytdl.Video(url);
        res.status(200).json({message: 'Successful download'});
    }
    catch (err){
        res.status(500).json({message: 'Download error'});
        console.log(err);
    }
});

module.exports = route;