'use strict'

const { filter } = require('../src/filter')

const { samples } = require('./filter-testdata')

const evaluator = (settings, components, expected) => {
  const actual = filter(settings, components)
  expect(actual).toEqual(expected)
}

test.each([
  [samples.settingsWithAllEmptyRequires, samples.componentWithAudio, samples.settingsWithAllEmptyRequires],
  [samples.settingsWithTwoAudioOneEmptyRequires, samples.componentWithEmpty, samples.settingsWithOneEmptyRequires],
  [samples.settingsWithOneEmptyRequires, samples.componentWithAudioLED, samples.settingsWithOneEmptyRequires]
])(
  'Settings with empty requires are always present',
  evaluator
)

test.each([
  [samples.settingsWithTwoAudio, samples.componentWithAudio, samples.settingsWithTwoAudio],
  [samples.settingsWithOneAudioPcb, samples.componentWithAudio, samples.settingsWithOneAudioPcb]
])(
  'Settings with non empty requires have specified component name',
  evaluator
)

test.each([
  [samples.settingsWithTwoAudioOneEmptyRequires, samples.componentWithAudioWrongCase, samples.settingsWithOneEmptyRequires],
  [samples.settingsWithTwoAudioOneEmptyRequires, samples.componentWithEmpty, samples.settingsWithOneEmptyRequires]
])(
  'Invalid components do not match with any settings',
  evaluator
)
