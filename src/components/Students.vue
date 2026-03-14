<script setup>
import { students } from "../data/students"
import { Users, Search } from "lucide-vue-next"
import { ref, computed } from "vue"

const randomStatus = () => {
  return Math.random() > 0.3 ? "ONLINE" : "IDLE"
}

const query = ref("")

const filteredStudents = computed(() => {
  return students.filter(student =>
    student.name.toLowerCase().includes(query.value.toLowerCase())
  )
})
</script>

<template>

<section id="directory" class="py-24 px-6 relative">

<!-- background glow -->
<div class="absolute inset-0 opacity-[0.04] pointer-events-none
bg-[radial-gradient(circle_at_center,white,transparent_70%)]">
</div>

<div class="max-w-7xl mx-auto">

<!-- TITLE -->

<div class="text-center mb-16">

<p class="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3">
/ Node_Database
</p>

<h2 class="text-5xl font-bold text-white tracking-tighter font-display">
Active Class Nodes
</h2>

<div class="w-20 h-[2px] bg-emerald-500 mx-auto mt-6"></div>

<div class="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
<Users class="w-4 h-4"/>
<span>{{ students.length }} Active Nodes</span>
</div>

</div>

<!-- TERMINAL HEADER -->

<div class="max-w-2xl mx-auto mb-8 bg-[#0d0d12] border border-white/10 rounded-lg overflow-hidden">

<div class="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-white/10">

<div class="w-3 h-3 rounded-full bg-red-500"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
<div class="w-3 h-3 rounded-full bg-green-500"></div>

<p class="ml-3 text-[10px] font-mono text-slate-500">
node_directory // ti-b_2025
</p>

</div>

<div class="p-4 font-mono text-[11px] text-emerald-400 space-y-1">
<p>> initializing node database...</p>
<p>> loading active students...</p>
<p>> system ready.</p>
</div>

</div>

<!-- SEARCH -->

<div class="max-w-md mx-auto mb-12 relative">

<Search class="absolute left-3 top-3 w-4 h-4 text-slate-500" />

<input
v-model="query"
type="text"
placeholder="Search node..."
class="w-full pl-10 pr-4 py-3 bg-[#0d0d12] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500 transition"
/>

</div>

<!-- STUDENTS GRID -->

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div
v-for="(students,index) in filteredStudents"
:key="index"
class="group p-4 bg-[#0d0d12] border border-white/5 rounded-lg
hover:border-emerald-500/40
hover:bg-emerald-500/[0.03]
transition-all duration-300
flex items-center gap-4 cursor-default
hover:-translate-y-1
hover:scale-[1.02]
hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
>

<!-- NUMBER -->

<span class="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500 transition">
{{ String(index+1).padStart(2,"0") }}
</span>

<!-- NAME -->

<div class="flex-1">

<h5 class="text-xs font-bold text-slate-300 group-hover:text-white transition uppercase tracking-tight">
{{ students.name }}
</h5>

<!-- NODE ID -->
<p class="text-[9px] font-mono text-slate-600 mt-1 uppercase">
Node_ID: {{ 1000 + index }}
</p>

</div>

<!-- STATUS -->

<div class="text-[9px] font-mono">

<span
:class="randomStatus() === 'ONLINE'
? 'text-emerald-400'
: 'text-yellow-400'"
>
{{ randomStatus() }}
</span>

</div>

</div>

</div>

</div>

</section>

</template>