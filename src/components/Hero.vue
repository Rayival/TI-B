<script setup>
import { ChevronRight, Database, Shield } from "lucide-vue-next"
</script>

<template>

<section id="home" class="pt-40 pb-24 px-6 relative overflow-hidden">

<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<!-- LEFT CONTENT -->

<div class="space-y-8">

<div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded">
<Database size="14"/>
STACK: VUE3 // TAILWIND // LOGIC
</div>

<h1 class="text-6xl md:text-7xl font-black text-white leading-[0.9] font-display">
CLASS <br>

<span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
DIRECTORY
</span>

</h1>

<p class="text-gray-400 max-w-xl leading-relaxed">
A digital ecosystem of Informatics Engineering B 2025.<br>
Where ideas compile into innovation.
</p>

<div class="flex items-center gap-6">

<button class="px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-2 rounded transition">
EXPLORE NODES
<ChevronRight size="18"/>
</button>

<div class="flex items-center gap-3 border-l border-white/10 pl-6">

<div class="text-2xl font-bold text-white">
24
</div>

<div class="text-[10px] text-gray-500 font-mono leading-tight">
Active <br>
Nodes
</div>

</div>

</div>

</div>


<!-- RIGHT TERMINAL -->

<div class="relative">

<div class="bg-[#0d0d12] border border-white/10 rounded-xl shadow-xl overflow-hidden">

<!-- terminal header -->

<div class="flex items-center gap-2 px-4 py-2 bg-[#1a1a24] border-b border-white/10">

<div class="w-3 h-3 bg-red-500 rounded-full"></div>
<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div class="w-3 h-3 bg-green-500 rounded-full"></div>

<span class="ml-4 text-xs text-gray-400 font-mono">
terminal
</span>

</div>

<!-- terminal content -->

<div class="p-6 font-mono text-sm space-y-2">

<p class="text-emerald-500">
C:\Users\TI-B-2025\npm start
</p>

<p class="text-gray-500">
> Compiling class_manifesto...
</p>

<p class="text-blue-400 mt-4">
class ClassB2025 {
</p>

<p class="ml-4 text-gray-300">
location = "Tasikmalaya"
</p>

<p class="ml-4 text-gray-300">
nodes = 24_students
</p>

<p class="ml-4 text-gray-300">
status = "Infinite_Growth"
</p>

<p class="text-blue-400">
}
</p>

<div class="flex items-center gap-2 pt-3 text-yellow-500">

<Shield size="14"/>

<span>
Security: Encrypted
</span>

</div>

</div>

</div>

<!-- glow effect -->

<div class="absolute -bottom-10 -right-10 w-56 h-56 bg-emerald-500/10 blur-[90px] rounded-full -z-10"></div>

</div>

</div>

</section>

</template>