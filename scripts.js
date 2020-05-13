var nasa;
const url = 'https://api.nasa.gov/planetary/apod?api_key=ZYvidubAwlzYOV5HLowtSrbikugpv1n5LeeugzxK';

fetch(url)
	.then(res => res.json())
	.then(data => nasa = data)
	// .then(() => console.log(nasa))


setTimeout(function(){

	const title = nasa.title;

	document.getElementById('date').innerText = formatDate(nasa.date);
	document.getElementById('title').innerText = title;
	
	document.getElementById('image').setAttribute('src', nasa.url);
	document.getElementById('image').setAttribute('alt', title);

	document.getElementById('description').innerText = nasa.explanation;
	document.getElementById('author').innerText = `Credit: ${nasa.copyright}`;

}, 1000)


function formatDate (input) {
	var datePart = input.match(/\d+/g),
	year = datePart[0]
	month = datePart[1], day = datePart[2];
	return month+'-'+day+'-'+year;
}