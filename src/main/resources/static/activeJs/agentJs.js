$(document).ready( function () {
    $('#submit').on('click', function(){
        saveData();
    });
});

function saveData(){
    var url = "/agent/add";

    var resp = document.getElementById("message");

    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
//    var gender = document.getElementById('sex');
//    var genderValue = gender.options[gender.selectedIndex].value;
    var bank = document.getElementById('bank');
    var bankValue = bank.options[bank.selectedIndex].value;
    var accountName = document.getElementById('accountName').value;
    var accountNumber = document.getElementById('accountNumber').value;

    var state = document.getElementById('state');
    var stateValue = state.options[state.selectedIndex].value;

    var lg = document.getElementById('lg');
    var lgValue = lg.options[lg.selectedIndex].value;

    var address = document.getElementById('address').value;

    var data = {
        "fname" : fname,
        "lname" : lname,
        "email": email,
        "phone": phone,
        "accountName" : accountName,
        "accountNumber" : accountNumber,
        "state": stateValue,
        "lg": lgValue,
        "address": address,
        "bank": bankValue
    };

    console.log(data);

    $.ajax({
        url: url,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        processData: false,

        success: function( data, textStatus, jQxhr ){
            console.log(data);

            swal({
              title: "Success!",
              text: "Agent Registration Successful",
              icon: "success",
            }).then((value) => {
                location.reload();
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
            console.log(textStatus);

            swal({
              title: "Failed!",
              text: "Agent Registration Failed",
              icon: "error",
            });
        }
    });
}


