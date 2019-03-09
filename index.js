'use strict'

const express = require('express')
const { check, validationResult } = require('express-validator/check')
const app = express()
const port = 8000

const { filter } = require('./src/filter')
const { settings } = require('./src/settings')
const { components } = require('./src/components')

app.use(express.json())

app.get('/', [], (req, res) => {
  Promise.all([settings, components]) // simulate an api call
    .then(([settingsResult, componentsResult]) => {
      return filter(settingsResult, componentsResult)
    })
    .then((result) => res.send(result))
    .catch(console.error)
})

app.post('/custom', [check('settings').isArray(), check('components').isArray()], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const postSettings = req.body.settings
  const postComponents = req.body.components
  const filteredSettings = filter(postSettings, postComponents)
  res.send(filteredSettings)
})

app.listen(port, () => console.log(`Server started on ${port}`))
