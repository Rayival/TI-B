<script setup>

import { ref, computed } from "vue"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

const props = defineProps({
 item:Object
})

const expanded = ref(false)

const shortText = computed(()=>{
 if(expanded.value) return props.item.message
 return props.item.message.slice(0,120) + "..."
})

const isLong = computed(()=>{
 return props.item.message.length > 120
})

</script>

<template>

<div class="bg-[#0b0b0e] border border-emerald-500/20 p-5 rounded-xl">

<div class="flex gap-3 mb-3">

<img
:src="item.cover"
class="w-14 h-14 rounded"
/>

<div>

<p class="text-white text-sm">
{{ item.song }}
</p>

<p class="text-gray-400 text-xs">
{{ item.artist }}
</p>

</div>

</div>

<p class="text-gray-300 text-sm whitespace-pre-line">
{{ shortText }}
</p>

<button
v-if="isLong"
@click="expanded = !expanded"
class="text-emerald-400 text-xs mt-2"
>

{{ expanded ? "Show less" : "Read more" }}

</button>

<p class="text-gray-500 text-xs mt-3">
{{ dayjs(item.createdAt?.toDate()).fromNow() }}
</p>

</div>

</template>