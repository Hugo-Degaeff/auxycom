var mymap = L.map('mapid').setView([47.73031320061629, 7.301165268524142], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        L.marker([47.73046659254664, 7.301136597080131]).addTo(mymap)
            .bindPopup('IUT MMI');
