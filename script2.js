const age_limit = 18;
const heavy_license_age_limit = 21;

let age = 4;

//conditional statements

if (age >= heavy_license_age_limit) {
    console.log('You are eligible to drive heavy vehicle');
}
else if(age >= age_limit){
    console.log('You are eligible to drive');
}
else{   
    console.log('You are not eligible to drive')
}

let choice = 1;
switch(choice){
    case 1:
        console.log('Juice');
        break;
    case 2:
        console.log('Bread omlet');
        break;
    default:
        console.log('hehehe');
}
