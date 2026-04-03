<script setup>
import { ref } from "vue"

const props = defineProps({
  item: Object
})

const show = ref(false)
const audio = ref(null)
const playing = ref(false)

const play = () => {
  if (!props.item.preview) return

  if (audio.value) {
    audio.value.pause()
    audio.value = null
    playing.value = false
    return
  }

  audio.value = new Audio(props.item.preview)
  audio.value.play()
  playing.value = true

  audio.value.onended = () => {
    audio.value = null
    playing.value = false
  }
}
</script>

<template>

<!-- CARD -->
<div 
@click="show = true"
class="bg-[#0A0A12] border border-white/5 p-4 rounded-xl cursor-pointer hover:bg-[#12121a]">

<div class="flex items-center gap-3">

<img :src="item.cover" class="w-12 h-12 rounded-lg"/>

<div class="flex-1">
<p class="text-sm text-white font-semibold">{{ item.song }}</p>
<p class="text-xs text-gray-400">{{ item.artist }}</p>

<button 
@click.stop="play"
class="text-xs text-emerald-400 mt-1">
{{ playing ? "⏸ Pause" : "▶ Play" }}
</button>

</div>

</div>

<p class="mt-3 text-xs text-emerald-400">
To: {{ item.target || "Someone" }}
</p>

<p class="mt-2 text-sm text-gray-300 line-clamp-2">
{{ item.message }}
</p>

</div>

<!-- MODAL -->
<div 
v-if="show"
class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
@click.self="show = false">

<div class="bg-[#0A0A12] p-6 rounded-2xl max-w-md w-full">

<img :src="item.cover" class="w-full rounded-xl mb-4"/>

<h2 class="text-lg font-bold text-white">{{ item.song }}</h2>
<p class="text-sm text-gray-400 mb-3">{{ item.artist }}</p>

<p class="text-emerald-400 text-sm mb-2">
To: {{ item.target || "Someone" }}
</p>

<p class="text-gray-300 text-sm mb-4">
{{ item.message }}
</p>

<button 
@click="play"
class="w-full border border-emerald-500 text-emerald-400 py-2 rounded-lg">
{{ playing ? "Pause" : "Play Preview" }}
</button>

<button 
@click="show = false"
class="mt-2 w-full bg-emerald-500 text-black py-2 rounded-lg">
Close
</button>

</div>

</div>

</template>