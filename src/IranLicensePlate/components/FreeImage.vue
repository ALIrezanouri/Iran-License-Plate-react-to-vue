<template>
  <component :is="regionComponent" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  AnzaliSVG,
  ArasSVG,
  ArvandSVG,
  CHfzSVG,
  KishSVG,
  MakuSVG,
  QeshmSVG,
} from './images';

const props = defineProps<{
  region?: 'KISH' | 'QESHM' | 'MAKU' | 'ARVAND' | 'ANZALI' | 'ARAS' | 'CHFZ';
}>();

const regionComponent = computed(() => {
  switch (props.region) {
    case 'ANZALI':
      return AnzaliSVG;
    case 'ARAS':
      return ArasSVG;
    case 'ARVAND':
      return ArvandSVG;
    case 'CHFZ':
      return CHfzSVG;
    case 'KISH':
      return KishSVG;
    case 'MAKU':
      return MakuSVG;
    case 'QESHM':
      return QeshmSVG;
    default:
      return null;
  }
});

const width = computed(() => (props.region === 'CHFZ' ? '70%' : '100%'));
const height = computed(() => (props.region === 'CHFZ' ? '70%' : '100%'));
</script>
