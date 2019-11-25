var state = {
    currentSong: null,
    music: [{
        id: 1,
        imageSrc: 'img/jara.jpg',
        buttonId: 'zhara1',
        audioId: 'audio1',
        audioSrc: 'audio/Elena_Temnikova_-_ZHara.mp3',
        name: 'Жара',
        artist: 'Елена Темникова',
        time: '5:38'
    }]
};


document.getElementById('zhara1').onclick = function() {
    playOrPause(1);
};

document.getElementById('zhara2').onclick = function() {
    playOrPause(2);
};

function playOrPause(id) {
    let myAudio = document.getElementById("audio" + id);

    if (state.currentSong == null) {
        state.currentSong = id;
        myAudio.play();
        return;
    }

    if (state.currentSong != null && state.currentSong == id) {
        state.currentSong = null;
        myAudio.pause();
        return;
    }

    if (state.currentSong != null && state.currentSong != id) {
        let myOldAudio = document.getElementById("audio" + state.currentSong);
        myOldAudio.pause();
        state.currentSong = id;
        myAudio.play();
        return;
    }

};

function createSongElement(songInfo) {
    console.log('Pip songInfo:', songInfo);
    //создание песни и вставка
}

createSongElement(state.music[0]);




function block() {
    let w = document.createElement('w');
    w.insertAdjacentHTML('beforeend', '<div id="glav"></div>');
    w.classList.add('triumf_img_block');
    q.append(w);
    console.log('tyr');
    //q.insertAdjacentHTML('beforeend', '<div id="b"class="bl"></div>');
    // q.insertAdjacentHTML('beforeend', '<div id="img" class="triumf_img_block"></div>');
}
block();

function mapMusic() {
    state.music.map(function(song) {
        let img = document.createElement('img');
        img.insertAdjacentHTML('afterbegin', '<img>');
        img.classList.add('triumf_img');
        img.src = song.imageSrc;
        glav.prepend(img);
    });
}
mapMusic();

// function imgPhoto() {
//     let img = document.createElement('img');
//     img.classList.add('triumf_img');
//     img.className = "triumf_img";
//     img.innerHTML = state.imageSrc;
//     img.insertAdjacentHTML('afterbegin', '<img class="triumf_img">');
//     glav.append(img);
// }
// imgPhoto();

function triumfNameBlock() {
    let nameBlock = document.createElement('nameBlock');
    nameBlock.insertAdjacentHTML('beforeend', '<div id="nameBlockId"></div>');
    nameBlock.classList.add('triumf-name-block');
    glav.after(nameBlock);
    console.log('nameBlock');
}
triumfNameBlock();

function buttonAndName() {
    state.music.map(function(song) {
        let btnName = document.createElement('btnName');
        btnName.insertAdjacentHTML('afterbegin', '<div id="btnNameId"> </div>');
        btnName.classList.add('triumf-name');
        nameBlockId.prepend(btnName);
        console.log('triumf-name');

        let inpZhara1 = document.createElement('inpZhara1');
        inpZhara1.insertAdjacentHTML('afterbegin', '<input id="zhara1" type="button" value="Play">');
        // inpZhara1.innerHTML = song.buttonId;
        btnNameId.prepend(inpZhara1);
        console.log('inpZhara1');

        let audioRecord = document.createElement('audioRecord');
        audioRecord.insertAdjacentHTML('afterbegin', '<audio id="audio1" autostart="false"></audio>');
        audioRecord.src = song.audioSr;
        btnNameId.append(audioRecord);
        console.log('audioRecord');

        let name = document.createElement('name');
        name.insertAdjacentHTML('afterbegin', '<p></p>');
        name.innerHTML = song.name;
        btnNameId.append(name);
        console.log('name');

        let artist = document.createElement('artist');
        artist.insertAdjacentHTML('beforeend', '<div><p></p></div>');
        artist.innerHTML = song.artist;
        nameBlockId.append(artist);
        console.log('artist');

        let times = document.createElement('times');
        times.insertAdjacentHTML('beforeend', '<div><p></p></div>');
        times.classList.add('times');
        times.innerHTML = song.time;
        nameBlockId.append(times);

    });
}
buttonAndName();

// function inputZhara1() {
//     let inpZhara1 = document.createElement('inpZhara1');
//     inpZhara1.insertAdjacentHTML('afterbegin', '<input id="zhara1" type="button" value="Play">');
//     nameBlockId.prepend(inpZhara1);
//     console.log('inpZhara1');
//     let audioRecord = document.createElement('audioRecord');
//     audioRecord.innerHTML = "";
//     audioRecord.insertAdjacentHTML('afterbegin', '<audio id="audio1" src="audio/Elena_Temnikova_-_ZHara.mp3" autostart="false"></audio>');
//     nameBlockId.append(audioRecord);
//     console.log('audioRecord');
// }
// inputZhara1();


// function audioRecording() {
//     let audioRecord = document.createElement('audioRecord');
//     audioRecord.innerHTML = "";
//     audioRecord.insertAdjacentHTML('afterbegin', '<audio id="audio1" src="audio/Elena_Temnikova_-_ZHara.mp3" autostart="false"></audio>');
//     nameBlockId.append(audioRecord);
//     console.log('audioRecord');
// }
// audioRecording();

// function name() {
//     let name = document.createElement('name');
//     name.innerHTML = '';
//     nameBlockId.append(name);
//     console.log('name');
// }
// name();


/*function triumfImgBlock() {
    let img = document.createElement('img');
    img.insertAdjacentHTML('afterbegin', '<div class="triumf_img_block"></div>');
    q.prepend(img);
    console.log('pam')
    img.insertAdjacentHTML('afterbegin', '<img class="triumf_img " src="img/jara.jpg" alt=" "></div>');
    q.prepend(img);
    console.log('pup');
    // img.innerHTML = "src=\"img/jara.jpg\"";
    q.prepend(img);
    console.log('pum');
}
triumfImgBlock();

function triumfNameBlock() {
    let nameBlock = document.createElement('nameBlock');
    nameBlock.insertAdjacentHTML('beforeend', '<div class="triumf-name-block "></div>');
    console.log('tum');

}
triumfNameBlock();

function buttonId() {
    let btn = document.createElement('btn');
    btn.insertAdjacentHTML('afterbegin', '<input id="zhara1" type="button" value="Play" />');
    console.log('op');
}
buttonId();

function audioId() {
    let track = document.createElement('track');
    track.insertAdjacentHTML('afterbegin', '<audio id="audio1" src="audio/Elena_Temnikova_-_ZHara.mp3" autostart="false"></audio>');
    console.log('tra');
}
audioId();

function name() {
    let name = document.createElement('name');
    name.insertAdjacentHTML('afterbegin', '<p id="nameW">Жара</p>');
    // nameW.className = 'triumf_img_block';

    // nameW.prepend(name);
}
name();

function artist() {
    let arti = document.createElement('arti');
    arti.insertAdjacentHTML('afterend', '<div><p>Елена Темникова</p></div>');
    // nameW.className = 'triumf_img_block';

    // nameW.prepend(name);
}
name();
*/
// console.log(triumfImgBlock(Info));


// function triumfNamebBlock(Info) {
//     let div = document.createElement(Info);
//     document.body.insertAdjacentHTML('afterend', '<div class="triumf-name-block"></div>')
//     div.className = 'triumf-name-block';
// }