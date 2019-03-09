exports.samples = {
  settingsWithAllEmptyRequires: [
    {
      'name': 'Mixer',
      'requires': []
    },
    {
      'name': 'AttractLoop',
      'requires': []
    },
    {
      'name': 'Volume',
      'requires': []
    }
  ],

  settingsWithTwoAudio: [
    {
      'name': 'Mixer',
      'requires': ['audio', 'pcb']
    },
    {
      'name': 'Volume',
      'requires': ['audio']
    }
  ],

  settingsWithTwoAudioOneEmptyRequires: [
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
  ],

  settingsWithOneEmptyRequires: [
    {
      'name': 'AttractLoop',
      'requires': []
    }
  ],

  settingsWithOneAudioPcb: [
    {
      'name': 'Mixer',
      'requires': ['audio', 'pcb']
    }
  ],

  componentWithAudioLED: [
    {
      'name': 'audio'
    },
    {
      'name': 'LED array'
    }
  ],

  componentWithAudio: [
    {
      'name': 'audio'
    }
  ],

  componentWithAudioPcb: [
    {
      'name': 'audio'
    },
    {
      'name': 'pcb'
    }
  ],

  componentWithAudioWrongCase: [
    {
      'name': 'AUDIO'
    },
    {
      'name': 'LED array'
    }
  ],

  componentWithEmpty: [
    {
      'name': ''
    },
    {
      'name': ''
    }
  ]
}
