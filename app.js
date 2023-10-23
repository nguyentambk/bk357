
Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    //streamUrl: 'rtsp:admin:B_vitech@192.168.88.2:554/Streaming/channels/201',
    streamUrl: 'rtsp://172.28.1.52:554/Streaming/Channels/102/?transportmode=unicast',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30,
        '-bufsize': '64k' // options with required values specify the value after the key
    }
});

/*
const axios = require('axios');
var dataPost = JSON.stringify({
    "len": 110,
    "uid": "BVT002",
    "type": "uk",
    "state": "ON",
    "bat": 6.9,
    "interval": 12,
    "volume": 23,
    "lat": "10.4551233",
    "lon": "106.077654564",
    "alt": "aaa",
    "year": 2021,
    "month": "06",
    "day": 28,
    "hour": 14,
    "min": 12,
    "sec": 45,
    "CRC": "Ả34578878787"
});

var config = {
    method: 'post',
    url: 'http://112.78.4.162:3000/api/postData',
    headers: {
        'Content-Type': 'application/json'
    },
    data: dataPost
};
const sendPost = async () => {
    try {
        const resp = await axios(config);
        console.log(resp.data);
    } catch (err) {
        console.log(err);
    }
};
for (var i = 0; i < 10; i++) {
    sendPost();
}
*/