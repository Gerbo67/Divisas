async function validate() {
    //Elements
    const origin = document.getElementById('money-o').value;
    const convert = document.getElementById('money-c').value;
    const coinTo = document.getElementById('coinTo').value;

    //Validate not equals select
    if (origin != convert) {

        const originF = valueFormat(origin);
        const convertF = valueFormat(convert);

        if (originF != 'ERROR' && convertF != 'ERROR') {

            //URL
            const url = `https://xecdapi.xe.com/v1/convert_to.json/?to=${originF}&from=${convertF}&amount=${coinTo}`;

            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            //Auth
            xhr.setRequestHeader("Authorization", "Basic dW5pdmVyc2lkYWR0ZWNub2xvZ2ljYWRlbG5vcnRlZGVndWFuYWp1YXRvMTE0NzIxMzQ3OmdoczNzbTNrZTFqZG92NnRzM212ZzdmN2gy");

            let jsonRes;
            xhr.onreadystatechange = async function () {
                if (xhr.readyState === 4) {
                    jsonRes = await JSON.parse(xhr.responseText);
                    console.log(jsonRes);
                    document.getElementById('coinFrom').value = jsonRes.from[0].mid;
                }
            };

            xhr.send();

        } else {
            alert("Uso inadecuado");
        }

    } else {
        alert("Conversion inecesaria");
    }
}

function valueFormat(value) {
    switch (value) {
        case '1':
            return 'MXN';
            break;
        case '2':
            return 'EUR';
            break;
        case '3':
            return 'GBP';
            break;
        case '4':
            return 'USD';
            break;
        default:
            return 'ERROR';
    }
}