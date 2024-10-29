import express from 'express'
import envConfig from './constants/envConfig'

const app = express()

const port = envConfig.POST

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
