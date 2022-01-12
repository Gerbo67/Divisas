async function validate() {
    const origin = document.getElementById('money-o').value;
    const convert = document.getElementById('money-c').value;

    if (origin != convert) {

        const originF = valueFormat(origin);
        const convertF = valueFormat(convert);

        if (originF != 'ERROR' && convertF != 'ERROR') {
            await fetch('https://api.cambio.today/v1/quotes/EUR/USD/json?quantity=1&key=14890|sDTD7WGRpU_gnUW~93Cfqpd~gZnWmqMq')
                .then(async response => await console.log(response.json()))
        } else {
            alert("Uso inadecuado");
        }

    } else {
        alert("Conversion inecesaria");
    }
}

function valueFormat(value){
    switch (value){
        case '1': return 'MXN'; break;
        case '2': return 'EUR'; break;
        case '3': return 'BTC'; break;
        default: return 'ERROR';
    }
}