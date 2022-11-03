var pitsa = new Object()
    hamirTuri = undefined;
    kottaligi = undefined;
    ustiga = undefined;
    qoshimchalar = undefined;

    

function getValue() {
    var select = $("#hamirTuri");
    var value = select.options[select.selectedIndex].value;
    pitsa.hamirTuri = value;
    if(value=='yupqa'){
        $('.yupqa').classList.add('active');
        $('.qalin').classList.remove('active');
        $('.hot-dog').classList.remove('active');
    }else if(value=='qalin'){
        $('.yupqa').classList.remove('active');
        $('.qalin').classList.add('active');
        $('.hot-dog').classList.remove('active');
    }else{
        $('.yupqa').classList.remove('active');
        $('.qalin').classList.remove('active');
        $('.hot-dog').classList.add('active');
    }


    var kottaliglari = $('input[name="kottaligi"]:checked').value;
    pitsa.kottaligi = kottaliglari;
    if(kottaliglari=='25sm'){
        $('.sm25').classList.add('active');
        $('.sm30').classList.remove('active');
        $('.sm35').classList.remove('active');
    }else if(kottaliglari=='30sm'){
        $('.sm25').classList.remove('active');
        $('.sm30').classList.add('active');
        $('.sm35').classList.remove('active');
    }else{
        $('.sm25').classList.remove('active');
        $('.sm30').classList.remove('active');
        $('.sm35').classList.add('active');
        console.log(kottaliglari)
    }


    pitsa.ustiga = $$$('ustiga__input');
    if(pitsa.ustiga=='Pomidor'){
        $('.pomidor').classList.add('active');
    }else{
        $('.pomidor').classList.remove('active');
    }

    if(pitsa.ustiga=='Kurka goshti'){
        $('.kurka-gushti').classList.add('active');
    }else{
        $('.kurka-gushti').classList.remove('active');
    }

    if(pitsa.ustiga=='zaytun'){
        $('.zaytun').classList.add('active');
    }else{
        $('.zaytun').classList.remove('active');
    }

    if(pitsa.ustiga=='Tuzlangan bodring'){
        $('.tuzlangan-bodring').classList.add('active');
    }else{
        $('.tuzlangan-bodring').classList.remove('active');
    }
    
    if(pitsa.ustiga=='Qoziqorin'){
        $('.qoziqorin').classList.add('active');
    }else{
        $('.qoziqorin').classList.remove('active');
    }
    
    if(pitsa.ustiga=='Qazi'){
        $('.qazi').classList.add('active');
    }else{
        $('.qazi').classList.remove('active');
    }
}

    pitsa.qoshimchalar = $$$('qoshimcha__input');
    console,console.log(pitsa);



