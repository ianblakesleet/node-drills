const fs = require('fs')
fs.appendFile('message.txt', 'Rando Message ESKETIT SKURRRT', err => {
  if (err) console.log(err)
  console.log('success in appending!')
})

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})

fs.writeFile('./message.txt', 'New Message', err => {
  if (err) console.log(err)
  console.log('rewrote file!')
})
