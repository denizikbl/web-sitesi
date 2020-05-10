function adKontrol() {
    let kullaniciAdi = document.getElementById('frm').kulAdi.value;
    if(document.getElementById('frm').kulAdi.value==""){
        document.getElementById('ad').placeholder= "Lütfen Kullanıcı Adınızı Giriniz";
    }
    if(kullaniciAdi.includes('@')==false || kullaniciAdi != "") {
        document.getElementById('ad').placeholder = "Kullanıcı Adı Kısmına Mailinizi Giriniz";
        
    }
}

function sifreKontrol() {
    let sifre = document.getElementById('frm').sifre.value;
    if(sifre=="") {
        document.getElementById('sifre').placeholder= "Lütfen Şifrenizi Giriniz";
    }
}