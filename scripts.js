var nasa;
const url = 'https://api.nasa.gov/planetary/apod?api_key=ZYvidubAwlzYOV5HLowtSrbikugpv1n5LeeugzxK';

fetch(url)
	.then(res => res.json())
	.then(data => nasa = data)
	.then(() => console.log(nasa))


setTimeout(function(){
	const title = nasa.title;
	const copyright = nasa.copyright;

	document.getElementById('date').innerText = formatDate(nasa.date);
	document.getElementById('title').innerText = title;
	
	document.getElementById('image').setAttribute('src', nasa.url);
	document.getElementById('image').setAttribute('alt', title);

	document.getElementById('description').innerText = nasa.explanation;

	if (copyright){
		document.getElementById('author').innerText = `Credit: ${copyright}`;
	} else {
		document.getElementById('author').style.opacity = '0';
	}

}, 1000)


setTimeout(function(){
	document.getElementById('loader').style.display = 'none';
	document.getElementById('reveal').style.display = 'block';

}, 1500)


function formatDate (input) {
	var datePart = input.match(/\d+/g),
	year = datePart[0]
	month = datePart[1], day = datePart[2];
	return month+'-'+day+'-'+year;
}