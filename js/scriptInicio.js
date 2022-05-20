
const Text1Img3 = document.querySelector('#Text1Img3');
const Text1Img4 = document.querySelector('#Text1Img4');

const comprobarAncho2 = () => {
	if(window.innerWidth <= 1399){
		Text1Img3.innerHTML = "Contacto";
		Text1Img4.innerHTML = "Ubicación";
	}else{
		Text1Img3.innerHTML = "Contactanos";
		Text1Img4.innerHTML = "Vení a disfrutar";
	}
};

comprobarAncho2();

window.addEventListener('resize', () => {
	comprobarAncho2();
});
