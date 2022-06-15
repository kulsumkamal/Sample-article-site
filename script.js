function stopChaos() {
    const vid = document.getElementById("bgvid");
    const image = document.getElementById("doom_image");
    vid.pause();
    image.style.animationPlayState = "paused";
    document.getElementById("Sub-form").style.display="block";
}

function startChaos() {
    const cancel = document.getElementById('Sub-form');
    cancel.style.display='none';
    const vid = document.getElementById("bgvid");
    const image = document.getElementById("doom_image");
    vid.play();
    image.style.animationPlayState = "running";
}

function login() {
    const btn = document.getElementsByName("password-rpt");
    btn[0].style.display = 'none';
    btn[1].style.display = 'none';
}

function subscribe() {
    const btn = document.getElementsByName("password-rpt");
    btn[0].style.display = 'block';
    btn[1].style.display = 'block';
}
