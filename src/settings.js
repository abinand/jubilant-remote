'use strict'

const settings = Promise.resolve([
  {
    'name': 'Mixer',
    'requires': ['audio', 'pcb']
  },
  {
    'name': 'AttractLoop',
    'requires': []
  },
  {
    'name': 'Volume',
    'requires': ['audio']
  }
])

exports.settings = settings
