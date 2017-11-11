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
}//listener set-up

function first() {
    var employeeName = $('#inputFirstName').val();
    //console.log(employeeName);
    $('#firstName').append('First Name: ', employeeName).val();
}

function last() {
    var employeeLastName = $('#inputLastName').val();
    
    $('#lastName').append('Last Name: ', employeeLastName).val();
}

function identityDevice() {
    var employeeID = $('#inputIDnumber').val();
    
    $('#identNumber').append('Employee ID: ', employeeID).val();
}

function title() {
    var employeeTitle = $('#inputJobTitle').val();
    
    $('#jobTitle').append('Job Title: ', employeeTitle).val();
}

function salary() {
    var employeeSalary = $('#inputAnnualSalary').val();
    
    $('#annSalary').append('Annual Salary: ', employeeSalary).val();
}

function monthlyCost() {
    var total = $('#inputAnnualSalary').val() / 12;
    $('#monthlySalary').append('Monthly Cost: ', Math.round(total)).val();

    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputIDnumber').val('');
    $('#inputJobTitle').val('');
    $('#inputAnnualSalary').val('');
}
