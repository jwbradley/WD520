// get - kansas - cities - csv.js

pjs.addSuite({
    url: 'http://en.wikipedia.org/wiki/Kansas',
    scrapers: [

        function() {
            return $('table.sortable:eq(1) tbody tr').map(function() {
                return [$('td', this).map(function() {
                    return $(this).text();
                }).toArray()];
            }).toArray();
        }
    ]
});
pjs.config({
    writer: 'file',
    format: 'csv',
    csvFields: ['#', 'City', 'Population', 'Growth rate', 'Metro area'],
    outFile: './kansas-cities.csv'
});