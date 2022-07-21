const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 300);
});

async function processUnit(val){
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 2*val
}

async function main(){
  let sum = 0
  const arr = [1,2,3,4,5,6,7,8,9,10]
  console.log(sum)
}

main()