<script setup>
import { Image as ImageIcon } from "lucide-vue-next"
import { ref } from "vue"

import img1 from "../assets/gallery/1.jpeg"
import img2 from "../assets/gallery/2.jpg"
import img3 from "../assets/gallery/3.jpeg"
import img4 from "../assets/gallery/4.jpeg"
import img5 from "../assets/gallery/5.jpg"
import img6 from "../assets/gallery/6.jpg"

const gallery = [img1, img2, img3, img4, img5, img6]

const activeImage = ref(null)
</script>

<template>

<section id="gallery" class="py-24 px-6 bg-[#08080a] relative">

<!-- background tech glow -->
<div class="absolute inset-0 opacity-[0.04] pointer-events-none
bg-[radial-gradient(circle_at_center,white,transparent_70%)]">
</div>

<div class="max-w-7xl mx-auto relative">

<!-- TITLE -->

<div class="flex items-center gap-3 mb-3">

<ImageIcon class="text-emerald-500"/>

<h3 class="text-2xl font-bold text-white uppercase tracking-widest font-mono">
Visual_Archive
</h3>

<span class="text-slate-500 font-mono text-xs ml-auto">
{{ gallery.length }} files
</span>

</div>

<p class="text-slate-500 font-mono text-xs mb-12">
> memory_database initialized // capturing moments of TI-B 2025
</p>

<!-- MASONRY GALLERY -->

<div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div
v-for="(img,i) in gallery"
:key="i"
@click="activeImage = img"
class="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 break-inside-avoid cursor-pointer
hover:border-emerald-500/40 transition-all duration-500
hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">

<img
:src="img"
loading="lazy"
class="w-full grayscale group-hover:grayscale-0 transition duration-1000 transform group-hover:scale-110"
/>

<!-- overlay -->

<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 p-6 flex flex-col justify-end">

<p class="text-emerald-400 font-mono text-[10px] uppercase mb-1">
Captured_Node_{{ String(i+1).padStart(2,"0") }}
</p>

<h4 class="text-white font-bold text-sm translate-y-2 group-hover:translate-y-0 transition">
Dokumentasi TI-B 2025
</h4>

<p class="text-slate-400 text-[10px] font-mono mt-1">
Memory_ID: {{ 3000 + i }}
</p>

</div>

</div>

</div>

</div>

<!-- LIGHTBOX PREVIEW -->

<div
v-if="activeImage"
class="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
@click="activeImage = null"
>

<img
:src="activeImage"
class="max-h-full max-w-full rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.3)]"
/>

</div>

</section>

</template>