let canvas = document.getElementById("pixelCanvas");

// when submit button is clicked page will not refresh
// if there's a canvas already, it'll be erased
// function that makes the grid is envoked
document.getElementById("submit").addEventListener("click",(e)=>{
	e.preventDefault();
	canvas.innerHTML = "";
	makeGrid();
});