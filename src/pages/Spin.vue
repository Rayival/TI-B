<script setup>

import { ref } from "vue"
import { students } from "../data/students"

const firstName = (name)=>{
return name.split(" ")[0]
}

const wheel = ref(null)

const remaining = ref([...students])
const selected = ref(null)

const spinning = ref(false)
const rotation = ref(0)

const groups = ref([])
const groupCount = ref(4)

const spinSound = new Audio("/spin.mp3")

const spin = ()=>{

if(spinning.value || remaining.value.length === 0) return

spinning.value = true

spinSound.currentTime = 0
spinSound.play()

const random = Math.floor(Math.random() * remaining.value.length)

const anglePer = 360 / remaining.value.length
const stopAngle = 3600 + (random * anglePer)

rotation.value += stopAngle

setTimeout(()=>{

selected.value = remaining.value[random]

remaining.value.splice(random,1)

spinning.value = false

},4000)

}

const resetWheel = ()=>{

remaining.value = [...students]
selected.value = null
rotation.value = 0

}

const generateGroups = ()=>{

const females = students.filter(s=>s.gender==="F")
const males = students.filter(s=>s.gender==="M")

const result = []

for(let i=0;i<groupCount.value;i++){
result.push([])
}

let index = 0

females.forEach(f=>{
result[index % groupCount.value].push(f.name)
index++
})

males.forEach(m=>{
result[index % groupCount.value].push(m.name)
index++
})

groups.value = result

}

</script>


<template>

<section class="min-h-screen bg-gradient-to-b from-[#050507] to-[#0a0a10] py-24 px-6 text-center">

<h1 class="text-4xl font-bold text-white mb-16 font-mono tracking-widest">
Student Spin System
</h1>


<!-- WHEEL -->

<div class="relative w-[340px] h-[340px] mx-auto mb-16">

<!-- POINTER -->

<div class="absolute -top-5 left-1/2 -translate-x-1/2 z-20">

<div class="w-0 h-0
border-l-[16px] border-l-transparent
border-r-[16px] border-r-transparent
border-b-[26px] border-b-emerald-400
drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
</div>

</div>


<!-- WHEEL -->

<div
ref="wheel"
class="w-full h-full rounded-full border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-[4000ms] relative overflow-hidden flex items-center justify-center"
:style="{ transform:`rotate(${rotation}deg)` }"
>

<!-- wheel background -->

<div
class="absolute inset-0 rounded-full opacity-30"
style="background:conic-gradient(
#10b981,
#06b6d4,
#6366f1,
#a855f7,
#f59e0b,
#ef4444,
#10b981
)">
</div>


<!-- names -->

<div
v-for="(s,i) in remaining"
:key="i"
class="absolute left-1/2 top-1/2 origin-top text-[11px] font-mono text-white"
:style="{
transform:`rotate(${(360/remaining.length)*i}deg) translateY(-140px)`
}"
>

<span class="px-1 py-[2px] rounded bg-black/40 backdrop-blur">

{{ firstName(s.name) }}

</span>

</div>

</div>

</div>


<!-- RESULT -->

<div class="mb-16">

<p class="text-slate-500 text-xs tracking-[4px] mb-2">
SELECTED STUDENT
</p>

<h2 class="text-4xl font-bold font-mono text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]">

{{ selected ? firstName(selected.name) : "READY" }}

</h2>

</div>


<!-- BUTTON -->

<div class="flex justify-center gap-6 mb-24">

<button
@click="spin"
class="px-10 py-3 bg-emerald-500 text-black font-mono rounded-lg
hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]
transition">

SPIN

</button>

<button
@click="resetWheel"
class="px-10 py-3 border border-emerald-500 text-emerald-400
rounded-lg font-mono hover:bg-emerald-500/10 transition">

RESET

</button>

</div>


<!-- GROUP GENERATOR -->

<div class="max-w-4xl mx-auto border-t border-white/10 pt-16">

<h2 class="text-white text-2xl font-bold mb-8 font-mono">
Generate Groups
</h2>


<div class="flex justify-center gap-4 mb-10">

<input
v-model="groupCount"
type="number"
min="2"
class="bg-[#0d0d12] border border-white/10 px-4 py-2 rounded text-white w-24 text-center"
/>

<button
@click="generateGroups"
class="px-6 py-2 bg-emerald-500 text-black rounded font-mono hover:scale-105 transition">

GENERATE

</button>

</div>


<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div
v-for="(group,i) in groups"
:key="i"
class="bg-[#0d0d12] border border-white/10 rounded-xl p-6 backdrop-blur">

<h3 class="text-emerald-400 font-mono mb-4">
Kelompok {{ i+1 }}
</h3>

<ul class="text-sm text-slate-300 space-y-1">

<li
v-for="(m,j) in group"
:key="j">

{{ m }}

</li>

</ul>

</div>

</div>

</div>

</section>

</template>