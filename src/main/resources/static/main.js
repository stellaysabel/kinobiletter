let tickets = [];

// Define the validateEmail function
function validateEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
    // Regular expression to match exactly 8 digits
    var regex = /^\d{8}$/;
    return regex.test(phone);
}
function buyTickets() {
    let selectedMovie = document.getElementById("movies").value;
    let selectedAmount = document.getElementById("amount").value;
    let selectFirstName = document.getElementById("firstname").value;
    let selectedLastName = document.getElementById("surname").value;
    let selectedEmail = document.getElementById("email").value;
    let selectedPhoneNumber = document.getElementById("phonenumber").value;

    const ticket = {
        movie: selectedMovie,
        quantity: selectedAmount,
        firstName: selectFirstName,
        lastName: selectedLastName,
        email: selectedEmail,
        phoneNumber: selectedPhoneNumber
    };

    let errorsFound = 0;

    if (ticket.movie === '') {
        $('#movieDiv').addClass('error');
        $('#movieDiv .errorText').html('Please choose a movie');
        errorsFound++;
    } else {
        $('#movieDiv').removeClass('error');
        $('#movieDiv .errorText').html('');
    }

    // Input validation
    if (ticket.quantity < 1) {
        $('#amountDiv .errorText').html('Please enter quantity higher than 0');
        $('#amountDiv').addClass('error');
        errorsFound++;
    } else {
        $('#amountDiv .errorText').html('');
        $('#amountDiv').removeClass('error');
    }
    if (ticket.firstName === "") {
        $('#firstnameDiv .errorText').html('Please enter first name');
        $('#firstnameDiv').addClass('error');
        errorsFound++;
    } else {
        $('#firstnameDiv .errorText').html('');
        $('#firstnameDiv').removeClass('error');
    }
    if (ticket.lastName === "") {
        $('#surnameDiv .errorText').html('Please enter last name');
        $('#surnameDiv').addClass('error');
        errorsFound++;
    } else {
        $('#surnameDiv .errorText').html('');
        $('#surnameDiv').removeClass('error');
    }
    if (ticket.phoneNumber === "") {
        $('#phonenumberDiv .errorText').html('Please enter phone number');
        $('#phonenumberDiv').addClass('error');
        errorsFound++;
    } else if ( ! validatePhoneNumber(ticket.phoneNumber ) ) {
            $('#phonenumberDiv .errorText').html('Please enter 8-digit phone number');
            $('#phonenumberDiv').addClass('error');
            errorsFound++;
    } else {
        $('#phonenumberDiv .errorText').html('');
        $('#phonenumberDiv').removeClass('error');
    }
    if (ticket.email === "") {
        $('#emailDiv .errorText').html('Please enter email address');
        $('#emailDiv').addClass('error');
        errorsFound++;
    } else if ( ! validateEmail(ticket.email) ) {
        $('#emailDiv .errorText').html('Please enter a valid email address');
        $('#emailDiv').addClass('error');
        errorsFound++;
    } else {
        $('#emailDiv .errorText').html('');
        $('#emailDiv').removeClass('error');
    }

    // Continue if no errors
    if (errorsFound > 0) {
        return;
    }

    tickets.push(ticket);

    displayTickets(); // Call the function to display tickets

    document.getElementById("movies").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("email").value = "";
}

function displayTickets() {
    let output = "";
    for (let i = 0; i < tickets.length; i++) {
        output+= tickets[i].movie + " " + tickets[i].amount + " " + tickets[i].firstName +
            " " + tickets[i].lastName + " " + tickets[i].phoneNumber + " " + tickets[i].email;
    }
    document.getElementById("output").innerHTML = output;
}

function deleteTicket() {
    tickets = [];
    console.log(tickets);
    displayTickets();
}