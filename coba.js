var tanggal; // isi dengan angka berapapun

if (tanggal==11) {
    alert("Pergi main")
} else {
    alert("AYAM")
}

var uang = 10000;
var lapar = true;

if (lapar && uang > 50000) {
    alert("KFC")
} else if(lapar && uang < 50000){
    alert("Indomie")
} else if(!lapar){
    alert("Tidur")
}

var count=0;
while(count<10){
    console.log(count);
    count = count + 1;
    
}
for (var count = 0; count < 10; count++) {
    console.log(count)
    alert(count);
}
