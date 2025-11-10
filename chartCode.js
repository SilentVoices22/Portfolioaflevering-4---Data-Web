const ctx = document.querySelector('#chart').getContext('2d');

const chartForMonths = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni','Juli','August', 'September','Oktober', 'November','December'],
        datasets: [{
            label: 'Monthly Invoice',
            data: [34,33,35,33,35,35,35,35,33,35,34,35],
        }]
    }
});