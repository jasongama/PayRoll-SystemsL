function PayRollFactory(name) {

    var payRoll = [];
    console.log(name);
    

    function storeEmplyeeData(name,salary) {


    payRoll.push({
        name,
        salary
    })


        // if (payRoll.includes(name)) {
        //     payRoll.push(name)

        // }


    }
    // console.log(payRoll);


    function getNameOfEmployees() {
        return payRoll;
    }

    function calculateRate(days, rate) {
        var salary =  days * rate;
        storeEmplyeeData(name,salary);
        // console.log(payRoll)

        return salary;
    }

    function dailyRate() {

    }


    // function daysOfWork(month, year) {
    //     return new Date(year, month, 0).getDate();
    // }submit

    return {
        storeEmplyeeData,
        calculateRate,
        getNameOfEmployees,
        dailyRate,
        // daysOfWork
    }
}