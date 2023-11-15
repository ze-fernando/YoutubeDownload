const yt = require('ytdl-core');
const fs = require('fs');

function Video(url) {

    yt(url)
    .pipe(fs.createWriteStream('video.mp4'));
    
    return res.status(200);
}


module.exports = Video;