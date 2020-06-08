var nasa;
const url = 'https://api.nasa.gov/planetary/apod?api_key=ZYvidubAwlzYOV5HLowtSrbikugpv1n5LeeugzxK';

fetch(url)
	.then(res => res.json())
	.then(data => nasa = data)
	//.then(() => console.log(nasa))


setTimeout(function(){
	document.getElementById('date').innerText = `NASA's Astronomy Picture of the Day for ${formatDate(nasa.date)}`;

	if (nasa.media_type == 'image'){
		document.getElementById('media').innerHTML = `
			<img src="${nasa.url}" alt="${nasa.title}" id="image">
		`;
	} else {
		// nasa.media_type == 'video'
		document.getElementById('media').classList.add('video')
		document.getElementById('media').innerHTML = `
			<iframe width="560" height="315" src="${nasa.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`;
	}

	if (nasa.title){
		document.getElementById('title').innerText = nasa.title;
	}

	if (nasa.explanation){
		document.getElementById('description').innerText = nasa.explanation;
	}

	if (nasa.copyright){
		document.getElementById('author').innerText = `Credit: ${nasa.copyright}`;
	} else {
		document.getElementById('author').style.opacity = '0';
	}

}, 1000)


setTimeout(function(){
	document.getElementById('loader').style.display = 'none';
	document.getElementById('reveal').style.display = 'block';
	document.getElementById('container').style.height = '100%';
}, 1500)


function formatDate (input) {
	var datePart = input.match(/\d+/g),
	year = datePart[0]
	month = datePart[1], day = datePart[2];
	return month+'-'+day+'-'+year;
}