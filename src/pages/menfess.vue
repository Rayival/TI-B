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

const message = ref("")
const target = ref("")
const selectedSong = ref(null)
const querySong = ref("")
const list = ref([])

const send = async ()=>{

 if(!message.value || !selectedSong.value) return

 await addDoc(collection(db,"menfess"),{
  message:message.value,
  target:target.value,
  song:selectedSong.value.name,
  artist:selectedSong.value.artists[0].name,
  cover:selectedSong.value.album.images[0].url,
  createdAt:serverTimestamp()
 })

 message.value=""
 target.value=""
}

onMounted(()=>{

 const q = query(
  collection(db,"menfess"),
  orderBy("createdAt","desc")
 )

 onSnapshot(q,(snap)=>{

  list.value = snap.docs.map(d=>({
   id:d.id,
   ...d.data()
  }))

 })

})

</script>


<template>

<div class="min-h-screen bg-[#03030A] text-[#EDEDEE] pt-24 pb-20">

<div class="max-w-4xl mx-auto px-6">

<h1 class="text-2xl font-bold mb-6 text-emerald-400">
Anonymous Song Message
</h1>

<!-- search song -->

<input
v-model="querySong"
@input="searchSong(querySong)"
placeholder="Search song..."
class="w-full bg-black border border-gray-700 p-3 rounded"
/>

<div class="mt-4 space-y-2">

<div
v-for="s in songs"
:key="s.id"
@click="selectedSong = s"
class="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-[#101015]"
>

<img :src="s.album.images[0].url" class="w-10 h-10 rounded"/>

<div>

<p class="text-sm">
{{ s.name }}
</p>

<p class="text-xs text-gray-400">
{{ s.artists[0].name }}
</p>

</div>

</div>

</div>


<!-- form -->

<div class="mt-6">

<input
v-model="target"
placeholder="Message for..."
class="w-full mb-3 p-3 bg-black border border-gray-700 rounded"
/>

<textarea
v-model="message"
rows="4"
placeholder="Write anonymous message..."
class="w-full p-3 bg-black border border-gray-700 rounded"
/>

<button
@click="send"
class="mt-3 bg-emerald-500 text-black px-5 py-2 rounded"
>
Send
</button>

</div>


<!-- feed -->

<div class="grid md:grid-cols-2 gap-6 mt-10">

<MenfessCard
v-for="item in list"
:key="item.id"
:item="item"
/>

</div>

</div>

</div>

</template>