<script setup>
import { ref, onMounted, computed } from 'vue'
import { db } from '/firebase/firebase'

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore"

const message = ref("")
const to = ref("")
const search = ref("")
const menfessList = ref([])

const sendMenfess = async () => {
  if (!message.value || !to.value)
    return alert("Isi penerima dan pesan!")

  await addDoc(collection(db, "menfess"), {
    message: message.value,
    to: to.value,
    createdAt: serverTimestamp()
  })

  message.value = ""
  to.value = ""
}

onMounted(() => {
  const q = query(
    collection(db, "menfess"),
    orderBy("createdAt", "desc")
  )

  onSnapshot(q, (snapshot) => {
    menfessList.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
})

const filteredMenfess = computed(() => {
  return menfessList.value.filter(item =>
    item.to?.toLowerCase().includes(search.value.toLowerCase()) ||
    item.message?.toLowerCase().includes(search.value.toLowerCase())
  )
})

const formatTime = (timestamp) => {
  if (!timestamp) return ""
  const date = timestamp.toDate()
  return date.toLocaleString()
}
</script>

<template>
<div class="min-h-screen bg-[#03030A] text-[#EDEDEE] flex justify-center pt-24">

<div class="w-full max-w-xl px-6">

<!-- HEADER -->
<div class="text-center mb-10">

<h1 class="text-3xl font-bold text-[#10B981]">
Send Anonymous Message
</h1>

<p class="text-gray-400 text-sm mt-2">
TI-B Anonymous Board
</p>

</div>

<!-- FORM -->
<div class="bg-[#0f0f13] border border-gray-800 rounded-2xl p-6 mb-8">

<input
v-model="to"
placeholder="Pesan ini untuk siapa?"
class="w-full mb-4 p-3 rounded-lg bg-[#03030A] border border-gray-700 focus:border-[#10B981] outline-none"
/>

<textarea
v-model="message"
rows="3"
placeholder="Tulis pesan anonim..."
class="w-full p-3 rounded-lg bg-[#03030A] border border-gray-700 focus:border-[#10B981] outline-none"
/>

<button
@click="sendMenfess"
class="w-full mt-4 py-3 bg-[#10B981] hover:bg-emerald-400 text-black font-semibold rounded-lg transition"
>
Kirim Pesan
</button>

</div>

<!-- SEARCH -->
<div class="mb-6">

<input
v-model="search"
placeholder="Cari pesan..."
class="w-full p-3 rounded-lg bg-[#0f0f13] border border-gray-800 focus:border-[#10B981] outline-none"
/>

</div>

<!-- MESSAGE LIST -->
<div class="space-y-4">

<div
v-for="item in filteredMenfess"
:key="item.id"
class="bg-[#0f0f13] border border-gray-800 rounded-xl p-5"
>

<p class="text-sm text-[#10B981] mb-1">
Untuk: {{ item.to }}
</p>

<p class="text-gray-200 leading-relaxed">
{{ item.message }}
</p>

<div class="flex justify-between text-xs text-gray-500 mt-4">

<span>Anonim</span>

<span>
{{ formatTime(item.createdAt) }}
</span>

</div>

</div>

</div>

</div>

</div>
</template>