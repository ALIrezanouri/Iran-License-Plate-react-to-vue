import { h } from 'vue';
import anzali from '../assets/images/anzali.svg';
import maku from '../assets/images/maku.svg';
import aras from '../assets/images/aras.svg';
import arvand from '../assets/images/arvand.svg';
import cHfz from '../assets/images/chfz.svg';
import kish from '../assets/images/kish.svg';
import qeshm from '../assets/images/qeshm.svg';

const createSvgComponent = (src: string) => (props: { width: string; height: string }) =>
  h('img', { src, alt: '', ...props });

export const AnzaliSVG = createSvgComponent(anzali);
export const MakuSVG = createSvgComponent(maku);
export const ArasSVG = createSvgComponent(aras);
export const ArvandSVG = createSvgComponent(arvand);
export const CHfzSVG = createSvgComponent(cHfz);
export const KishSVG = createSvgComponent(kish);
export const QeshmSVG = createSvgComponent(qeshm);
