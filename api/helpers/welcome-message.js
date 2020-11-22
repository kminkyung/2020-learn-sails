module.exports = {
  friendlyName: 'Welcome message',
  description: '',

  inputs: {
    name: {
      type: 'string'
    }
  },

  exits: {
    success: {
      description: 'All done.'
    }
  },

  fn: async function (inputs, exits) {
    return exits.success(`Hello, ${inputs.name}!`)
  }

}
