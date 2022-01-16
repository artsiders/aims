function noteDetail() {
    $(".note").click((e) => {
        e.preventDefault();
        // generation de l'url a envoyer au serveur
        var postData = "idNote=" + e.target.dataset.id;
        // generation de la variable de test
        var postVerify = e.target.dataset.id;
        console.log(e.target.dataset.id);
        document.querySelector('.content_details_note').classList.remove('hide')

        if (!isNaN(parseFloat(postVerify))) {
            // affiche la fenetre

            // requete assinchrone au server (ajax)
            // $.ajax({
            //     type: 'GET',
            //     url: location.origin + "/site-location-mvc/app/models/houseDetails.php",
            //     data: postData,
            //     dataType: 'json',
            //     success: (result) => {
            //         // console.log(result);
            //         var date = document.getElementById("date");
            //         var categorie = document.getElementById("categorie");
            //         var city = document.getElementById("city");
            //         var price = document.getElementById("price");
            //         var checkStatue = document.querySelector(".checkStatue");
            //         var housePicture = document.querySelector(".housePicture");
            //         var autherPicture = document.querySelector(".autherPicture");

            //         var checkWater = document.querySelector(".checkWater");
            //         var checkElectricity = document.querySelector(".checkElectricity");
            //         var checkStatue = document.querySelector(".checkStatue");

            //         const assets = location.origin + "/site-location-mvc/assets";


            //         date.textContent = result.add_date;
            //         categorie.textContent = result.categorie;
            //         city.textContent = result.city;
            //         price.textContent = result.price;
            //         checkStatue.textContent = result.statue;

            //         housePicture.innerHTML = `<img src="` + assets + `/images/${result.photoHouse1}">`

            //         autherPicture.innerHTML = `
            // 			<img src="` + assets + `/images/${result.photoHouse1}">
            // 			<img src="` + assets + `/images/${result.photoHouse2}">
            // 			<img src="` + assets + `/images/${result.photoHouse3}">
            // 			<img src="` + assets + `/images/${result.photoHouse4}">

            // 		`;

            //         if (result.water == 1) {
            //             checkWater.style.background = "var(--success)";
            //         } else {
            //             checkWater.style.background = "var(--secondary)";
            //         }

            //         if (result.electricity == 1) {
            //             checkElectricity.style.background = "var(--success)";
            //         } else {
            //             checkElectricity.style.background = "var(--secondary)";
            //         }

            //         if (result.statue == "disponible") {
            //             checkStatue.style.background = "var(--success)";
            //         } else {
            //             checkStatue.style.background = "var(--secondary)";
            //         }
            //     }
            // });
        }
    });
}

function registerAjax() {

    $("#registerForm").submit((e) => {
        e.preventDefault();
        // on serialise les données du formulaire
        var postData = $("#registerForm").serialize();

        //requete assinchrone au server (ajax)
        $.ajax({
            type: 'POST',
            url: location.origin + "/site-location-mvc/app/controlers/registerProcess.php",
            data: postData,
            dataType: 'json',
            success: (result) => {

                // console.log(result);
                var firstName = document.querySelector("#firstName");
                var lastName = document.querySelector("#lastName");
                var email = document.querySelector("#email");
                var pass = document.querySelector("#pass");
                var tel = document.querySelector("#tel");

                if (result.inputFirstName) {
                    firstName.classList.remove("inputError");
                    firstName.classList.add("inputSuccess");
                }
                if (!result.inputFirstName) {
                    firstName.classList.add("inputError");
                    firstName.classList.remove("inputSuccess");
                }

                if (result.inputLastName) {
                    lastName.classList.remove("inputError");
                    lastName.classList.add("inputSuccess");
                }
                if (!result.inputLastName) {
                    lastName.classList.add("inputError");
                    lastName.classList.remove("inputSuccess");
                }

                if (result.inputEmail) {
                    email.classList.remove("inputError");
                    email.classList.add("inputSuccess");
                }
                if (!result.inputEmail) {
                    email.classList.add("inputError");
                    email.classList.remove("inputSuccess");
                }

                if (result.inputPass) {
                    pass.classList.remove("inputError");
                    pass.classList.add("inputSuccess");
                }
                if (!result.inputPass) {
                    pass.classList.add("inputError");
                    pass.classList.remove("inputSuccess");
                }

                if (result.inputTel) {
                    tel.classList.remove("inputError");
                    tel.classList.add("inputSuccess");
                }
                if (!result.inputTel) {
                    tel.classList.add("inputError");
                    tel.classList.remove("inputSuccess");
                }

                if (result.isOk) {
                    location.assign("./login");
                }


                if (result.msg != "") {
                    document.querySelector("#boxMsg").innerHTML = result.msg;
                    document.querySelector("#boxMsg").style.display = "block";
                    document.querySelector("#bulle").style.pointerEvents = "none";
                    document.querySelector("#bulle").style.background = "var(--danger)";
                    document.querySelector("#bulle").classList.add("bulleHover");

                    setTimeout(() => {
                        document.querySelector("#boxMsg").style.display = "none";
                        document.querySelector("#bulle").classList.remove("bulleHover");
                        document.querySelector("#bulle").style.pointerEvents = "all";

                    }, 4000);
                } else {
                    document.querySelector("#boxMsg").style.display = "none";
                    document.querySelector("#bulle").classList.remove("bulleHover");
                }

                //     if(result.isOk){
                //         location.assign("index.php?action=home");
                //     }
            }
        });
    });
}
