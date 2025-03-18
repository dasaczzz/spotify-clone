interface Clonable<T> {
  clon(): T
}
export class Playlist implements Clonable<Playlist> {
  private title: string = ''
  private songs: Song[] = [] 
  private description: string = ''

  getTitle() {
    return this.title
  }

  getSongs() {
    return this.songs
  }

  getDescription() {
    return this.description
  }

  setTitle(title: string) {
    this.title = title
  }

  setSongs(songs: Song[]) {
    this.songs = songs
  }

  setDescription(description: string) {
    this.description = description
  }

  clon(): Playlist {
    const playlist = new Playlist()
    playlist.setTitle(this.title)
    playlist.setSongs([...this.songs])
    playlist.setDescription(this.description)
    return playlist
  }
  
}

export class Song {
  private name: string
  private genre: string 
  private artist: string 

  // Sobrecarga del constructor
  constructor()
  constructor(name: string, genre: string, artist: string)

  constructor(name?: string, genre?: string, artist?: string) {
    this.name = name ?? ''
    this.genre = genre ?? ''
    this.artist = artist ?? ''
  }

  getName() {
    return this.name
  }

  getGenre() {
    return this.genre
  }

  getArtist() {
    return this.artist
  }

  setName(name: string) {
    this.name = name
  }

  setGenre(genre: string) {
    this.genre = genre
  }

  setArtist(artist: string) {
    this.artist = artist
  }
}

// Create sample data
export const song1: Song = new Song('One', 'Rock', 'Metallica')
const song2: Song = new Song('One step closer', 'Rock', 'Linking park')
const song3: Song = new Song('Freak on a leash', 'Nu metal', 'Korn')
const song4: Song = new Song('Chop suey', 'Nu metal', 'System of a down')

const song5: Song = new Song('Poker face', 'Pop', 'Lady Gaga')
const song6: Song = new Song('Toxic', 'Pop', 'Britney Spears')
const song7: Song = new Song('I wonder', 'Pop', 'Kanye West')

const playlist1 = new Playlist()
playlist1.setTitle('rocksito')
playlist1.setDescription('Pum pum pa, pum pa pa pum')
playlist1.getSongs().push(song1)
playlist1.getSongs().push(song2)
playlist1.getSongs().push(song3)
playlist1.getSongs().push(song4)

const playlist2 = new Playlist()
playlist2.setTitle('popsito')
playlist2.setDescription('mood for party')
playlist2.getSongs().push(song5)
playlist2.getSongs().push(song6)
playlist2.getSongs().push(song7)


export const playlistData: Playlist[] = [
  playlist1,
  playlist2
] 

