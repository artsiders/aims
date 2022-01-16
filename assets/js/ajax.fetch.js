let form = document.getElementById("addForm");
let note = document.querySelectorAll(".note");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = new FormData(form)

    fetch("app/controlers/addNote.php", {
        method: 'POST',
        headers: { 'X-Requested-With': 'xmlhttprequest' },
        body: data
    }).then(responce => responce.json()).then(data => {
        alert(data)

        form.title.value = ""
        // form.title.objectif_text = ""
        document.querySelector('.content_form_add_note').classList.add('hide')
    })

})

note.forEach(element => {
    element.addEventListener('click', (e) => {
        let id = e.target.dataset.id;

        fetch(`app/controlers/Controler.php?id=${id}&method=show`, {
            method: 'GET',
            headers: { 'X-Requested-With': 'xmlhttprequest' }
        }).then(responce => responce.json()).then(data => {

            let title = document.getElementById("title")
            let detail = document.getElementById("detail")

            document.querySelector(".content_details_note").classList.remove("hide")

            title.textContent = data.title
            detail.textContent = data.objectif_text
            document.getElementById("btnUpdate").setAttribute("data-id", data.id)
            document.getElementById("btnDelete").setAttribute("data-id", data.id)

        })
    })
});


// document.getElementById("btnUpdate").addEventListener('click', (e) => {
//     e.preventDefault()
//     let id = e.target.dataset.id;
//     document.querySelector(".content_details_note").classList.add("hide")
//     document.querySelector(".content_form_add_note").classList.remove("hide")

//     fetch(`app/controlers/Controler.php?id=${id}&method=update`, {
//         method: 'GET',
//         headers: { 'X-Requested-With': 'xmlhttprequest' }
//     }).then(responce => responce.json()).then(data => {

//     })

// })

document.getElementById("btnDelete").addEventListener('click', (e) => {
    e.preventDefault()
    let id = e.target.dataset.id;
    document.querySelector(".content_details_note").classList.add("hide")

    fetch(`app/controlers/Controler.php?id=${id}&method=delete`, {
        method: 'GET',
        headers: { 'X-Requested-With': 'xmlhttprequest' }
    }).then(responce => responce.json()).then(data => {
        console.log(data)
    })

})