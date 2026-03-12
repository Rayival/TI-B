<script setup>

import rayival from "../assets/rayival.jpg"
import ridzki from "../assets/ridzki.jpg"

const leaders = [
{
role:"Ketua Murid (KM)",
name:"Rayival Dede Saputra",
alias:"root@leader",
desc:"Orchestrating class synchronization and system integrity.",
img: rayival
},
{
role:"Wakil Ketua",
name:"Ridzki Ahnovalrian Arifin",
alias:"sudo@vice",
desc:"Maintaining class stability and internal coordination.",
img: ridzki
}
]

</script>


<template>

<section id="structure" class="py-24 px-6 bg-[#08080a] border-t border-white/5">

<div class="max-w-7xl mx-auto">

<!-- title -->

<div class="mb-16">

<h2 class="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">
/ Structure_Config
</h2>

<h3 class="text-4xl font-bold text-white">
Core Leadership
</h3>

</div>


<div class="grid md:grid-cols-2 gap-10">


<div
v-for="leader in leaders"
:key="leader.name"
class="group relative">

<!-- glow -->

<div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

<!-- card -->

<div class="relative bg-[#0d0d12] border border-white/10 rounded-xl p-8 flex flex-col sm:flex-row gap-8 items-center hover:border-emerald-500/40 transition">

<div class="w-40 h-40">

<img
:src="leader.img"
class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-700"
/>

</div>

<div class="text-center sm:text-left space-y-2">

<span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-1 border border-emerald-500/20 rounded">
{{leader.alias}}
</span>

<h4 class="text-2xl font-bold text-white">
{{leader.name}}
</h4>

<p class="text-emerald-400 font-mono text-xs">
{{leader.role}}
</p>

<p class="text-gray-500 text-sm leading-relaxed">
{{leader.desc}}
</p>

</div>

</div>

</div>

</div>

</div>

</section>

</template>