// const express = require('express') // CommonJS
import express from 'express' // ES6
import bodyParser from 'body-parser'
import { SerialPort } from 'serialport' // Conectarnos con el SIM900 GMS

const app = express()

// "application/json"
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/device', async (req, res) => {
  const devices = await SerialPort.list()
  const filtered = devices.filter(x => x.vendorId === '2341')

  res.json(filtered)
})

app.post('/device/send', async (req, res) => {
  try {
    const path = req.body?.path
    const baudRate = req.body?.baudRate ?? 9600

    console.log({
      body: req.body,
      baudRate
    })

    const port = new SerialPort({ path, baudRate })

    port.write('AT\r\n')
    port.on('data', (data) => {
      res.send(data.toString())
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080')
})