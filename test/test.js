let form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = new FormData(form)

    fetch("traitement.php", {
        method: 'POST',
        headers: { 'X-Requested-With': 'xmlhttprequest' },
        body: data
    }).then(responce => responce.json()).then(data => {
        console.log(data.nom)
    })

})
// let form = document.getElementById("form");

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let data = new FormData(form)

//     fetch("traitement.php", {
//         method: 'POST',
//         headers: { 'X-Requested-With': 'xmlhttprequest' },
//         body: data
//     }).then(function (responce) {
//         return responce.json()
//     }).then(function (data) {
//         console.log(data.nom)
//     })

// })
