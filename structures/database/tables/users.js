module.exports = table => {
  table.increments()

  table.string('serviceId', 64)
  table.string('language', 8)
  table.integer('flag')

  return table
}
