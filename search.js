class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }

  addChild(childNode) {
    this.descendants.push(childNode)
  }
}

class Queue {
  constructor(){
    this.value = [] 
  }
  add(value){
    this.value.push(value)
  }
  addMany(value){
    this.value.push(...value)
  }
  get(){
    return this.value.shift()
  }
  length(){
    return this.value.length
  }
}

class Stack {
  constructor(){
    this.value = [] 
  }
  add(value){
    this.value.unshift(value)
  }
  addMany(value){
    this.value.unshift(...value)
  }
  get(){
    return this.value.shift()
  }
  length(){
    return this.value.length
  }
}


const kingCharles = new TreeNode("Charles")
// const elizabeth = new TreeNode("Elizabeth")
const william = new TreeNode("William")
const george = new TreeNode("George")
const charlotte = new TreeNode("Charlotte")
const louis = new TreeNode("Louis")
const harry = new TreeNode("Harry")
const archie = new TreeNode("Archie")
const lilibet = new TreeNode("Lilibet")
// const andrew = new TreeNode("Andrew")
// const beatrice = new TreeNode("Beatrice")
// const sienna = new TreeNode("Sienna")
// const eugenie = new TreeNode("Eugenie")
// const august = new TreeNode("August")
kingCharles.addChild(william)
kingCharles.addChild(harry)

william.addChild(george)
william.addChild(charlotte)
william.addChild(louis)

harry.addChild(archie)
harry.addChild(lilibet)

function depthFirstSearch(root) {
  const dataStore = new Queue()
  dataStore.add(root)
  const search = [];

  while(dataStore.length() > 0){
    const node = dataStore.get();
    dataStore.addMany(node.descendants)
    search.push(node.value)
  }
  return search
} 

console.log(depthFirstSearch(kingCharles))