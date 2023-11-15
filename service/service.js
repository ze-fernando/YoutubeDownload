const yt = require('ytdl-core');
const fs = require('fs');

async function Video(url) {
    let v = await yt.getInfo(url);
    let name = v.videoDetails.title; 
    const format = yt.chooseFormat(v.formats, { quality: 'highest' });

    yt(url, {format: format})
   .pipe(fs.createWriteStream(`${name}.${format.container}`));
    
}


module.exports = Video;