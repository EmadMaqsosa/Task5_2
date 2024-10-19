 const btnConvert = document.querySelector('.btn_convert');
 function convert() {
            const value = parseFloat(document.getElementById('value').value);
            const fromUnit = document.querySelector('.con_from').value;
            const toUnit = document.querySelector('.con_to').value;

            const convert = {
              cm:0.01,
                m: 1,
                km: 1000
            };
            
            const resultValue = value * convert[fromUnit] / convert[toUnit];
            document.getElementById('result').innerText = resultValue.toFixed(1)+''+toUnit;
        }