var state = {
    currentSong: null,
    lastSong: null,
    songListId: 'current_song_list',
    music: [{
            id: 1,
            imageSrc: 'img/jara.jpg',
            buttonId: 'gdgdfgdf',
            audioId: '1sdf',
            audioSrc: 'audio/Elena_Temnikova_-_ZHara.mp3',
            name: 'Жара',
            artist: 'Елена Темникова',
            time: '5:38'
        },
        {
            id: 2,
            imageSrc: 'img/senorita.jpg',
            buttonId: 'zhadfgfdfggra2',
            audioId: '2sdf',
            audioSrc: 'audio/Shawn Mendes & Camila Cabello - Senorita.mp3',
            name: 'Senorita',
            artist: 'Shawn Mendes',
            time: '3:29'
        },
        {
            id: 3,
            imageSrc: 'img/ashiel.jpg',
            buttonId: 'zhadfggfdgfdra3',
            audioId: '3sdf',
            audioSrc: 'audio/mixvon.net_ashley_o_-_on_a_roll_imp416438.mp3',
            name: 'On A Rol',
            artist: 'Ashley O',
            time: '15:56'
        },
        {
            id: 4,
            imageSrc: 'img/egor.jpg',
            buttonId: 'gjhhg',
            audioId: '4sdf',
            audioSrc: 'audio/egor_krid_-_samaya_samaya_(zaycev.net).mp3',
            name: 'Samaya Samaya',
            artist: 'Egor Krid',
            time: '3:56'
        }

    ]
};


document.getElementById('playId').onclick = function() {
    play();
}
document.getElementById('prevId').onclick = function() {
    prev();
}
document.getElementById('nextId').onclick = function() {
    next();
}

function play() {
    if (state.currentSong == null && state.lastSong == null) {
        playOrPause(state.music[0].audioId);
        return;
    }

    if (state.currentSong != null) {
        playOrPause(state.currentSong);
        return;
    }

    if (state.currentSong == null && state.lastSong != null) {
        playOrPause(state.lastSong);
        return;
    }
}



function next() {
    if (state.currentSong == null && state.lastSong == null) {
        return;
    }

    if (state.lastSong != null && state.lastSong != state.music[state.music.length - 1].audioId) {
        let lastSong = state.music.find(song => song.audioId === state.lastSong);
        let lastSongIndex = state.music.indexOf(lastSong);
        let nextSongId = state.music[lastSongIndex + 1].audioId;

        playOrPause(nextSongId);
        return;

        // должен пробежаться по массиву, определить на каком треке сейчас находимся и перейти к следующему!
    }
    if (state.lastSong != null && state.lastSong == state.music[state.music.length - 1].audioId) {
        return;
    }

    console.log('next');
}

// next();

function prev() {
    if (state.currentSong == null && state.lastSong == null) {
        return;
    }
    if (state.lastSong != null && state.lastSong != state.music[0].audioId) {
        let lastSong = state.music.find(song => song.audioId === state.lastSong);
        let lastSongIndex = state.music.indexOf(lastSong);
        let prevSongId = state.music[lastSongIndex - 1].audioId;

        playOrPause(prevSongId);
        // должен пробежаться по массиву, определить на каком треке сейчас находимся и перейти к следующему!
        return;
    }
    if (state.lastSong != null && state.lastSong == state.music[0].audioId) {
        return;
    }
    console.log('prev');
}
// prev();

function playOrPause(audioId) {
    let myAudio = document.getElementById(audioId);

    if (state.currentSong == null) {
        state.currentSong = audioId;
        state.lastSong = audioId;
        myAudio.play();
        return;
    }

    if (state.currentSong != null && state.currentSong == audioId) {
        state.currentSong = null;
        myAudio.pause();
        return;
    }

    if (state.currentSong != null && state.currentSong != audioId) {
        let myOldAudio = document.getElementById(state.currentSong);
        myOldAudio.pause();
        state.currentSong = audioId;
        state.lastSong = audioId;
        myAudio.play();
        return;
    }

};

function addSongToList(songsInfo, songListId, clear) {
    const triumfCenterList = document.getElementById(songListId);

    if (clear == true) {
        triumfCenterList.innerHTML = '';
    }

    let songs = songsInfo.map(function(song) {
        return createSongElement(song);
    });

    songs.forEach(song => {
        triumfCenterList.appendChild(song);
    });
}

function createSongElement(song) {
    const wrapperTriumf = document.createElement('div');
    wrapperTriumf.classList.add('triumf_img_block');

    const img = document.createElement('img');
    img.classList.add('triumf_img');
    img.src = song.imageSrc;
    wrapperTriumf.appendChild(img);

    const triumfNameBlock = document.createElement('div');
    triumfNameBlock.classList.add('triumf-name-block');


    const triumfName = document.createElement('div');
    triumfName.classList.add('triumf-name');

    const inpZhara1 = document.createElement('div');
    const inpZhara1Input = document.createElement('input');
    inpZhara1Input.id = song.buttonId;
    inpZhara1Input.type = 'button';
    inpZhara1Input.value = 'Play';

    inpZhara1Input.onclick = function() {
        playOrPause(song.audioId);
    };

    inpZhara1.appendChild(inpZhara1Input);

    const audioRecord = document.createElement('div');
    audioRecord.insertAdjacentHTML('afterbegin', `<audio id="${song.audioId}" src="${song.audioSrc}" autostart="false"></audio>`);

    const name1 = document.createElement('p');
    name1.innerHTML = song.name;

    const artist = document.createElement('div');
    const artistP = document.createElement('p');
    artistP.innerHTML = song.artist;

    const times = document.createElement('div');
    times.classList.add('times');
    times.innerHTML = song.time;

    triumfName.prepend(audioRecord);
    triumfName.prepend(inpZhara1);
    triumfNameBlock.appendChild(triumfName);
    triumfNameBlock.appendChild(name1);
    triumfNameBlock.appendChild(artistP);
    triumfNameBlock.appendChild(artist);
    wrapperTriumf.appendChild(triumfNameBlock);
    wrapperTriumf.appendChild(times);

    return wrapperTriumf;
}

addSongToList(state.music, state.songListId, true);