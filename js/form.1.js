/* global $*/
var email_correct;
var name_correct;
var text_correct;
var email_correct;
var name_correct;
var text_correct;

jQuery('input[id=contactEmail]').
on('input keyup cut paste blur',
    check_email);

jQuery('input[id=contactName]').
on('input keyup cut paste blur',
    check_name);

jQuery('textarea[id=contactMessage]').
on('input keyup cut paste blur',
    check_text);

function check_email() {
    var adress = document.getElementById("contactEmail").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!adress) {
        document.getElementById("email_flag").src = "required.gif";
        email_correct = false;
    }
    else if (re.test(adress)) {
        document.getElementById("email_flag").src = "yes.gif";
        email_correct = true;
    }
    else {
        document.getElementById("email_flag").src = "no.gif";
        email_correct = false;
    }
    activate_submit();
};

function check_name() {
    var name = document.getElementById("contactName").value;
    var re = /^[а-яіїєґА-ЯІЇЄҐ'`a-zA-Z][^\s@]{0,20}$/;

    if (!name) {
        document.getElementById("name_flag").src = "required.gif";
        name_correct = false;
    }
    else if (re.test(name)) {
        document.getElementById("name_flag").src = "yes.gif";
        name_correct = true;
    }
    else {
        document.getElementById("name_flag").src = "no.gif";
        name_correct = false;
    }
    activate_submit();
};

function check_text() {
    var text = document.getElementById("contactMessage").value;
    var re = /^((.|\n)*)$/;

    if (text.length < 1) {
        document.getElementById("text_flag").src = "required.gif";
        text_correct = false;
    }
    else if (re.test(text) && text.length <= 500) {
        document.getElementById("text_flag").src = "yes.gif";
        text_correct = true;
    }
    else {
        document.getElementById("text_flag").src = "no.gif";
        text_correct = false;
    }
    activate_submit();
};

function activate_submit() {
    if (email_correct && name_correct && text_correct) {
        document.getElementById("btn-submit").disabled = true;
        
        
        
    }
    else {
        document.getElementById("btn-submit").disabled = false;
    }
    console.log("email: ", email_correct);
    console.log("name: ", name_correct);
    console.log("text: ", text_correct);
    console.log("-");
};


        $(function() {
            $('#btn-submit').click(function(e) {
                e.preventDefault();
                //next code find in https://formspree.io/ > ctrl+f > $ > copy and modificate
                $.ajax({
                    url: "https://formspree.io/reversx@gmail.com",
                    method: "POST",
                    data: {
                        name: $('#contactName').val(),
                        email: $('#contactEmail').val(), // if put "," add new dani to data and send 
                        subject: $('#contactSubject').val(),
                        Message: $('#contactMessage').val()
                    },

                    dataType: "json"
                }).done(function() { //dlya perevirky ch vidpravyvsya zapyt
                    $('form').html('<h1>Thanks you mail send</h1>');
                })
            });
        });
