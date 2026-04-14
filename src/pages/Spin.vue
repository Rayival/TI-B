<script setup>
import { ref } from "vue"
import { students } from "../data/students"

const firstName = (name)=>{
  return name.split(" ")[0]
}

// 🔥 SHUFFLE
const shuffle = (array) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// 🎨 COLORS
const colors = [
  "#22c55e", "#06b6d4", "#3b82f6",
  "#a855f7", "#f59e0b", "#ef4444"
]

const getTextColor = (i) => {
  const bg = colors[i % colors.length]

  if(bg === "#f59e0b" || bg === "#22c55e") {
    return "text-black"
  }

  return "text-white"
}

// 🎡 WHEEL STYLE
const getWheelStyle = () => {
  const total = remaining.value.length
  const angle = 360 / total

  let gradient = ""

  remaining.value.forEach((_, i) => {
    const start = i * angle
    const end = start + angle
    const color = colors[i % colors.length]

    gradient += `${color} ${start}deg ${end}deg, `
  })

  return {
    background: `conic-gradient(${gradient.slice(0, -2)})`
  }
}

const wheel = ref(null)

const remaining = ref([...students])
const selected = ref(null)

const spinning = ref(false)
const rotation = ref(0)

const groups = ref([])
const groupCount = ref(4)

const spinSound = new Audio("/spin.mp3")

const getTextRotation = (i) => {
  const angle = (360 / remaining.value.length) * i

  return angle > 180 ? 180 : 0
}

// 🎡 SPIN
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

// 🔄 RESET
const resetWheel = ()=>{
  remaining.value = [...students]
  selected.value = null
  rotation.value = 0
}

// 👥 GROUP
const generateGroups = ()=>{

  const females = shuffle(students.filter(s=>s.gender==="F"))
  const males = shuffle(students.filter(s=>s.gender==="M"))

  const result = Array.from({ length: groupCount.value }, () => [])

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
<section class="min-h-screen bg-gradient-to-b from-[#050507] to-[#0a0a10] py-16 px-4 text-center">

<h1 class="text-3xl sm:text-4xl font-bold text-white mb-12 font-mono tracking-widest">
Student Spin System
</h1>

<!-- WHEEL -->
<div class="flex flex-col items-center justify-center">

<div class="relative w-[85vw] max-w-[360px] aspect-square mb-12">

<!-- POINTER -->
<div class="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
  <div class="w-0 h-0
    border-l-[14px] border-l-transparent
    border-r-[14px] border-r-transparent
    border-b-[22px] border-b-emerald-400
    drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]">
  </div>
</div>

<!-- WHEEL -->
<div
ref="wheel"
class="w-full h-full rounded-full border border-emerald-500/30
shadow-[0_0_60px_rgba(16,185,129,0.3)]
transition-transform duration-[4000ms] ease-out
relative overflow-hidden flex items-center justify-center
hover:scale-[1.02]"
:class="{ 'animate-pulse': spinning }"
:style="{ transform:`rotate(${rotation}deg)` }"
>

<div class="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">

  <div class="bg-black/70 backdrop-blur px-4 py-2 rounded-lg border border-yellow-400/30">
    <span class="text-yellow-400 text-xs font-mono tracking-widest">
      🚧 UNDER DEVELOPMENT
    </span>
  </div>

</div>

<!-- glow -->
<div class="absolute inset-0 rounded-full border border-emerald-400/20 animate-pulse"></div>

<!-- dynamic slice -->
<div
class="absolute inset-0 rounded-full"
:style="getWheelStyle()"
></div>

<!-- border slice -->
<div class="absolute inset-0 rounded-full border-[3px] border-black/30 pointer-events-none"></div>

<!-- names -->
<div
v-for="(s,i) in remaining"
:key="i"
class="absolute left-1/2 top-1/2 origin-top text-[10px] sm:text-xs font-mono"
:style="{
  transform: `
    rotate(${(360/remaining.length)*i + (180/remaining.length)}deg)
    translateY(-70%)
    rotate(${getTextRotation(i)}deg)
  `
}"
>
<span
:class="[
  getTextColor(i),
  'px-2 py-[2px] rounded-md bg-black/60 border border-white/10 shadow-[0_0_6px_rgba(0,0,0,0.6)]'
]"
>
{{ firstName(s.name) }}
</span>
</div>

<!-- center -->
<div class="absolute w-16 h-16 bg-[#050507] rounded-full z-10 flex items-center justify-center border border-white/10 shadow-inner">
  <span class="text-white text-xs font-mono tracking-widest">SPIN</span>
</div>

</div>
</div>

<!-- RESULT -->
<div class="mb-10">
<p class="text-slate-500 text-xs tracking-[4px] mb-2">
SELECTED STUDENT
</p>

<h2 class="text-3xl sm:text-4xl font-bold font-mono text-emerald-400
drop-shadow-[0_0_15px_rgba(16,185,129,0.7)]">
{{ selected ? firstName(selected.name) : "READY" }}
</h2>
</div>

<!-- BUTTON -->
<div class="flex flex-wrap justify-center gap-4 mb-16">

<button
@click="spin"
class="px-8 py-3 bg-emerald-500 text-black font-mono rounded-lg
hover:scale-105 active:scale-95
hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]
transition">
SPIN
</button>

<button
@click="resetWheel"
class="px-8 py-3 border border-emerald-500 text-emerald-400
rounded-lg font-mono hover:bg-emerald-500/10 transition">
RESET
</button>

</div>

</div>

<!-- GROUP -->
<div class="max-w-5xl mx-auto border-t border-white/10 pt-12">

<h2 class="text-white text-xl sm:text-2xl font-bold mb-6 font-mono">
Generate Groups
</h2>

<div class="flex flex-wrap justify-center gap-4 mb-8">

<input
v-model.number="groupCount"
type="number"
min="2"
class="bg-[#0d0d12] border border-white/10 px-4 py-2 rounded text-white w-24 text-center"
/>

<button
@click="generateGroups"
class="px-6 py-2 bg-emerald-500 text-black rounded font-mono
hover:scale-105 active:scale-95 transition">
GENERATE
</button>

</div>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div
v-for="(group,i) in groups"
:key="i"
class="bg-[#0d0d12] border border-white/10 rounded-xl p-5 backdrop-blur
hover:border-emerald-400/30 transition"
>

<h3 class="text-emerald-400 font-mono mb-3">
Kelompok {{ i+1 }}
</h3>

<ul class="text-sm text-slate-300 space-y-1">
<li v-for="(m,j) in group" :key="j">
{{ m }}
</li>
</ul>

</div>

</div>

</div>

</section>
</template>