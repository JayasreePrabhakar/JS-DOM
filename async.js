//setTimeout

//function hello () {
  //  console.log("Hello from set Timeout")
//}

//setTimeout(() =>  console.log("Hello from set Timeout"), 5000);
//console.log("Hello from Js") 

//setInterval

//let count = 0;
//const timer = setInterval (() => {
    //count++;
    //console.log("Hello everyone");
    //if (count >5) {
   // clearInterval(timer);
    //}
//}, 2000);

//console.log("Hello from India");

//callbacks
//function doTask(taskName, callback) {
  //  console.log(   `starting ${taskName}....`);
    //setTimeout(() => {
      //  console.log(`${taskName} completed!`);
        //callback();
    //},5000);
//}

//doTask("Reading Book", ()=>{
  //  console.log("Now reading chapter 10");
//});

//CallBack hell - nested callback logic

//Promises
//let order = new Promise((resolve, reject) => {
  //  let isWorking = false;//output based on true or false
//
  //  setTimeout(() => {
    //    if(isWorking) {
      //      resolve("Order is ready");
        //} else {
          //  reject("Order delay");
        //}
    //}, 3000);
//});

//order
  //  .then((message) => console.log("Success: ",message))
    //.catch((error) => {
      //  console.log("Error: ",error);
   // });


//Async / Await

//function orderFunction() {
  //  let order = new Promise((resolve, reject) => {
    //let isWorking = true;//output based on true or false

    //setTimeout(() => {
      //  if(isWorking) {
        //    resolve("Order is ready");
        //} else {
          //  reject("Order delay");
        //}
//    }, 3000);
//});
//return order;
//}

//async function orderFood() {
  //  const orderStatus = await orderFunction();
   // console.log(orderStatus);//called inside promise function
//}

//orderFood();

//Try Catch Finally

try {
    let result = 10 / 0;
    console.log(result);
    let name
} catch(error) {
    console.log(`Error: ${error}`);
} finally {
    console.log("Task Completed");
}