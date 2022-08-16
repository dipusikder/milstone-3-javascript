function HourTomin(Hour){
    const convert = Hour * 3600;
    return convert;
}
const milesToKm = 4
const result = HourTomin(milesToKm);
console.log("1 Hour =",result, "sec");