<template>
  <div v-if="!serial || isUnknown || isLoading" :class="containerClasses" :style="containerStyles">
    <div class="ip-col-span-11 ip-flex ip-min-h-0">
      <div class="ip-aspect-square ip-border-black ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
        <IranSvg class="ip-w-full ip-h-full ip-aspect-[0.5/1] ip-px-2 ip-pt-0.5" />
        <div class="ip-grid ip-aspect-[1.5/1] ip-h-fit ip-px-1">
          <p class="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold ip-text-center">--</p>
        </div>
      </div>
      <div class="ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
        <p>---</p>
        <div class="ip-flex ip-flex-col ip-h-full ip-leading-none ip-justify-center">
          <p class="ip-leading-[0.6em]">
            <SpinnerSvg v-if="isLoading" width="1.2em" height="1.2em" />
            <template v-else>?</template>
          </p>
        </div>
        <p>--</p>
      </div>
    </div>
    <div class="ip-col-span-1 ip-p-0.5 ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em]">
      <img :src="IranFlag" alt="Flag" class="p-[0.1rem] pt-[0.2rem]" />
      <div dir="ltr" class="ip-w-full ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white">
        <p>I.R.</p>
        <p>IRAN</p>
      </div>
    </div>
  </div>

  <div v-else-if="regularMatch" :class="containerClasses" :style="containerStyles">
    <div class="ip-col-span-11 ip-flex ip-min-h-0">
      <div class="ip-aspect-square ip-border-black ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
        <IranSvg class="ip-w-full ip-h-full ip-aspect-[0.5/1] ip-px-2 ip-pt-0.5" />
        <div class="ip-grid ip-aspect-[1.5/1] ip-h-fit ip-px-1">
          <p class="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold ip-text-center">
            {{ regularMatch.groups.CityNumber }}
          </p>
          <p v-if="regularMatch.groups.Expire" :style="{ borderColor: info.text }" class="ip-text-[0.8em] ip-leading-none ip-border-t-2 ip-pt-1 ip-font-semibold ip-text-center">
            {{ regularMatch.groups.Expire.slice(0, 2) }}/{{ regularMatch.groups.Expire.slice(2) }}
          </p>
        </div>
      </div>
      <div class="ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
        <p>{{ regularMatch.groups.Section2 }}</p>
        <div class="ip-flex ip-flex-col ip-h-full ip-leading-none ip-justify-center">
          <p class="ip-w-full ip-font-extralight ip-text-[0.4em]" style="font-family: sans-serif">
            {{ info.type === 'taxi' ? 'TAXI' : '' }}
          </p>
          <img v-if="info.type === 'handicapped'" :src="disableSvg" class="ip-w-[1em] ip-h-[1em]" />
          <p v-else class="ip-leading-[0.6em]">{{ info.letter }}</p>
        </div>
        <p>{{ regularMatch.groups.Section4 }}</p>
      </div>
    </div>
    <div class="ip-col-span-1 ip-p-0.5 ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em]">
      <img :src="IranFlag" alt="Flag" class="p-[0.1rem] pt-[0.2rem]" />
      <div dir="ltr" class="ip-w-full ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white">
        <p>I.R.</p>
        <p>IRAN</p>
      </div>
    </div>
  </div>

  <div v-else-if="freeMatch" :class="containerClasses" :style="containerStyles">
    <div class="ip-grid ip-aspect-[10/5] ip-w-full ip-col-span-9">
      <div class="ip-grid ip-grid-cols-12 ip-aspect-[10/4] ip-tracking-widest" style="font-family: IranSansNumber">
        <div class="ip-col-span-5 ip-border-black ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
          <div class="ip-grid ip-h-full ip-text-[1.7em]">
            <p class="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold ip-text-center">
              {{ freeMatch.groups.CityNumber }}
            </p>
          </div>
        </div>
        <div class="ip-col-span-7 ip-grow ip-text-[2.5em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
          <p>{{ freeMatch.groups.Section2 }}</p>
        </div>
      </div>
      <div class="ip-grid ip-grid-cols-12 ip-aspect-[11/2] ip-border-black ip-border-t-2">
        <div class="ip-col-span-5 ip-border-black ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
          <div class="ip-grid ip-h-full ip-text-[1.4em]">
            <p class="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold ip-text-center">
              {{ freeMatch.groups.CityNumber }}
            </p>
          </div>
        </div>
        <div class="ip-col-span-7 ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
          <p>{{ freeMatch.groups.Section2 }}</p>
        </div>
      </div>
    </div>
    <div class="ip-col-span-3 ip-p-0.5 ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em]">
      <div class="ip-flex ip-w-full ip-gap-2">
        <div dir="ltr" class="ip-w-full ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white">
          <p>I.R.</p>
          <p>IRAN</p>
        </div>
        <img :src="IranFlag" alt="Flag" class="p-[0.1rem] pt-[0.2rem] ip-flex ip-w-1/2" />
      </div>
      <div class="ip-w-full ip-h-full ip-flex ip-items-center ip-justify-center ip-p-4">
        <FreeImage :region="freeMatch.groups.region" />
      </div>
      <div dir="ltr" class="ip-w-full ip-text-center ip-text-[1em] ip-items-center ip-mt-auto ip-text-white">
        <p class="ip-text-center">{{ freeMatch.groups.region === 'CHFZ' ? 'CH.F.Z' : freeMatch.groups.region }}</p>
      </div>
    </div>
  </div>

  <template v-else>Wrong Serial?</template>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import IranSvg from './components/IranSvg.vue';
import disableSvg from './assets/disable.svg';
import IranFlag from './assets/Flag.png';
import FreeImage from './components/FreeImage.vue';
import SpinnerSvg from './components/Spinner.vue';

const props = defineProps<{
  serial?: string;
  isLoading?: boolean;
  isUnknown?: boolean;
  class?: string;
  style?: object;
}>();

const iranRegularRGX = /(?<region>\w{2})(?<CityNumber>\d{2})-(?<Section2>\d{3})(?<Letter>\w)(?<Section4>\d{2})(-(?<Expire>\d{4}))?/;
const iranFreeRGX = /(?<region>\w*)(?<CityNumber>\d{2})-(?<Section2>\d{5})/;

const regularMatch = computed(() => props.serial?.match(iranRegularRGX));
const freeMatch = computed(() => props.serial?.match(iranFreeRGX));
const info = computed(() => getPlaqueInfo(regularMatch.value?.groups?.Letter));

const isPublic = computed(() => {
  const cityNumber = freeMatch.value?.groups?.CityNumber;
  return cityNumber ? +cityNumber % 2 !== 0 : true;
});

const containerClasses = computed(() => [
  'ip-grid ip-min-w-[175px] ip-border-black ip-border-2 ip-rounded-lg ip-relative ip-overflow-hidden ip-grid-cols-12 ip-w-full ip-aspect-[18/4] ip-text-[1em]',
  { 'ip-animate-pulse ip-duration-100': props.isLoading },
  props.class,
]);

const containerStyles = computed(() => ({
  fontFamily: 'IranSansNumber',
  backgroundColor: getBackgroundColor(),
  color: getTextColor(),
  minWidth: '175px',
  ...props.style,
}));

function getBackgroundColor() {
  if (!props.serial || props.isUnknown || props.isLoading) return '#ffffff';
  if (regularMatch.value) return info.value.bg;
  if (freeMatch.value) return isPublic.value ? '#ffffff' : '#ffca0b';
  return '#ffffff';
}

function getTextColor() {
  if (!props.serial || props.isUnknown || props.isLoading) return '#000000';
  if (regularMatch.value) return info.value.text;
  return '#000000';
}

function getPlaqueInfo(letter?: string) {
  const governmental = () => ({ type: 'governmental', letter: 'الف', bg: '#ee161f', text: '#ffffff' });
  const personal = (farsiLetter: string) => ({ type: 'personal', letter: farsiLetter, bg: '#ffffff', text: '#000000' });
  const handicapped = () => ({ type: 'handicapped', letter: 'ژ', bg: '#ffffff', text: '#000000' });
  const temporary = () => ({ type: 'temporary', letter: 'گ', bg: '#ffffff', text: '#000000' });
  const taxi = () => ({ type: 'taxi', letter: 'ت', bg: '#ffca0b', text: '#000000' });
  const publicPlaque = () => ({ type: 'public', letter: 'ع', bg: '#ffca0b', text: '#000000' });
  const agriculture = () => ({ type: 'agriculture', letter: 'ک', bg: '#ffca0b', text: '#000000' });
  const police = () => ({ type: 'police', letter: 'پ', bg: '#005224', text: '#ffffff' });
  const sepah = () => ({ type: 'sepah', letter: 'ث', bg: '#005224', text: '#ffffff' });
  const military = () => ({ type: 'military', letter: 'ش', bg: '#cfa260', text: '#000000' });
  const headquarter = () => ({ type: 'headquarter', letter: 'ف', bg: '#0079c1', text: '#ffffff' });
  const ministry = () => ({ type: 'ministry', letter: 'ز', bg: '#0079c1', text: '#ffffff' });
  const diplomatic = () => ({ type: 'diplomatic', letter: 'D', bg: '#00a2e8', text: '#000000' });
  const service = () => ({ type: 'service', letter: 'S', bg: '#00a2e8', text: '#000000' });

  const AvailableLetters = {
    f: governmental,
    b: () => personal('ب'),
    j: () => personal('ج'),
    d: () => personal('د'),
    s: () => personal('س'),
    c: () => personal('ص'),
    t: () => personal('ط'),
    q: () => personal('ق'),
    l: () => personal('ل'),
    m: () => personal('م'),
    n: () => personal('ن'),
    v: () => personal('و'),
    h: () => personal('هـ'),
    y: () => personal('ی'),
    H: handicapped,
    T: taxi,
    A: publicPlaque,
    P: police,
    C: sepah,
    M: military,
    Z: ministry,
    F: headquarter,
    K: agriculture,
    G: temporary,
    D: diplomatic,
    S: service,
  };

  return (AvailableLetters[letter as keyof typeof AvailableLetters] || (() => personal('ب')))();
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
