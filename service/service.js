const yt = require('ytdl-core');
const fs = require('fs');
const os = require('os');
const path = require('path');


async function Video(url) {
    let v = await yt.getInfo(url);
    let name = v.videoDetails.title; 
    const format = yt.chooseFormat(v.formats, { quality: 'highest' });
    
    const donwloads = path.join(os.homedir(), 'Downloads');
    let home = path.join(donwloads, `${name}.${format.container}`);
    
    yt(url, {format: format})
   .pipe(fs.createWriteStream(home));
    
}


async function Audio(url){
    let v = await yt.getInfo(url);
    let name = v.videoDetails.title; 

    const donwloads = path.join(os.homedir(), 'Downloads');
    let home = path.join(donwloads, `${name}.mp3`);

    yt(url, { filter: 'audioonly', format: 'webm' })
    .pipe(fs.createWriteStream(home)); 
}

module.exports = {Audio, Video};