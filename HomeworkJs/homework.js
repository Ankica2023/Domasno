//zadaca 1
let niza = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let somethingElse = function(arr) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(Array.isArray(arr)) {
                resolve(arr.map(n=>n*2));
            }else{
                reject(Error("We were expecting an array :("));
            }
        },3000)
    });
};

somethingElse("niza")
.then(data=> {
    console.log(data);
})
.catch(e=>{
    console.log(e);
});


// so try i catch

try {
    throw new TypeError("oops");
  } catch ({ name, message }) {
    console.log(name); // "TypeError"
    console.log(message); // "oops"
}


//zadaca 2

function makeRequest(location) {
    return new promise((resolve,reject)=>{
        console.log("Making Request to" + $(location))
        if(location === "Google") {
            resolve("Google says hi")
        }else{
            reject("We can only talk to Google")
        }
    })

}

function processRequest(response) {
    return new promise ((resolve, reject)=>{
        console.log("Processing response")
        resolve("Extra Information" + $(response))
    })
}

makeRequest("Google").then(response=>{
    console.log("Response Received")
    return processRequest(response)
}).then(processedResponse=>{
    console.log(processedResponse)
}).catch(err=>{
    console.log(err)
})

async function doWork() {
    try{
    const response = await makeRequest("Google")
    console.log("Response Received")
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    }catch (err) {
        console.log(err)
    }
}
doWork()






  

