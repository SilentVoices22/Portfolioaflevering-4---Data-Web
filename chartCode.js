const ctx = document.querySelector('#chart').getContext('2d');

const chartForMonths = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni','Juli','August', 'September','Oktober', 'November','December'],
        datasets: [{
               label: 'Invoices pr. måned',
            data: [34,33,35,33,35,35,35,35,33,35,34,35],
            fill: true,
            borderColor: 'lawngreen'
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
            label: 'Popularitet for genre i Brasillien',
            data: [691,502,83,74,71,55,39,36,31,31,30,27,27,8],

        }]
    }
});




const ctx3 = document.querySelector('#chart3').getContext('2d');

const chartForArtists = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Iron Maiden','U2','Lost','Led Zeppelin','Metallica','Deep Purple','Pearl Jam','Lenny Kravitz','Van Halen','The Office','Various Artists','Red Hot Chili Peppers','Faith No More','Foo Fighters','Titãs','Os Paralamas Do Sucesso','Queen','The Rolling Stones','Eric Clapton','Heroes'],
        datasets: [{
            label: 'Hvilke kunstere tjener flest penge?',
            data: [1233.54,895.59,833.70,620.73,599.94,550.44,408.87,372.51,336.82,328.80,318.78,299.97,296.01,270.27,269.75,265.32,256.41,249.48,241.56,238.61]
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



