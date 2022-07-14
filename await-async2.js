async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function func1(){
  sleep(200)
  console.log("1")
}

function func2(){
  setTimeout(()=>{
    console.log("2")
  }, 100)
}

function func3(){
  setTimeout(()=>{
    console.log("3")
  }, 0)
}

function func4() {
  console.log("4")
}

function main() {
}

main()