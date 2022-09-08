let namaDepan = prompt("Nama Depan : ");
let namaBelakang = prompt("Nama Belakang :");

function greeting() {
  return (
    "Selamat datang Tuan/Nyonya" +
    " " +
    namaDepan +
    " " +
    namaBelakang +
    " di Micheal's Bakery"
  );
}

alert(greeting());

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
  }  

