<script setup>

import { ref } from "vue"
import { Terminal, Shuffle, Menu, X } from "lucide-vue-next"

const open = ref(false)

const toggleMenu = ()=>{
open.value = !open.value
}

const closeMenu = ()=>{
open.value = false
}

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


<!-- DESKTOP MENU -->

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


<!-- HAMBURGER BUTTON -->

<button
@click="toggleMenu"
class="md:hidden text-emerald-400">

<Menu v-if="!open" />
<X v-else />

</button>

</div>


<!-- MOBILE MENU -->

<div
v-if="open"
class="md:hidden bg-[#070709] border-t border-emerald-500/20">

<div class="flex flex-col text-center font-mono text-sm text-gray-300">

<router-link
to="/"
@click="closeMenu"
class="py-4 border-b border-white/5 hover:text-emerald-400">

HOME

</router-link>

<a
href="/#structure"
@click="closeMenu"
class="py-4 border-b border-white/5 hover:text-emerald-400">

STRUCTURE

</a>

<a
href="/#directory"
@click="closeMenu"
class="py-4 border-b border-white/5 hover:text-emerald-400">

DIRECTORY

</a>

<a
href="/#gallery"
@click="closeMenu"
class="py-4 border-b border-white/5 hover:text-emerald-400">

GALLERY

</a>

<router-link
to="/spin"
@click="closeMenu"
class="py-4 flex justify-center items-center gap-2 text-emerald-400">

<Shuffle size="16"/>
SPIN

</router-link>

</div>

</div>

</nav>

</template>