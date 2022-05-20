function hoverIcono(iconoId, color) {
	let linkIcono = document.getElementById(`${iconoId}`);
	linkIcono.style.filter = `drop-shadow(0 0 0.5rem ${color})`;
};

function deleteHoverIcono(iconoId){
	let linkIcono = document.getElementById(`${iconoId}`);
	linkIcono.style.filter = `none`;
}

// function hoverPalabras(palabraClass, color) {
// 	let elemento    = document.querySelector(palabraClass);
// 	let linkPalabra = window.getComputedStyle(elemento, `::before`);
// 	linkPalabra.style.filter = `drop-shadow(0 0 0.5rem ${color})`;
// 	linkPalabra.style.width = `100%`;

// 	// document.styleSheets[2].insertRule(`.palabras::before {filter:drop-shadow(0 0 0.5rem ${color}), width:100%}`,0)
// };