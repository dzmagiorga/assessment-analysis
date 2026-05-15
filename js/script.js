const classesOpenPopup = document.getElementById("classes-open-popup");
const classesPopupContainer = document.getElementById("classes-popup-container");
const classesCancel = document.getElementById("classes-cancel");

classesOpenPopup.addEventListener('click', () => {
    classesPopupContainer.classList.add('show');
})

classesCancel.addEventListener('click', () => {
    classesPopupContainer.classList.remove('show')
})