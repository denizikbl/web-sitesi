
var models = [
    {
        name: 'kentin tarih kokan yerleri',
        image : 'https://www.evrensel.net/images/840/upload/dosya/71086.jpg',
        link : 'https://www.gezilesiyer.com/siirte-yolun-duserse-gezilecek-10-yer.html'

    },
    {
        name: 'kentin tarih kokan evleri',
        image : 'https://www.evrensel.net/images/840/upload/dosya/71086.jpg',
        link : 'https://www.evrensel.net/haber/304185/tarihi-cas-evleri-kaderine-terk-edildi'

    },
    {
        name: 'kentin tarih kokan yerleri',
        image : 'https://www.trthaber.com/resimler/1162000/1163065.jpg',
        link : 'http://www.uyur.com/3912/siirt-cas-evleri'

    },
    {
        name: 'kentin tarih kokan yerleri',
        image : 'https://blog.obilet.com/wp-content/uploads/2019/08/shutterstock_1401100169.jpg',
        link : 'http://www.siirtmanset.com/kultur-sanat/100-yillik-cas-evi-restore-ediliyor-h7884.html'

    },
    {
        name: 'kentin tarih kokan yerleri',
        image : 'https://img1.aksam.com.tr/imgsdisk/2019/08/15/150820191126421552277.jpg',
        link : 'http://www.uyur.com/3912/siirt-cas-evleri'

    },
    
];

var index=2;
var slaytCount=models.length;

var settings={
    duration : '1500',
    random : false
};

init(settings);

showSlide(index);

document.querySelector('.fa-arrow-left').addEventListener('click',function()
{
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-right').addEventListener
('click',function(){
  
    index++;
    showSlide(index);
});

function init(settings){
    var prev;
    setInterval(function(){
        if(settings.random)
        {
            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index==prev)
            prev=index;
            
        }
        else{
            if(slaytCount == index+1)
            {
                index=0;
            }
            showSlide(index);
            index++;

        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i)
{
    index=i;

    if(i<0)
    {
        index=slaytCount-1;
    }

    if(i>5)
    {
        index=0;
    }

    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image) ;

    document.querySelector('.card-link').setAttribute('href',models[index].link);

}


