const VdoPsZone = document.getElementById('presentZone');
const VdoPsPages = VdoPsZone.getAttribute('page');
var VdoFormat = 'mp4';
var VdoFolder = './ps'
var VdoPsS = "";
document.head.innerHTML += `<style>.Vdos { height: 100vh; } #presentZone { position: absolute; top: 0; left: 0; display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw;}</style>`

for (let i = 1; i <= VdoPsPages; i++) {
    VdoPsS += `<video src='${VdoFolder}/${i}.${VdoFormat}' id='VdoN${i}' class='Vdos' muted style='display:none;'></video>`;
}

VdoPsZone.innerHTML = VdoPsS;

var VdoCount = 2;

const getMaxMin = (n, min, max) => {
    if (min > n) return min;
    if (n > max) return max;
    return n;
}

document.getElementById('VdoN1').style.display = "block";
document.getElementById('VdoN1').play();

VdoPsZone.onclick = (e) => {
    console.log(e);
    document.getElementById('VdoN' + (VdoCount - 1)).style.display = "none";
    document.getElementById('VdoN' + (VdoCount)).style.display = "block";
    document.getElementById('VdoN' + (VdoCount - 1)).pause();
    document.getElementById('VdoN' + (VdoCount)).play();
    VdoCount = getMaxMin(VdoCount + 1, 1, VdoPsPages);
    e.preventDefault();
}

VdoPsZone.oncontextmenu = (e) => {
    VdoCount = getMaxMin(VdoCount - 1, 1, VdoPsPages);
    console.log(e);
    document.getElementById('VdoN' + (VdoCount + 1)).style.display = "none";
    document.getElementById('VdoN' + (VdoCount)).style.display = "block";
    document.getElementById('VdoN' + (VdoCount + 1)).pause();
    document.getElementById('VdoN' + (VdoCount)).play();
    e.preventDefault();
}