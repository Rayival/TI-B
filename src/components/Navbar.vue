<script setup>
import { Terminal, Shuffle } from "lucide-vue-next"
</script>

<template>

<nav class="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-emerald-500/20">

<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<!-- LOGO -->

<div class="flex items-center gap-3">

<div class="w-10 h-10 bg-emerald-500 flex items-center justify-center rounded shadow-[0_0_10px_rgba(16,185,129,0.5)]">
<Terminal class="text-black"/>
</div>

<div>
<h1 class="text-white font-bold font-display">
TI-B <span class="text-emerald-500">2025</span>
</h1>

<p class="text-[10px] text-emerald-400 font-mono">
UNPER TASIKMALAYA
</p>
</div>

</div>

<!-- MENU -->

<div class="hidden md:flex items-center gap-8 font-mono text-xs text-gray-400">

<router-link to="/" class="hover:text-emerald-400 transition">
HOME
</router-link>

<a href="/#structure" class="hover:text-emerald-400 transition">
STRUCTURE
</a>

<a href="/#directory" class="hover:text-emerald-400 transition">
DIRECTORY
</a>

<a href="/#gallery" class="hover:text-emerald-400 transition">
GALLERY
</a>

<router-link
to="/spin"
class="flex items-center gap-2 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded hover:bg-emerald-500/10 hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition"
>

<Shuffle size="14"/>
SPIN

</router-link>

</div>

</div>

</nav>

</template>