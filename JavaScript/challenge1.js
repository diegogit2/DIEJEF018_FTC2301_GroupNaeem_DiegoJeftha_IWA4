


let date = 2050   // Changed annotation from : to = and changed const to let
let status = 'parent'   // Changed annotation from : to = and changed const to let and student to parent
let count = 0     // Changed const to let variable

if (date == 2050) {    //added ==
    console.log("January", 'New Year’s Day')   // added bracket
    console.log("March", 'Human Rights Day')
    const month4 = 'April'   //  changed date to month4 and asigned to const variable
    console.log(month4, 'Family Day')
    console.log(month4, 'Freedom Day')
    count = count + 4    //removed let variable

    if (status == "student") {   //added ==
        console.log('June', 'Youth Day')
        count = count + 1    //removed let variable
    }


    console.log('August', 'Women’s Day');
    console.log('September', 'Heritage Day');  
    const month12 = 'December'   // changed date to month12 and asigned to const variable
    console.log(month12, 'Day of Reconciliation');
    count = count + 3;     // removed let variable

    if (status == "parent") {
        console.log(month12, 'Christmas Day');
        count = count + 1;    //removed let variable
    }

    console.log(month12, 'Day of Goodwill');
    count = count + 1;    //removed let variable
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);