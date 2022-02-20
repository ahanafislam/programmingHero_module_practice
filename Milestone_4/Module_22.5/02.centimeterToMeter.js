// Convart centimeter to meter
function centimeterToMeter(cm) {
    let meter = cm/100;
    return `${cm}cm = ${meter}m`;
}

let cm = 5000;
console.log(centimeterToMeter(cm));
