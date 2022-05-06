function initMap() {
    const myLatLng = new google.maps.LatLng(50.51963537520148, 30.49360977718573);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    const locations = [
        {
            position:new google.maps.LatLng(50.51963537520148, 30.49360977718573),
            name:'Home',
            info:'This is a place where I live.',
            img:`<img src="src/img/home.png"></img>`,
        },
        {
            position:new google.maps.LatLng(50.519072741297485, 30.495302666529696),
            name:'Kindergarten',
            info:'This is a place I attended when I was a child.',
            img:`<img src="src/img/kinder.png"></img>`,
        },
        {
            position:new google.maps.LatLng(50.51836223280146, 30.50355700608629),
            name:'School',
            info:'This is a place where I spent 10 years of my life.',
            img:`<img src="src/img/school.png"></img>`,
        }
    ];

    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
          position: locations[i].position,
          map: map,
        });

        const content = `<div>${locations[i].img}</div><p class="location-name">${locations[i].name}</p><p class="location-info">${locations[i].info}</p>`;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor:marker,
                map,
            });
        });
    };
};

window.initMap = initMap;
