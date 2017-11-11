console.log('in scipt.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is ready');

$('#submit-button').on('click', first);
$('#submit-button').on('click', last);
$('#submit-button').on('click', identityDevice);
$('#submit-button').on('click', title);
$('#submit-button').on('click', salary);
$('#submit-button').on('click', monthlyCost);
$('#buttonDiv').append('<button id="delete-button">Delete</button>');
$('#delete-button').on('click').remove('#firstName');

}//listener set-up

function first() {
    var employeeName = $('#inputFirstName').val();
    //console.log(employeeName);
    $('#firstName').append('<li>' + 'First Name: ' + employeeName + '</li>').val();
}

function last() {
    var employeeLastName = $('#inputLastName').val();
    
    $('#lastName').append('<li>' + 'Last Name: ' + employeeLastName + '</li>').val();
}

function identityDevice() {
    var employeeID = $('#inputIDnumber').val();
    
    $('#identNumber').append('<li>' + 'Employee ID: ' + employeeID + '</li>').val();
}

function title() {
    var employeeTitle = $('#inputJobTitle').val();
    
    $('#jobTitle').append('<li>' + 'Job Title: ' + employeeTitle + '</li>').val();
}

function salary() {
    var employeeSalary = $('#inputAnnualSalary').val();
    
    $('#annSalary').append('<li>' + 'Annual Salary: ' + employeeSalary + '</li>').val();
}

function monthlyCost() {
    var total = $('#inputAnnualSalary' + '#inputAnnualSalary').val() / 12;
    $('#monthlySalary').html('<li>' + 'Monthly Cost: ' + Math.round(total) + '</li>').val();

    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputIDnumber').val('');
    $('#inputJobTitle').val('');
    $('#inputAnnualSalary').val('');
   
}

// $('#delete-button').click(function() {
//     $('#firstName').remove();
// });

