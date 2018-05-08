$(document).ready(function () {

    // SUBMIT FORM
    $("#saveForm").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });


    function ajaxPost() {

        // PREPARE FORM DATA
        var formData = {
            companyName: $("#saveCompanyName").val(),
            nip: $("#saveNip").val(),
            krs: $("#saveKrs").val(),
            adres: $("#saveAdres").val(),
            email: $("#saveEmail").val(),
            phone: $("#savePhone").val()
        };

        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url:"/save",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {
                if (result.status == "Done") {
                    $("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +
                        "Dodano poprawnie!</p>" ).fadeIn(500).delay(1000).fadeOut(500);
                } else {
                    $("#postResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);

            },
            error: function (e) {
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

        // Reset FormData after Posting
        resetData();

    }

    function resetData() {

        $("#saveCompanyName").val("");
        $("#saveNip").val("");
        $("#saveKrs").val("");
        $("#saveAdres").val("");
        $("#saveEmail").val("");
        $("#savePhone").val("");
    }
});