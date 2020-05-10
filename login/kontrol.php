<?php

$kullaniciAdi = "B181210041@sakarya.edu.tr";
$sifre  = "123";

if($sifre == $_POST["sifre"] && $kullaniciAdi == $_POST["kulAdi"]) {
    echo "Hoşgeldiniz B181210041 <br> DENİZ İKBAL SAYLIK";
}
else {
    header ("Location:login.html");
}



?>