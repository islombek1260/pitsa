//-------- CUSTOM DOM SELECTOR -------------

const $=function(selector){
    return document.querySelector(selector)
}

const $$=function(selector){
    return document.querySelector(selector)
}

const $$$=function (className) {
    var checkbox = document.getElementsByClassName(className);
    var checkboxChecked = [];
    for (var index = 0; index < checkbox.length; index++) {
        if (checkbox[index].checked) {
            checkboxChecked.push(checkbox[index].value);
        }
    }
    return checkboxChecked

}
