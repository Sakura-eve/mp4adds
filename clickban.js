//禁止右键

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("禁止恶意拿代码的");
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (window.event.keyCode == 12) {
        window.event.returnValue = false;
        return (false);
    }
}

//关闭div
function CloseDiv(div) {
    document.getElementById(div).style.display = 'none';
}
