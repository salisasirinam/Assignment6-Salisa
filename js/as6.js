document.getElementById('task1').innerHTML = "Task#1: Show width and height; current location, and a reload button";
document.getElementById('task2').innerHTML = "Task#2: Manipalating DOM";
document.getElementById('task3').innerHTML = "Task#3: Mouse and Click Event";

function onresize() {
    document.getElementById("width").textContent = window.innerWidth;
    document.getElementById("height").textContent = window.innerHeight;
    document.getElementById("location").textContent = window.location.pathname;
};

window.addEventListener("resize", onresize);

document.getElementById('reload').onclick = function(event) {
    window.location.reload(true);
};

document.getElementById('buttonHello').onclick = function(event) {
    document.getElementById('hello').innerHTML = "Hello World!";
};

document.getElementById('buttonChangeColor').onclick = function(event) {
    document.getElementById('p3').style.color = "yellow";
};

document.getElementById('buttonShowHide').onclick = function(event) {
	var x= document.getElementById('p2');

	if (x.style.display == "none"){
		x.style.display = "block";
	}else{
		x.style.display = "none";
	}
};