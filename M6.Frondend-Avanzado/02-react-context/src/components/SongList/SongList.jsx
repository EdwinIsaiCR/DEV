import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading, setSelectedSong, search } = useSongContext()

  const filteredSongList = list.filter((song) => {
    return song.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <section className='row-container'>
      {
        loading
          ? <h2>Cargando...</h2>
          : filteredSongList.map((song) => (
            <div
              key={song.id}
              className='row-song'
              onClick={() => {
                setSelectedSong(song)
              }}
            >
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))
        }
    </section>
  )
}
export default SongList
