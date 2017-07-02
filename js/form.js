/* global $*/
/* global jQuery*/
var email_correct;
var name_correct;
var text_correct;
var email_correct;
var name_correct;
var text_correct;
$('#form').validate({



    submitHandler: function(form) {
        $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            success: function(response) {
                $('#answers').html(response);
            }            
        });
    }
});




