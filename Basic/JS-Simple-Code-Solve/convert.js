function inchToFeet(inch){
    const feet = inch /12;
    return feet
}

const height = inchToFeet(75);
console.log(height)

// another way to find feet

function inchToFeet2(inch){
    const feet = inch /12;
    const feetNumber =parseInt(feet);
    const inchRemaining= inch % 12;
    const result = feetNumber + 'ft'+ ' ' + inchRemaining + 'inch'
    return result;

}

const height2 = inchToFeet2(75);
console.log(height2);

// miles to convert km

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const speed = mileToKilometer(100);
console.log(speed,'kmph')

// convert kilo meter to miles
function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const speed2 = kiloToMile(100);
console.log(speed2,'mph')
