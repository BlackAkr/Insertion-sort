function insertionSort(arr:number[]):number[]
{
    for(let j = 1; j < arr.length ; j++)
    {
        let i = j - 1;
        let key = arr[j]
        while(i>=0 && arr[i] > key)
        {
            
            arr[i+1] = arr[i]
            i--
        }
        arr[i+1] = key
    }
    return arr;
}

let arr = [1,3,5,2,0]
window.alert(insertionSort(arr))