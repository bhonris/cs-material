function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

let A = 3;
const funcA = async () => {
  await sleep(5000)
  A = 5;
  console.log(`set value a in funcA`)
}

async function funcB() {
  await sleep(3000)
  A += 20
  console.log(`set value a in funcB`)
}

async function main() {
  // Different combinations of await and not await to illustrate
  funcA()
  funcB()
  console.log("Value of A:", A)
}

main()

async function loadANumber() {
    console.log("start loading")
    await sleep(3000)
    console.log("finish loading")
    return 42
}

async function resolveY() {
  // TODO: Write this async function so that it reutrns the value from loadANumber()
}

console.log("DERP: ", resolveY())


