const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var error_result = false;

function ct(c, text, y) {
    var textWidth = c.measureText(text).width;
    var textX = c.canvas.width/2 - (textWidth/2);
    var textY = y;
    c.fillText(text, textX, textY);
}
function certificate(a, c) {
    const v = c;const t = v.getContext("2d");const w = 1280; const h = 720;
    var g = t.createLinearGradient(0,0,w,h);
    g.addColorStop(0, "#ffd42a");
    g.addColorStop(1, "#d3a52a");
    t.fillStyle = g;
    t.fillRect(0,0,w,h);
    var n = 15;
    t.lineWidth = 10;
    t.strokeStyle = `#786721`;
    t.strokeRect(n, n, w - (n*2), h - (n*2));
    t.font = "40px Comic Sans MS";
    t.fillStyle = "black";
    var d = new Date();
    ct(t, `This certificate certifies that, on ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()},`, 90);
    t.font = "70px Comic Sans MS";
    ct(t, a, 240);
    t.font = "40px Comic Sans MS";
    ct(t, "has completed People Against Music Theory's", 360);
    ct(t, "Baby Shark Challenge by listening to Baby Shark", 360+50);
    ct(t, "for at least 10 minutes.", 360+100);
    ct(t, "pamtofficial.github.io/kid-stuff/babyshark", h-50);
}

function match_wrapper(number) {
    var result_el = document.getElementById("result");
    if (!match) {
        error_result = true;
        result_el.innerHTML = `<span style="color: red">Error: match function is not a function!</span>`
        return false;
    }
    try {
        error_result = false;
        return match(number)
    } catch (e) {
        error_result = true;
        console.error(e);
        result_el.innerHTML = `<span style="color: red">${e.name}: ${e.message}</span>`
        return false;
    }
}

function submit() {
    var code = document.getElementById("code").value.toString()
    var result = match_wrapper(code)
    var result_el = document.getElementById("result");
    var inst = document.getElementById("instructions");
    if (error_result) {
        return;
    }
    if (result) {
        result_el.innerText = ""
        inst.innerText = "Wow! You got it! Enter your name!"
        document.getElementById("code").value = ""
        document.getElementById("submit").setAttribute("onclick", "create()")
        document.getElementById("submit").innerText = "Show me my prize!"
    } else {
        result_el.innerText = "Sorry! That's not it. Try again!"
    }
    console.log(result)
}

function create() {
    var code = document.getElementById("code");
    var submit = document.getElementById("submit");

    var name = code.value;
    code.outerHTML = ""
    submit.outerHTML = ""
    canvas = document.createElement("canvas")
    canvas.width = 1280, canvas.height = 720;
    canvas.style.width = "480px";

    certificate(name, canvas);

    var result = document.getElementById("result");
    result.innerHTML = ""
    result.appendChild(canvas);
    inst = document.getElementById("instructions");
    inst.innerText = "Right click/long tap and click \"Save as\" or \"Download\" to save your prize!"
}