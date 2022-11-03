// "use strict";


// ======================================================================================
// ===================== OBYEKT PITSA ====================================================

var pitsa = new Object()
    hamirTuri = undefined;
    kottaligi = undefined;
    ustiga = undefined; 
    qoshimchalar = undefined;

// ======================================================================================
// ===================== TOGGLE MENU ====================================================
    
let elMenuBtn = document.querySelector(".menu-btn")
let elSiteNav = document.querySelector(".site-nav__list")

elMenuBtn.addEventListener('click', function(){
    elSiteNav.classList.toggle("active")
})

// =====================================================================================
// ==================== HAMIR TURI =====================================================

$(".form-select").addEventListener("change", (e) => {
    e.target.value;
    $(".check_input_label").addEventListener
    $(".yupqa").innerHTML = e.target.value;
    pitsa.hamirTuri = e.target.value;
})

// =====================================================================================
// ===================== KOTTALIGI =====================================================

$('#kottaliglari').addEventListener("change", (e) =>{
    e.target.value; 
    $(".sm25").innerHTML = e.target.value;
    pitsa.kottaligi = e.target.value;
})

// =====================================================================================
// ===================== USTIGA ========================================================

function e1(){
    var checkbox = $('.ustiga');
    var checkboxChecked = [];
    for (var index = 0; index < checkbox.length; index++) {
        if (checkbox[index].checked) {
            checkboxChecked.push(checkbox[index].value);
            $(".pomidor").innerHTML = checkboxChecked; 
        }
    }
    pitsa.ustiga = checkboxChecked;
}

// =====================================================================================
// ===================== QO'SGIMCHA ====================================================

function e2(){
    var checkbox = $('.qoshimchalar');
    var checkboxChecked = [];
    for (var index = 0; index < checkbox.length; index++) {
        if (checkbox[index].checked) {
            checkboxChecked.push(checkbox[index].value);   
        }
    }
    pitsa.qoshimchalar = checkboxChecked;
    $(".achchiq").innerHTML = pitsa.qoshimchalar;
}

// ======================================================================================
// ===================== BUYURTMA BERISH ================================================

function zakaz(){
    switch(undefined){
        case pitsa.hamirTuri:
            $('.modal-body').innerHTML=`<span class="pi">Ma'lumot yetarli emas!!!</span>
            <img class="modal-img" src="../images/images.png" alt="warning">`;
            break;
        case pitsa.kottaligi:
            $('.modal-body').innerHTML=`<span class="pi">Ma'lumot yetarli emas!!!</span>
            <img class="modal-img" src="../images/images.png" alt="warning">`;
            break
        case pitsa.ustiga:
            $('.modal-body').innerHTML=`<span class="pi">Ma'lumot yetarli emas!!!</span>
            <img class="modal-img" src="../images/images.png" alt="warning">`;
            break;
        case pitsa.qoshimchalar:
            $('.modal-body').innerHTML=`<span class="pi">Ma'lumot yetarli emas!!!</span>
            <img class="modal-img" src="../images/images.png" alt="warning">`;
            break;
        default:
            $('.modal-body').innerHTML=`<span class="pi">Buyurtmangiz qabul qilindi</span>
            <img class="modal-img" src="../images/checked.png" alt="sucses">`;
    }

}

// ======================================================================================
// ===================== MODAL OYNA =====================================================

// Get modal element
var modal = $('#simpleModal');
// Get open modal button
var modalBtn = $('#modalBtn');
// Get close modal button
var closeBtn = $('#closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}










