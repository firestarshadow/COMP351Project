const xhttp = new XMLHttpRequest();
const endPointRoot = "https://sunsetonthewater.ca/DBLink/API/v1/";
let resource = "";



function getAll() {
    resource = "select/";
    xhttp.open("GET", endPointRoot + resource, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            parsinate(obj);
        }
    };
}

function getOne() {
    let id="1";
    resource = "select/";
    xhttp.open("GET", endPointRoot + resource + id, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            parsinate(obj);
            //document.getElementById("demo").innerHTML =
            //    obj;
        }
    };
}


///This is where the HTML Creation happens


  


//buildBox takes in an id from database and contents from database then adds them to a text area
function parsinate(obj){
    var out = "";
    var i;
    for(i = 0; i < obj.length; i++) {
        out += '<div' + ' id=' + obj[i].Id + ' class=card>' +
        obj[i].Question + '</div><br>';
  }
  document.getElementById("demo").innerHTML = out;
}
