'use strict'

const extractNames = components => components.map((component) => component.name)

const intersection = (components, requiredComponents) => components.filter(value => requiredComponents.includes(value))

const filter = (settings, components) => {
  const componentNames = extractNames(components)
  const result = settings.filter((setting) => {
    if (setting.requires.length === 0) {
      return true
    }
    if (intersection(componentNames, setting.requires).length >= 1) {
      return true
    }
    return false
  })

  return result
}

exports.filter = filter
