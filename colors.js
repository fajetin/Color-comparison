function changeleftcolor(){
    var leftvalue = document.getElementById('colortextleft').value.toUpperCase();
    document.getElementById('colortextleft').value = leftvalue
    document.getElementById('leftcolor').style.background = leftvalue;
}

function changerightcolor(){
    var rightvalue = document.getElementById('colortextright').value.toUpperCase();
    document.getElementById('colortextright').value = rightvalue
    document.getElementById('rightcolor').style.background = rightvalue;
}