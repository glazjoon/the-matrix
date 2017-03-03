inject();

function inject() {
	var body = document.getElementsByTagName('body')[0];
	body.style.height = '100%';

	var div = document.createElement('div');
	div.id = 'matrixRutan';
	div.style.fontSize = '25px';
	div.style.fontFamily = 'courier';
	div.style.width = '100%';
	div.style.position = 'absolute';
	div.style.backgroundColor = 'rgba(0,0,0,0.85)';
	div.style.top = 0;
	div.style.zIndex = 999;
	div.style.maxWidth = '100%'
	div.style.textAlign = 'left';

	body.appendChild(div);

	body.addEventListener('mousemove', function(evt) {
		evt.preventDefault();
			matrix(3);
	});
}

function getRandomNumber(max) {
	return Math.round(Math.random() * max);
}

function matrix(antal) {
	var matrixRutan = document.getElementById('matrixRutan');
	var textColors = ['green', 'lime', 'chartreuse', 'darkgreen'];

	for (var i = 0; i < antal; i++) {
		var span = document.createElement('span');
		span.innerHTML = getRandomNumber(1);
		span.style.display = 'inline-block';
		span.style.color = textColors[getRandomNumber(3)];
		matrixRutan.append(span);
	}
}
