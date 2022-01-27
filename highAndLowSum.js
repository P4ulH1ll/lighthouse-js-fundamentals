const highLowSum = function(data) {
  let low = data[0];
  let high = data[0];
  let lowhigh = data[0];
 // let sum = 0;
  console.log(data);
  for (var i = 0; i < data.length; i++){

    if (data[i] >= high) {
      high = data[i];
    }
    if (data[i] < low){
      low = data[i];
    }

    console.log('low is: ' + low);
    console.log('high is: ' + high);
  }
  sum = low + high;
  console.log('sum is: ' + sum);
  //return sum;
}

highLowSum([1, 4, 6, 8, 2, 8, 9, 342, 10]);
//sumLargestNumbers([1, 2, 3]);
//sumLargestNumbers([10, 4, 34, 6, 92, 2]);