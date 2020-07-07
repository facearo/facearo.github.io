const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.menu-bar-box')

	burger.addEventListener('click',() => {
		nav.classList.toggle('menu-bar-box-active');
	} );

}

		navSlide();