let p = new Promise((resolve, reject)=>{
  console.log("promise is pending")
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled")
    resolve(true)
    // reject(new Error("I am an error"))
  }, 5000);
})
console.log(p)

let p2 = new Promise((resolve, reject)=>{
  console.log("promise is pending")
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled")
    // resolve(true)
    reject(new Error("I am an error"))
  }, 5000);
})
p.then((value) =>{
  console.log(value)
}
      )
p2.catch((error)=>{
  console.log("some error occured in p2")
})