var Soppingcart = {
    books : 3,
    sunglass : 5,
    keyboard : 4,
    Mouse : 4,
    pen : 7
}
var penvalue = Soppingcart.pen;   
// console.log(penvalue);                    // *****When we need any of one Property Value****Rules 1
var penvalue1 = Soppingcart["pen"];
// console.log(penvalue1);                      // *****When we need any of one Property Value****Rules 2
var propertyName= 'keyboard';

var porpertyNewValue = Soppingcart[propertyName];

console.log(propertyName, porpertyNewValue);

// ******* its use when we dont find any specific property Name** find Any propertise specifice value with a variable where property value decleared Rules 3****

var properties = Object.keys(Soppingcart);
// console.log(properties)    // ********** If we need to find objects all properties name all together*****

var propertiesValue = Object.values(Soppingcart);
// console.log(propertiesValue);  // ********** If we need to find objects all properties values all together*****

Soppingcart.keyboard = 6;
// console.log(Soppingcart);   // ***** Set Any propertise specifice value or chnage value Rules 1****

Soppingcart.keyboard= [77]; 

// console.log(Soppingcart); // ***** Set Any propertise specifice value or chnage value Rules 2****

Soppingcart[propertyName]= 55;
// console.log(Soppingcart); 

// ******* its use when we dont find any specific property Name**
// ***** Set Any propertise specifice value or chnage value with a variable where property decleared Rules 3****
