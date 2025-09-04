const show = document.querySelector('.show-btn');
const arrowUp = document.querySelector('.show-btn__arrow');
const brandsList = document.querySelector('.brands__list');



show.addEventListener('click', showAll);

function showAll (event) {
	brandsList.classList.toggle('brands__list--full');
	arrowUp.classList.toggle('show-btn__arrow--up');
}

window.addEventListener('resize', initMobileSlider);
    initMobileSlider();

document.addEventListener('click', textBtn);

function textBtn (event) {
	if (event.target.closest ('.show-btn')) {
		show.classList.toggle('show-btn--active');
	}
}



    

