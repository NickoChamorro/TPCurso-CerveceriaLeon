const contenedor 	= document.querySelector('#contenedor');
const logo 			= document.querySelector('#logo');
const linkPalabras 	= document.querySelector('#linkPalabras');
const linkPalabras2 = document.querySelector('#linkPalabras2');
const linkPalabras3 = document.querySelector('#linkPalabras3');
const linkPalabras4 = document.querySelector('#linkPalabras4');
const linkPalabras5 = document.querySelector('#linkPalabras5');
const footer 		= document.querySelector('#footer');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
	logo.classList.toggle('active');
	linkPalabras.classList.toggle('active');
	linkPalabras2.classList.toggle('active');
	linkPalabras3.classList.toggle('active');
	linkPalabras4.classList.toggle('active');
	linkPalabras5.classList.toggle('active');
	footer.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 1000){
		contenedor.classList.remove('active');
		logo.classList.remove('active');
		linkPalabras.classList.remove('active');
		linkPalabras2.classList.remove('active');
		linkPalabras3.classList.remove('active');
		linkPalabras4.classList.remove('active');
		linkPalabras5.classList.remove('active');
		footer.classList.remove('active');
	} else {
		contenedor.classList.add('active');
		logo.classList.add('active');
		linkPalabras.classList.add('active');
		linkPalabras2.classList.add('active');
		linkPalabras3.classList.add('active');
		linkPalabras4.classList.add('active');
		linkPalabras5.classList.add('active');
		footer.classList.add('active');
	}
}

// const verificarDispositivo = () => {
// 	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
// 		console.log(`Dispositivo: Celular o tablet`);
// 		// for (var i=0; i<productCards.length; i++) {
// 		// 	productCards[i].classList.remove('active');
// 		// }
// 		// agregar active a .product-card y sacar o poner segun sea o no celular y en el html productos en el script VanillaTilt 
// 		// agregar .product-card .active asi solo lo toma si esta activo sino no hay nada. En css no tocar nada (ver si se puede)
// 	} else {
// 		console.log(`Dispositivo: PC`)
// 		// for (var i=0; i<productCards.length; i++) {
// 		// 	productCards[i].classList.add('active');
// 		// }
// 	}
// }

// verificarDispositivo();

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
	// verificarDispositivo();
});

// window.addEventListener('onload', () =>{
// 	verificarDispositivo();
// })

