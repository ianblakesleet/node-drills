const fuckaround = () => console.log('yuhhhhhhhh')
fuckaround()
let array = [[], [{ age: 21, color: 'blue' }]]
if (array[0] === []) {
  console.log("It's truthy!")
} else {
  console.log('False')
}
if (array[0] == []) {
  console.log("It's truthy!")
} else {
  console.log('False')
}
if ((array[0] = [])) {
  console.log("It's truthy!")
} else {
  console.log('False')
}
