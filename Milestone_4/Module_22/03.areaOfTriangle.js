// This function will calculate area of a triangle from there 3 arm
function areaOfTriangle(arm1, arm2, arm3) {
    let s = (arm1 + arm2 + arm3)/2;
    let area = Math.sqrt(s*(s - arm1) * (s - arm2) * (s - arm3));
    return area;
}

let arm1 = 13;
let arm2 = 14;
let arm3 = 15;

console.log(areaOfTriangle(arm1, arm2, arm3));
