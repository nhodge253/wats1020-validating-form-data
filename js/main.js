/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
$(document).on('ready', function() {
// 2. Define a validation object for use on your page.
//This first validation object calls for letters and spaces only and returns a custom message.
jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Your real name, not your rap name.  Only alphabetical characters.");

//This validation object makes only US states accepted for the answer to 'your-state' and returns a custom message.
jQuery.validator.addMethod("isstate", function(value) {
    var states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
}, "That's not even a real state.");
//This object validates zip codes and returns a custom message.
jQuery.validator.addMethod("zipcode", function(value, element) {
  return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
}, "Use a real zip code or the cat gets it.");
  // 3. Connect the validation object to an event handler tied to the submit button.
$( "#order-form" ).validate({
  submitHandler: function(form){
    form.submit();
  },

  rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                lettersonly: true
            },

            "your-address": {
                required: true,
                maxlength: 500
            },

            "your-state": {
                required: true,
                maxlength: 2,
                minlength: 2,
                isstate: true
            },
            "your-zip": {
                required: true,
                zipcode: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128,
                lettersonly: true
            },
            "card-number": {
                required: true,
                creditcard: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                minlength: 3,
                digits: true
            },
            "expiry-month": {
                required: true,
            },

            "expiry-year": {
                required: true,
            },

            "shipping-method": {
                required: true,
            },
        }
});
  $('label span.glyphicon').tooltip();
});
