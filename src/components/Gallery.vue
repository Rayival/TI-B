<script setup>
import { Image as ImageIcon } from "lucide-vue-next"

import img1 from "../assets/gallery/1.jpeg"
import img2 from "../assets/gallery/2.jpg"
import img3 from "../assets/gallery/3.jpeg"
import img4 from "../assets/gallery/4.jpeg"
import img5 from "../assets/gallery/5.jpg"
import img6 from "../assets/gallery/6.jpg"

const gallery = [img1, img2, img3, img4, img5, img6]
</script>

<template>

<section id="gallery" class="py-24 px-6 bg-[#08080a]">

<div class="max-w-7xl mx-auto">

<!-- title -->

<div class="flex items-center gap-3 mb-12">

<ImageIcon class="text-emerald-500"/>

<h3 class="text-2xl font-bold text-white uppercase tracking-widest font-mono">
Visual_Archive
</h3>

</div>

<!-- masonry gallery -->

<div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div
v-for="(img,i) in gallery"
:key="i"
class="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 break-inside-avoid">

<img
:src="img"
class="w-full grayscale group-hover:grayscale-0 transition duration-1000 transform group-hover:scale-105"
/>

<!-- overlay -->

<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 p-6 flex flex-col justify-end">

<p class="text-emerald-400 font-mono text-[10px] uppercase mb-1">
Captured_Node_{{ i+1 }}
</p>

<h4 class="text-white font-bold text-sm">
Dokumentasi TI-B 2025
</h4>

</div>

</div>

</div>

</div>

</section>

</template>