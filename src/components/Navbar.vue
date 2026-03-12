<script setup>
import { Terminal } from "lucide-vue-next"
</script>

<template>
<nav class="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-emerald-500/20">
<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-emerald-500 flex items-center justify-center rounded">
<Terminal class="text-black"/>
</div>

<div>
<h1 class="text-white font-bold font-display">TI-B <span class="text-emerald-500">2025</span></h1>
<p class="text-[10px] text-emerald-400 font-mono">UNPER TASIKMALAYA</p>
</div>

</div>

<div class="hidden md:flex gap-8 font-mono text-xs text-gray-400">
<a href="#home" class="hover:text-emerald-400">HOME</a>
<a href="#structure" class="hover:text-emerald-400">STRUCTURE</a>
<a href="#directory" class="hover:text-emerald-400">DIRECTORY</a>
<a href="#gallery" class="hover:text-emerald-400">GALLERY</a>
</div>

</div>
</nav>
</template>