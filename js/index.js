/*--------------------------------------------------------------------------------
## Js -> Index Js
--------------------------------------------------------------------------------*/ 

// Nav Toggle code start
window.addEventListener('scroll', function () {
    var element = document.getElementById('myElement');
    if (window.pageYOffset > 0) {
        element.classList.add('scrolled');
    } else {
        element.classList.remove('scrolled');
    }
});
// Nav Toggle code End


// modal Box Code Start
function modalOpen(id) {
    new bootstrap.modal(document.getElementById(id), {}).show();
}
modalOpen("examplemodalToggle");

function modalClose(id) {
    const modal = bootstrap.modal.getInstance(document.getElementById(id));
    modal.hide();
}
// modal Box Code End


