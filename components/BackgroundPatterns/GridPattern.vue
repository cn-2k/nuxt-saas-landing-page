<script setup lang="ts">
import clsx from "clsx"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[number, number]>
  strokeDasharray?: number | string
  className?: string
  [key: string]: any
}

const props = defineProps<GridPatternProps>()

// Função para gerar um ID único
function generateUniqueId() {
  return `pattern-${Math.random().toString(36).substr(2, 9)}`
}

const patternId = generateUniqueId()
</script>

<template>
  <svg
    aria-hidden="true"
    :class="clsx(
      'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
      props.className,
    )"
    v-bind="props"
  >
    <defs>
      <pattern
        :id="patternId"
        :width="props.width || 40"
        :height="props.height || 40"
        patternUnits="userSpaceOnUse"
        :x="props.x || -1"
        :y="props.y || -1"
      >
        <path
          :d="`M.5 ${props.height || 40}V.5H${props.width || 40}`"
          fill="none"
          :stroke-dasharray="props.strokeDasharray || 0"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      :fill="`url(#${patternId})`"
    />
    <svg
      v-if="props.squares"
      :x="props.x || -1"
      :y="props.y || -1"
      class="overflow-visible"
    >
      <rect
        v-for="[x, y] in props.squares"
        :key="`${x}-${y}`"
        stroke-width="0"
        :width="(props.width || 40) - 1"
        :height="(props.height || 40) - 1"
        :x="x * (props.width || 40) + 1"
        :y="y * (props.height || 40) + 1"
      />
    </svg>
  </svg>

  <!-- <div class="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
    <GridPattern
      :squares="[
        [4, 4],
        [5, 1],
        [8, 2],
        [6, 6],
        [10, 5],
        [13, 3],
      ]"
      :class="clsx(
        '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]',
        'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
      )"
    />
  </div> -->
</template>
