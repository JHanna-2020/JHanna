
function myFunction() {
  var x = document.getElementById("bookForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clear() {
    document.getElementById("bookTitleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("authorInput").value = "";
    }
function load() {
  document.getElementById("bookForm").style.display === "none";
}

var arr = new Array();
function addBook() {
  getBook();
  arr.push({
    bookTitleInput: document.getElementById("bookTitleInput").value,
    authorInput: document.getElementById("authorInput").value,
    genreSelect: document.getElementById("genreSelect").value,
  });
  localStorage.setItem("Book Title", JSON.stringify(arr));
}

function getBook() {
  var str = localStorage.getItem("Book Title");
  if (str != null) {
    arr = JSON.parse(str);
  }
}

  
function updateTable() {
    getBook();
  var displayInTable = document.getElementById("table");

  var x= displayInTable.rows.length;
  while(--x){
      displayInTable.deleteRow(x);
  }
 
  for (i = 0; i < arr.length; i++) {
    var title = document.getElementById("bookTitleInput").value;
    var author = document.getElementById("authorInput").value;
    var genre = document.getElementById("genreSelect").value;
    var row = 1;
    var newRow = displayInTable.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = arr[i].bookTitleInput;
    cell2.innerHTML = arr[i].authorInput;
    cell3.innerHTML = arr[i].genreSelect;
  }
}
//book notes part of website 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {};
xhr.open('GET', 'http://www.google.com');
xhr.send()
