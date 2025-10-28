function maximumElement(arr){
    // 1st option
    let maximum=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maximum){
            maximum=arr[i]
        }
    }

    return maximum

    // 2nd option
    // const max = Math.max(...arr);

    // 3rd option
    // const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
    // console.log(max)

}
maximumElement([1,2,3,4,9])