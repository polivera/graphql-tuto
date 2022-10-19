const sessions = require('../data/sessions.json')
const {DataSource} = require('apollo-datasource')

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions() {
    return sessions;
  }

  getSessionById(id) {
    return sessions.filter(it => it.id == id)[0]
  }

}

module.exports = SessionAPI
