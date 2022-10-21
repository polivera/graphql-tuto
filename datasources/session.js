const sessions = require('../data/sessions.json')
const { DataSource } = require('apollo-datasource')

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions(args) {
    let filterSessions = [...sessions]
    Object.entries(args).forEach(([field, value]) => {
      filterSessions = filterSessions.filter(it => {
        if (typeof it[field] === 'string') {
          return it[field].includes(value)
        }
      })
    });

    return filterSessions;
  }

  getSessionById(id) {
    console.log('calling get session by id')
    return sessions.filter(it => it.id == id)[0]
  }
}

module.exports = SessionAPI
