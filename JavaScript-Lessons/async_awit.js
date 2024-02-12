

    const p = new Promise((resolve, reject) => {
    setTimeout(() => 
    {
     resolve("Here Sarik is")   
    },6000);});

    const q = new Promise((resolve, reject) => {
    setTimeout(() => 
    {
        resolve("Here the ghonti is")   
    },12000);})


async function ghontiHandler(){
    console.log("Welcome to Buira's home");
    const val = await p;
    console.log("Sarik is coming")
    console.log(val);

    const val2 = await q;
    console.log("Baki is coming")
    console.log(val2);
}



ghontiHandler();