import filmFactory from '../../src/logic/film/filmFactory'

describe('createFilm', () => {
  it('should create a valid film', () => {
    let filmToCreate = {
      'fields': {
        'starships': [
          3,
          10,
          11,
          12,
          15,
          17,
          21,
          22,
          23
        ],
        'edited': '2014-12-15T13:07:53.386Z',
        'vehicles': [
          8,
          14,
          16,
          18,
          19,
          20
        ],
        'planets': [
          4,
          5,
          6,
          27
        ],
        'producer': 'Gary Kurtz, Rick McCallum',
        'title': 'Episode V - The Empire Strikes Back',
        'created': '2014-12-12T11:26:24.656Z',
        'episode_id': 5,
        'director': 'Irvin Kershner',
        'release_date': '1980-05-17',
        'opening_crawl': 'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
        'characters': [
          1,
          2,
          3,
          4,
          5,
          10,
          13,
          14,
          18,
          20,
          21,
          22,
          23,
          24,
          25,
          26
        ],
        'species': [
          1,
          2,
          3,
          6,
          7
        ]
      },
      'model': 'resources.film',
      'id': 2
    }

    let film = filmFactory.createFilm(filmToCreate)
    expect(film.title).toBe('Episode V - The Empire Strikes Back')
    expect(film.episode).toBe(5)
    expect(film.year).toBe('1980-05-17')
    expect(film.about).toBe('It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....')
    expect(film.director).toBe('Irvin Kershner')
  })
})
