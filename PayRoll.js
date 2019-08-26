var addButton= document.querySelector(".AddButton")
var templateSource = document.querySelector(".userTemplate").innerHTML;
var dailyrate= document.querySelector(".emp_work_Rate");
var daysworked= document.querySelector(".no_days");
var firstnames = document.querySelector(".fname")
var userTemplate = Handlebars.compile(templateSource);

var userDataElem = document.querySelector(".userData");



function jason(){

    var payrolls =  PayRollFactory(firstnames.value);

    // compile the templatefirstnames.value
    var userDataHTML = userTemplate({


        firstName :  firstnames.value,

        BasicSalary : 'R' + payrolls.calculateRate(dailyrate.value , daysworked.value)
    });
    userDataElem.innerHTML = userDataHTML;
    
    }
    addButton.addEventListener("click", jason)