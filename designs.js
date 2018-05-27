let canvas = document.getElementById("pixelCanvas");

// When submit button is clicked page will not refresh
// If there's a canvas already, it'll be erased
// Function to makes the canvas/table is envoked
document.getElementById("submit").addEventListener("click",(e)=>{
	e.preventDefault();
	canvas.innerHTML = "";
	makeGrid();
	colorPicker();
});

// create canvas/table
let makeGrid = ()=>{
	let height = document.getElementById("inputHeight").value;
	const tableRow = document.createElement("tr");
	while(height>0) {
		canvas.appendChild(tableRow.cloneNode(true));
		height--;
	}

	let width = document.getElementById("inputWidth").value;
	const tableColumn = document.createElement("td");
	let allTheRows = document.querySelectorAll("tr");
	allTheRows.forEach(function(x,y){
		for(var i=0; i<width; i++){
			allTheRows[y].appendChild(tableColumn.cloneNode(true));
		}
	});
}

// obtain/apply selected color
let colorPicker = ()=>{
	let allSquares = document.querySelectorAll("td");
	for(var i=0; i<allSquares.length; i++) {
	 	allSquares[i].addEventListener("click", function(){
			const colorSelected = document.getElementById("colorPicker").value;
			this.style.backgroundColor = colorSelected;
		});
	};
}