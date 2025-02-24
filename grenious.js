function gotoSong(song) {
    window.location.href = "https://pamtofficial.github.io/grenious/grenious.html?song=" + encodeURI(song);
}

for (let i of document.getElementsByTagName("grbtn")) {
    i.innerHTML = `<span style="vertical-align: middle">View in </span><img src="https://raw.githubusercontent.com/pamtofficial/grenious/refs/heads/main/LogoOutline.svg" height=40 style="vertical-align: middle;">`    
    i.setAttribute("onclick", "gotoSong(`" + i.getAttribute("l") + "`)");
}