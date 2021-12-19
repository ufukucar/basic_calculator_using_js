
var result = document.querySelector('#result');


var sonuc = "";

const btnDisplay = (par) => {
    
    if ( sonuc != "" ) {
        result.value = sonuc;
        result.value += par;
        console.log("sonuc: ", result.value);
        sonuc = "";
    }
    else {
        
        result.value += par;
    }
        
 
  
}

const hesapla = () => {

    sonuc = eval(result.value)
    result.value += " = " + sonuc
  
}

const clearResult = () => {
    sonuc = "";
    result.value = "";
}