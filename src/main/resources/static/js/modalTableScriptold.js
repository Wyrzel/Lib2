$(document).ready(function() {

    // DO GET
    $.ajax({
        type : "GET",
        url : "/getCompanyData",
        success: function(result){
            $.each(result, function(i, CompanyData){


                var companyRow = '<tr class="rowToSearch">' +
                    '<td>' + CompanyData.id + '</td>' +
                    '<td>' + CompanyData.companyName + '</td>' +
                    '<td>' + CompanyData.nip + '</td>' +
                    '<td>' + CompanyData.krs + '</td>' +
                    '<td>' + CompanyData.adres + '</td>' +
                    '<td>' + CompanyData.email + '</td>' +
                    '<td>' + CompanyData.phone + '</td>' +
                    '</tr>';

                $('#companyTable tbody').append(companyRow);
                $('.rowToSearch').on('click',function(e){
                   let componeName = 'dasdas';
                   $('#fillFieldName').val(componeName);
                });
            });

            $( "#companyTable tbody tr:odd" ).addClass("info");
            $( "#companyTable tbody tr:even" ).addClass("success");
        },
        error : function(e) {
            alert("ERROR: ", e);
            console.log("ERROR: ", e);
        }
    });

    // do Filter on View
    $("#inputFilter").on("keyup", function() {
        var inputValue = $(this).val().toLowerCase();
        $("#companyTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        });
    });
})