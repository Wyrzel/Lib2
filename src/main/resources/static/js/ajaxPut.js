$(document).ready(function() {

    $(document).on('submit', 'form', function (e) {
        event.preventDefault();
        fillDetailsToUpdateForm($(this));

    });

    $("#pickCompany").submit(function(){
        event.preventDefault();
        ajaxPut();
    });

    function fillDetailsToUpdateForm(object){
        var idek = $(object).find("input[name='Id']").val();
        var compName = $(object).find("input[name='name']").val();
        var nip = $(object).find("input[name='age']").val();
        var krs = $(object).find("input[name='street']").val();
        var adres = $(object).find("input[name='adres']").val();
        var email = $(object).find("input[name='email']").val();
        var phone = $(object).find("input[name='phone']").val();


        $("#fillId").val(idek);
        $("#fillName").val(compName);
        $("#fillNip").val(nip);
        $("#fillKrs").val(krs);
        $("#fillAdres").val(adres);
        $("#fillEmail").val(email);
        $("#fillPhone").val(phone);

    }

    /*
     * AJAX PUT updated-form
     */
    function ajaxPut(){
        // PREPARE FORM DATA
        var formData = {
            id: $("#updateFormCustId").val(),
            name : $("#updateFormName").val(),
            age : $("#updateFormAge").val(),
            address : {
                street : $("#updateFormStreet").val(),
                postcode : $("#updateFormPostcode").val()
            }
        }

        var id = $("#updateFormCustId").val();

        console.log("formData before PUT: " + formData);

        // DO PUT
        $.ajax({
            type : "PUT",
            contentType : "application/json",
            url : window.location + "api/customer/update/" + id,
            data : JSON.stringify(formData),
            dataType : 'json',

            // SUCCESS response
            success : function(customer) {
                // Create successful message
                $("#putResultDiv").html("<p style='background-color:#67597E; color:white; padding:20px 20px 20px 20px'>" +
                    "Put Successfully! <br>" +
                    "--> {id: " + customer.id +
                    "name: " + customer.name +
                    ", age: " + customer.age +
                    ", street: " + customer.address.street +
                    ", postcode: " + customer.address.postcode +"}</p>");

                // Again fill data to Update-Form
                $("#updateFormCustId").val(customer.id);
                $("#updateFormName").val(customer.name);
                $("#updateFormAge").val(customer.age);
                $("#updateFormStreet").val(customer.address.street);
                $("#updateFormPostcode").val(customer.address.postcode);

                // Update name of the updated customer on Customer List
                $('#custform_' + customer.id).find("input[name='name']").val(customer.name);
                $('#custform_' + customer.id).find("input[name='age']").val(customer.age);
                $('#custform_' + customer.id).find("input[name='street']").val(customer.address.street);
                $('#custform_' + customer.id).find("input[name='postcode']").val(customer.address.postcode);
            },

            // ERROR response
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
    }
})