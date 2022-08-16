var items = [ 34, 44, 99, 45, 56, 83];
for ( i = 0; i < items.length; i++){
    var item = items[i];
    if( item > 56){
        continue ;
    }
    console.log(item)
}