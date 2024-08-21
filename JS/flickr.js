const apiKey = process.env.FLICKR_API_KEY;
const userId = '201239793@N04';
const perPage = 10;
const url = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${apiKey}&user_id=${userId}&per_page=${perPage}&format=json&nojsoncallback=1`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const photos = data.photos.photo;
        let output = '';
        photos.forEach(photo => {
            const photoSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
            output += `<img src="${photoSrc}" alt="${photo.title}">`;
        });
        document.getElementById('flickr-gallery').innerHTML = output;
    })
    .catch(error => console.error('Error fetching Flickr photos:', error));
