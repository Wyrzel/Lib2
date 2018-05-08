$(document).ready(function () {

    // DO GET
    $.ajax({
        type: "GET",
        url: "/getCompanyData",
        success: function (result) {
            let companyRow = '';
            $.each(result, function (i, CompanyData) {

                //    var getUrl="/getCompany/"+ CompanyData.id;


                companyRow += '<tr class="rowToSearch">' +
                    '<td class="companyId">' + CompanyData.id + '</td>' +
                    '<td class="companyName">' + CompanyData.companyName + '</td>' +
                    '<td class="companyNip">' + CompanyData.nip + '</td>' +
                    '<td class="companyKrs">' + CompanyData.krs + '</td>' +
                    '<td class="companyAdres">' + CompanyData.adres + '</td>' +
                    '<td class="companyEmail">' + CompanyData.email + '</td>' +
                    '<td class="companyPhone">' + CompanyData.phone + '</td>' +
                    '<td class="text-center">' + '<input type="hidden" value=' + CompanyData.id + '>' +
                    '<a>' + '<span class="glyphicon glyphicon-tasks"></span>' + '</a>' + '</td>' +
                    '</tr>';



            });
            $('#companyTable tbody').append(companyRow);

            $("#companyTable tbody tr:odd").addClass("info");
            $("#companyTable tbody tr:even").addClass("success");

            $('.rowToSearch').on('click', setContent);
        },
        error: function (e) {
            alert("ERROR: ", e);
            console.log("ERROR: ", e);
        }


    });


    // Filtrowanie
    $("#inputFilter").on("keyup", function () {
        var inputValue = $(this).val().toLowerCase();
        $('.rowToSearch').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        });
    });


    function setContent() {

        let componeId = $(this).find('td.companyId').text(),
            componeName = $(this).find('td.companyName').text(),
            componeNip = $(this).find('td.companyNip').text(),
            componeKrs = $(this).find('td.companyKrs').text(),
            componeAdres = $(this).find('td.companyAdres').text(),
            componeEmail = $(this).find('td.companyEmail').text(),
            componePhone = $(this).find('td.companyPhone').text();
        $('#fillId').val(componeId);
        $('#fillCompanyName').val(componeName);
        $('#fillNip').val(componeNip);
        $('#fillKrs').val(componeKrs);
        $('#fillAdres').val(componeAdres);
        $('#fillEmail').val(componeEmail);
        $('#fillPhone').val(componePhone);

      //  console.log("/getCompany/" + componeId);

        $.ajax({
            type: "GET",
            url: "/getCompany/" + componeId,
            dataType: 'json',
            success: function (result) {
                let resultInfoTab = '';
                let cos = result.resultsInfoList;
                $.each(result, function (i, cos) {

                });
                console.log(result);
                console.log(result.resultsInfoList);
            }
        });

    }


});