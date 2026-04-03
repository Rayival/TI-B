import { ref } from "vue"
import axios from "axios"

export const songs = ref([])

export const searchSong = async (q) => {
  if (!q) {
    songs.value = []
    return
  }

  try {
    const res = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: q,
        entity: "song",
        limit: 8
      }
    })

    songs.value = res.data.results
      .filter(item => item.previewUrl) // 🔥 pastikan bisa diputar
      .map(item => ({
        id: item.trackId,
        name: item.trackName,
        artists: [{ name: item.artistName }],
        album: {
          images: [{ url: item.artworkUrl100 }]
        },
        preview_url: item.previewUrl, // 🎧 buat play

        // 🔗 buat buka spotify
        spotify_url: `https://open.spotify.com/search/${encodeURIComponent(
          item.trackName + " " + item.artistName
        )}`
      }))

  } catch (err) {
    console.error("iTunes Error:", err)
    songs.value = []
  }
}