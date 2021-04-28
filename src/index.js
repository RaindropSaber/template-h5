function component() {
	const element = document.createElement('div');
	element.innerHTML = ['Hello', 'Raindrop'].join('-');

	return element;
}

document.body.appendChild(component());
