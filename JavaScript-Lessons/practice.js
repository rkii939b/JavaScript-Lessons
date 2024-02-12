function Counter(){
    
    let count = 0;

    function incrementCounter(){
        count++;
        console.log(count);}
        return incrementCounter;
}

let count1 = Counter();
count1();

