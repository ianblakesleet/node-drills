const fs = require('fs')
const path = require('path')

fs.appendFile(
  path.join(__dirname, 'message.txt'),
  'Rando Message ESKETIT SKURRRT',
  err => {
    if (err) console.log(err)
    console.log('success in appending!')
  }
)

fs.readFile(__dirname + '/message.txt', 'utf8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})

fs.writeFile(__dirname + '/message.txt', 'New Message', err => {
  if (err) console.log(err)
  console.log('rewrote file!')
})

fs.rename(__dirname + '/message.txt', __dirname + '/coolMessage.txt', err => {
  if (err) console.log(err)
  console.log('renamed File!')
})

fs.unlink(__dirname + '/message.txt', err => {
  console.log(err)
  console.log('successfully deleted the message.txt file!')
})
