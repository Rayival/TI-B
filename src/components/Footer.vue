<script setup>
import { Monitor, Instagram, Github } from "lucide-vue-next"
</script>

<template>

<footer class="py-16 px-6 border-t border-white/5 bg-[#060608]">

<div class="max-w-7xl mx-auto">

<!-- main footer -->

<div class="grid md:grid-cols-3 gap-12">

<!-- LEFT -->

<div class="space-y-4">

<div class="flex items-center gap-2">

<Monitor class="text-emerald-500"/>

<h2 class="text-2xl font-black text-white">
TI-B 2025
</h2>

</div>

<p class="text-slate-500 text-sm font-mono leading-relaxed">
Universitas Perjuangan Tasikmalaya <br>
<!-- Gedung Informatika Lt.2 <br> -->
Status : ONLINE_MODE
</p>

</div>


<!-- NAVIGATION -->

<div>

<h4 class="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
Navigation
</h4>

<ul class="space-y-2 text-sm text-slate-500 font-mono">

<li>
<a href="#home" class="hover:text-white transition">
./Home
</a>
</li>

<li>
<a href="#structure" class="hover:text-white transition">
./Structure
</a>
</li>

<li>
<a href="#directory" class="hover:text-white transition">
./Students
</a>
</li>

<li>
<a href="#gallery" class="hover:text-white transition">
./Gallery
</a>
</li>

</ul>

</div>


<!-- SOCIAL -->

<div>

<h4 class="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
Connect
</h4>

<div class="flex items-center gap-4">

<a
href="https://instagram.com/informatics25_class.b"
target="_blank"
class="text-slate-500 hover:text-white transition">

<Instagram size="20"/>

</a>

<a
href="#"
class="text-slate-500 hover:text-white transition">

<Github size="20"/>

</a>

</div>

<p class="text-slate-500 text-xs mt-4 font-mono">
@informatics25_class.b
</p>

</div>

</div>


<!-- bottom bar -->

<div class="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">

<p class="text-[11px] font-mono text-slate-600">
COMPILED BY RAYIVAL DEDE SAPUTRA © 2026
</p>

<div class="flex gap-4 text-[10px] font-mono text-slate-700">

<span>
LATENCY: 24ms
</span>

<span>
VERSION: 1.0.4-STABLE
</span>

</div>

</div>

</div>

</footer>

</template>