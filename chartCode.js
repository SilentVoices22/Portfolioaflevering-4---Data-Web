const ctx = document.querySelector('#chart').getContext('2d');

const chartForMonths = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni','Juli','August', 'September','Oktober', 'November','December'],
        datasets: [{
               label: 'Årlig invoice per måned',
            data: [34,33,35,33,35,35,35,35,33,35,34,35],
            fill: true, 
        }]
    }, options: {
    scales: {
        y: {
            
            suggestedMin: 32,
            suggestedMax: 36 
        }
    }
}
});


const ctx2 = document.querySelector('#chart2').getContext('2d');

const chartForGenres = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Rock', 'Latin', 'Reggae', 'Metal', 'Alternative & Punk', 'Soundtrack','Classical','Pop', 'Blues','R&B/Soul', 'Hiphop/Rap','World', "Sci Fi & Fantasy"],
        datasets: [{
            data: [691,502,83,74,71,55,39,36,31,31,30,27,27,8],
            
        }]
    }
});






// fetching invoice.json

const url = ["album.json","artist.json","customer.json","genre.json","invoice.json","invoiceline.json","track.json"]
const invoiceData = "invoice.json";

fetch(invoiceData)
    .then(response => response.json())
    .then(Data => {
        console.log(Data);
    });



