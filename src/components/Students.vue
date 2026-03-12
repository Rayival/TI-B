<script setup>
import { students } from "../data/students"
import { Users } from "lucide-vue-next"
</script>

<template>

<section id="directory" class="py-24 px-6 relative">

<div class="max-w-7xl mx-auto">

<!-- title -->

<div class="text-center mb-20">

<p class="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3">
/ Node_Database
</p>

<h2 class="text-5xl font-bold text-white tracking-tighter font-display">
Active Class Nodes
</h2>

<div class="w-20 h-[2px] bg-emerald-500 mx-auto mt-6"></div>

</div>

<!-- students grid -->

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div
v-for="(name,index) in students"
:key="index"
class="group p-4 bg-[#0d0d12] border border-white/5 rounded-lg hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all flex items-center gap-4 cursor-default">

<!-- number -->

<span class="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500 transition">
{{ String(index+1).padStart(2,"0") }}
</span>

<!-- name -->

<div class="flex-1">

<h5 class="text-xs font-bold text-slate-300 group-hover:text-white transition uppercase tracking-tight">
{{ name }}
</h5>

<p class="text-[9px] font-mono text-slate-600 mt-1 uppercase">
Node_Active // TI-B 2025
</p>

</div>

<!-- status dot -->

<div class="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition shadow-[0_0_6px_rgba(16,185,129,0)] group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)]">
</div>

</div>

</div>

</div>

</section>

</template>