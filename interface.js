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

//Admin Only, these ones need to interact with textareas and the id's

function put(id) {
    let PreQuote = document.getElementById("text" + id).value;
    let Quote = PreQuote.replace(/'/g,'');
    xhttp.open("PUT", endPointRoot + "edit/" + id + "&" + Quote + "", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            getAll();
        }
    };
}

function Post() {
    resource = "input/";
    quote = '"Logic is the beginning of wisdom, not the end" -Spock';
    xhttp.open("POST", endPointRoot + resource + quote + "", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 ) {
            alert(this.responseText);
            getAll();
        }
    };
}


function del(id) {
    resource = "select/"
    xhttp.open("DELETE", endPointRoot + resource + id, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            getAll();
        }
    }
}



///This is where the HTML Creation happens
function parsinate(obj){
    var out = "";
    var i;
    for(i = 0; i < obj.length; i++) {
        out += '<div' + ' id=' + obj[i].Id + ' class=card> ' + '<textarea id=text' + obj[i].Id + ' rows=7 cols=75>' +
        obj[i].Question + '</textarea>' + '<button type="button" class="myButton" onclick="put('+ obj[i].Id + ')">Update</button>' +
        '<button type="button" class="myButton" onclick="del('+ obj[i].Id +')">Delete</button></div><br>';
  }
  document.getElementById("demo").innerHTML = out;
}