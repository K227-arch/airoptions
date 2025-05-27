function after_form_submitted(data) 
{
    if (data.result == 'success') {
        $('#success_message').show();
        $('#error_message').hide();

        // Wait 2 seconds, then refresh
        setTimeout(function () {
            location.reload();
        }, 2000);
    } else {
        $('#error_message').html('<ul></ul>');
        jQuery.each(data.errors, function (key, val) {
            $('#error_message ul').append('<li>' + key + ': ' + val + '</li>');
        });
        $('#success_message').hide();
        $('#error_message').show();
    }
}

