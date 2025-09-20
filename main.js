const endpoint = "http://192.168.1.45";

function getSatuLED(){
    fetch(endpoint + "/satu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledSatu.style.backgroundColor = "#7b68ee";
            ledSatuImage.src = "./assets/led_on.png";
            ledSatu.innerText = "TURN OFF";
        } else{
            ledSatu.style.backgroundColor = "red";
            ledSatuImage.src = "./assets/led-off.png";
            ledSatu.innerText = "TURN ON";
        }
    } );
}

function getDuaLED(){
    fetch(endpoint + "/dua", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledDua.style.backgroundColor = "#7b68ee";
            ledDuaImage.src = "./assets/led_on.png";
            ledDua.innerText = "TURN OFF";
        } else{
            ledDua.style.backgroundColor = "red";
            ledDuaImage.src = "./assets/led-off.png";
            ledDua.innerText = "TURN ON";
        }
    } );
}

function getTigaLED(){
    fetch(endpoint + "/tiga", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledTiga.style.backgroundColor = "#7b68ee";
            ledTigaImage.src = "./assets/led_on.png";
            ledTiga.innerText = "TURN OFF";
        } else{ 
            ledTiga.style.backgroundColor = "red";
            ledTigaImage.src = "./assets/led-off.png";
            ledTiga.innerText = "TURN ON";
        }
    } );
}

function getEmpatLED(){
    fetch(endpoint + "/empat", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledEmpat.style.backgroundColor = "#7b68ee";
            ledEmpatImage.src = "./assets/led_on.png";
            ledEmpat.innerText = "TURN OFF";
        } else{ 
            ledEmpat.style.backgroundColor = "red";
            ledEmpatImage.src = "./assets/led-off.png";
            ledEmpat.innerText = "TURN ON";
        }
    } );
}

function set1LED(){
    fetch(endpoint + "/satu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function set2LED(){
    fetch(endpoint + "/dua", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function set3LED(){
    fetch(endpoint + "/tiga", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function set4LED(){
    fetch(endpoint + "/empat", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getSatuLED();
getDuaLED();
getTigaLED();
getEmpatLED();