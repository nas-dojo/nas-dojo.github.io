
var scene = document.querySelector('a-scene');
var sphere = null;

// var sphere = document.createElement('a-sphere');
// sphere.setAttribute('color', '#FF9500');
// sphere.setAttribute('radius', '1.25');
// sphere.setAttribute('position', '0 1.25 -5');
// scene.appendChild(sphere);


const ctlL = document.getElementById("ctlL");
const ctlR = document.getElementById("ctlR");

var t = 0;
var c = 0;
function render() {
    
    if (sphere === null) {
        c = Math.floor(Math.random() * Math.floor(10))-5;
        sphere = document.createElement('a-sphere');
        sphere.setAttribute('color', '#FF9500');
        sphere.setAttribute('radius', '1.25');
        sphere.setAttribute('position', c + ' 1.25 -5');
        scene.appendChild(sphere);
    }

    if (t>100) {
        scene.removeChild(sphere);
        sphere = null;
        t=0;
    }

    t += 1;
    requestAnimationFrame(render);
    sphere.setAttribute('position', c+ ' 0 ' + (-100+t));
}
render();

