load.initialize(async function () {
});

load.action("Action", async function () {

    let transaction_01 = new load.Transaction("Start_01");
    transaction_01.start();
    
    load.log(`Hello there! Let's debug`);
    
    var a = 5;
    var b = 10;
    var sum = 0;
    sum = a + b;
    load.log("The sum of a + b is: " + sum);
    load.log("This is my first change to the main script..");

    transaction_01.stop();
    load.log("The transaction took " + transaction_01.duration + " milliseconds");

 });

load.finalize(async function () {
});
