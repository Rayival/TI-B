<script setup>
import { ref, onMounted } from "vue"
import { db } from "../firebase/firebase"

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore"

import { searchSong, songs } from "../composables/useSpotify"
import MenfessCard from "../components/MenfessCard.vue"

// AUDIO GLOBAL
const audio = ref(null)
const currentSongId = ref(null)

const playSong = (song) => {
  if (!song.preview_url) return

  if (currentSongId.value === song.id) {
    audio.value?.pause()
    currentSongId.value = null
    return
  }

  if (audio.value) audio.value.pause()

  audio.value = new Audio(song.preview_url)
  audio.value.play()

  currentSongId.value = song.id
}

// STATE
const message = ref("")
const target = ref("")
const selectedSong = ref(null)
const querySong = ref("")
const list = ref([])

// SEARCH (debounce)
let timeout = null
const handleSearch = (q) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    searchSong(q)
  }, 400)
}

// SEND
const send = async () => {
  if (!message.value || !selectedSong.value) {
    alert("Isi pesan & pilih lagu dulu!")
    return
  }

  await addDoc(collection(db, "menfess"), {
    message: message.value,
    target: target.value,
    song: selectedSong.value.name,
    artist: selectedSong.value.artists[0].name,
    cover: selectedSong.value.album.images[0].url,
    preview: selectedSong.value.preview_url || null,
    createdAt: serverTimestamp()
  })

  message.value = ""
  target.value = ""
  selectedSong.value = null
}

// REALTIME
onMounted(() => {
  const q = query(
    collection(db, "menfess"),
    orderBy("createdAt", "desc")
  )

  onSnapshot(q, (snap) => {
    list.value = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }))
  })
})
</script>

<template>
<div class="min-h-screen bg-[#03030A] text-[#EDEDEE] pt-24 pb-20">

<div class="max-w-4xl mx-auto px-6">

<h1 class="text-2xl font-bold text-emerald-400">
Send a Song
</h1>

<p class="text-xs text-gray-500 mb-6">
Send a song you can't say directly.
</p>

<!-- SEARCH -->
<input
v-model="querySong"
@input="handleSearch(querySong)"
placeholder="Search song..."
class="w-full bg-[#0A0A12] border border-white/10 p-3 rounded-lg text-sm"
/>

<!-- SONG LIST -->
<div class="mt-4 space-y-2">

<div
v-for="s in songs"
:key="s.id"
@click="() => { selectedSong = s; playSong(s) }"
:class="[
'flex items-center gap-3 p-2 rounded cursor-pointer',
selectedSong?.id === s.id 
? 'bg-emerald-500/20 border border-emerald-500'
: 'hover:bg-[#101015]'
]"
>

<img :src="s.album.images[0].url" class="w-10 h-10 rounded"/>

<div class="flex-1">
<p class="text-sm text-white">{{ s.name }}</p>
<p class="text-xs text-gray-400">{{ s.artists[0].name }}</p>
<p class="text-[10px] text-emerald-400">
{{ currentSongId === s.id ? 'Playing...' : 'Click to play' }}
</p>
</div>

</div>

</div>

<!-- FORM -->
<div class="mt-6 space-y-3">

<input
v-model="target"
placeholder="To someone..."
class="w-full p-3 bg-[#0A0A12] border border-white/10 rounded-lg text-sm"
/>

<textarea
v-model="message"
rows="4"
placeholder="Write something..."
class="w-full p-3 bg-[#0A0A12] border border-white/10 rounded-lg text-sm"
/>

<button
@click="send"
class="w-full bg-emerald-500 text-black py-3 rounded-lg">
Send Song
</button>

</div>

<!-- FEED -->
<div class="grid md:grid-cols-2 gap-4 mt-10">

<MenfessCard
v-for="item in list"
:key="item.id"
:item="item"
/>

</div>

</div>

</div>
</template>