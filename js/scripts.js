$(document).ready(function(){
    $("#blanks form").submit(function() {
        var emailInput = $("input#email").val();
        var passwordInput = $("input#password").val();
        var firstNameInput= $("input#firstName").val();
        var lastNameInput = $("input#lastName").val();
        var addressInput = $("input#address").val();
        var cityInput = $("input#city").val();
        var stateInput = $("input#state").val();
        var zipCodeInput = $("input#zipCode").val();
        // var cityInput = $("input#city").val();
    
        $(".email").text(emailInput);
        $(".password").text(passwordInput);
        $(".firstName").text(firstNameInput);
        $(".lastName").text(lastNameInput);
        $(".address").text(addressInput);
        $(".city").text(cityInput);
        $(".state").text(stateInput);
        $(".zipCode").text(zipCodeInput);
        // $(".noun").text(cityInput);
    
        $("#receipt").show();
        $("#blank").hide();
    
        event.preventDefault();

      });
    });

});

