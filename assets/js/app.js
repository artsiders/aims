// noteDetail()

document.getElementById("btnClose2").addEventListener("click", () => {
    document.querySelector('.content_form_add_note').classList.add('hide')
})

document.getElementById("btnClose").addEventListener("click", () => {
    document.querySelector('.content_details_note').classList.add('hide')
})

document.getElementById("btnAdd").addEventListener("click", () => {
    document.querySelector('.content_form_add_note').classList.toggle('hide')
})

// const sr = ScrollReveal();

// sr.reveal(".note", {
//     origin: 'top',
//     distance: '50px',
//     duration: 1000
// });