let arr = [1,2,3,1,1,1,4,5]
    
let filtered = arr.filter((item,index) => arr.indexOf(item) === index)
    
 console.log(filtered) // [1,2,3,4,5]