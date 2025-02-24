// It's a pain to manually update the navbar on every page each time a new page is added, so I made this script.
// If JS isn't enabled, every thing is accessible on the home page and a back button is shown instead of a navbar

const navbar = {
    "Home": "index.html",
    "Albums": "albums.html",
    "About": "about.html",
    "Q&A": "qa.html",
    "Attributions": "attrib.html",
    "Gallery": "gallery.html",
    "Merch": "merch.html",
    "PAMT Kids<img src='pamt kid head.svg' height=15 style='padding-left: 5pt;'>": "kids.html"
}

const nav_el = document.getElementsByTagName("nav")[0]
nav_el.innerHTML = "*";

for (let i in navbar) {
    nav_el.innerHTML += `<span> </span><a href="${navbar[i]}">${i}</a> *`
}