// kansas-cities.js
pjs.addSuite({
    url: 'http://en.wikipedia.org/wiki/Kansas',
    scraper: 'table.sortable:eq(1) tbody tr td:nth-child(2)'
});

pjs.config({
    writer: 'file',
    outFile: './kansas-cities.txt'
});
