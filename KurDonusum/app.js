 document.getElementById('change').addEventListener('click', change);

 function change() {

     const xhr = new XMLHttpRequest();
     xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=b4d049609ac1d30f78cb1ebac629a5b8&format=1");
     xhr.onload = function() {

         if (this.status == 200) {

             const response = JSON.parse(this.responseText);
             const rate = response.rates.TRY
             const amount = Number(document.getElementById('amount').value);
             document.getElementById('tl').value = (rate * amount).toFixed(2);



         }

     }



     xhr.send();
 }