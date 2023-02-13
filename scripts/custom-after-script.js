// Get the button
let mybuttontop = document.getElementById("myBtnTop");
let mybuttonmenu = document.getElementById("myBtnMenu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop >70) {
        mybuttontop.style.display = "block";
        mybuttonmenu.style.display = "block";
    } else {
        mybuttontop.style.display = "none";
        mybuttonmenu.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}