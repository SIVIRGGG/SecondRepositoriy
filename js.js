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
    w.className = "triumf_img_block";
    w.insertAdjacentHTML('beforeend', '<div id="glav"></div>');
    q.append(w);
    console.log('tyr');
    //q.insertAdjacentHTML('beforeend', '<div id="b"class="bl"></div>');
    // q.insertAdjacentHTML('beforeend', '<div id="img" class="triumf_img_block"></div>');
}
block();

function imgPhoto() {
    let img = document.createElement('img');
    img.className = "triumf_img";
    img.innerHTML = 'src = "img/senorita.jpg"';
    img.insertAdjacentHTML('afterbegin', '<img>');
    glav.append(img);
}
imgPhoto();

function triumfNameBlock() {
    let nameBlock = document.createElement('nameBlock');
    nameBlock.className = 'triumf-name-block';
    nameBlock.insertAdjacentHTML('beforeend', '<div id="nameBlockId"></div>');
    glav.append(nameBlock);
    console.log('nameBlock');
}
triumfNameBlock();

function buttonAndName() {
    let btnName = document.createElement('btnName');
    btnName.className = 'triumf-name';
    btnName.insertAdjacentHTML('afterbegin', '<div></div>');
    nameBlockId.prepend(btnName);
    console.log('triumf-name')
}
buttonAndName();

function inputZhara1() {
    let inpZhara1 = document.createElement('inpZhara1');
    inpZhara1.className = 'zhara1';
    inpZhara1.insertAdjacentHTML('afterbegin', '<input id="zhara1" type="button" value="Play">');
    nameBlockId.prepend(inpZhara1);
    console.log('inpZhara1');
}
inputZhara1();

function audioRecording() {
    let audioRecord = document.createElement('audioRecord');
    audioRecord.innerHTML = "";
    audioRecord.insertAdjacentHTML('afterbegin', '<audio id="audio1" src="audio/Elena_Temnikova_-_ZHara.mp3" autostart="false"></audio>');
    nameBlockId.append(audioRecord);
    console.log('audioRecord');
}
audioRecording();

function name() {
    let name = document.createElement('name');
    name.innerHTML = 'Жара';
    nameBlockId.append(name);
    console.log('name');
}
name();


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