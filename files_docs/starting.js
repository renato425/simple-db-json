const SimpleDBJson = require('simple-db-json')
const db = new SimpleDBJson('db', '\t')


if (db.get('property').has('object').this == true) {
  db.get('property').set('newObject', {setando: 'um objeto'})
}
