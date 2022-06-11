function stopChaos() {
    const vid = document.getElementById("bgvid");
    const image = document.getElementById("doom_image");
    vid.pause();
    image.style.animationPlayState = "paused";
    document.getElementById("Sub-form").style.display="block";
}