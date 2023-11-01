let btnMenu = document.getElementById('btn-menu'); 
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});


menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Gerar PDF 
function downloadPDF() {
    const item = document.querySelector(".content");

    var opt = {
        margin: [10, 10, 10, 10],
        filename: "CV_TawanaGalvao",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(item).save();
}