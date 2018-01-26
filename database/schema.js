var Schema = {
  movies: {
    id: {
      type: `string`,
      nullable: false,
      primary: true
    },
    title: {
      type: 'string',
      maxlength: 254,
      nullable: false,
      unique: true
    },
    poster_path: {
      type: 'string',
      maxlength: 254,
      nullable: false
    },
    vote_average: {
      type: 'integer',
      nullable: false,
      unsigned: true
    },
    release_date: {
      type: 'date',
      nullable: false
    },
    overview: {
      type: 'text',
      maxlength: 16777215,
      fieldtype: 'medium',
      nullable: false
    }
  },
}

module.exports = Schema;