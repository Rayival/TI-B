<script setup>
import { Cpu, Users, Code, Calendar } from "lucide-vue-next"

const metrics = [
{
icon: Users,
value: "24",
label: "Active Nodes"
},
{
icon: Code,
value: "TI-B",
label: "Class ID"
},
{
icon: Calendar,
value: "2025",
label: "Generation"
},
{
icon: Cpu,
value: "Perjuangan",
label: "University"
}
]
</script>

<template>

<section class="py-20 md:py-24 px-4 sm:px-6 bg-[#08080a]">

<div class="max-w-7xl mx-auto">

<!-- title -->

<div class="text-center mb-12 md:mb-16">

<p class="text-emerald-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-2">
/ System Metrics
</p>

<h3 class="text-3xl md:text-4xl font-bold text-white">
Class Statistics
</h3>

</div>

<!-- metrics -->

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div
v-for="(metric,i) in metrics"
:key="i"
class="group bg-[#0d0d12] border border-white/5 rounded-xl p-6 md:p-8 text-center hover:border-emerald-500/40 transition">

<component
:is="metric.icon"
class="mx-auto text-emerald-400 mb-3 md:mb-4"
:size="28"
/>

<p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
{{ metric.value }}
</p>

<p class="text-gray-500 text-xs md:text-sm font-mono mt-2">
{{ metric.label }}
</p>

</div>

</div>

</div>

</section>

</template>