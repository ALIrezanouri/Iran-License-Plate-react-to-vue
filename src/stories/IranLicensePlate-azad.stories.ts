import { Story, Meta } from '@storybook/vue3';
import IranLicensePlate from '../IranLicensePlate/IranLicensePlate.vue';

export default {
  title: 'Majid Alinejad/Iran License Plate/Free Cities',
  component: IranLicensePlate,
  args: {
    serial: 'KISH11-78654',
    isLoading: false,
    isUnknown: false,
    style: { width: '400px', fontSize: '1.3rem' },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => ({
  components: { IranLicensePlate },
  setup() {
    return { args };
  },
  template: '<IranLicensePlate v-bind="args" />',
});

export const Kish = Template.bind({});
Kish.args = {
  serial: 'KISH11-78654',
};
export const KishPublic = Template.bind({});
KishPublic.args = {
  serial: 'KISH12-78654',
};
export const maku = Template.bind({});
maku.args = {
  serial: 'MAKU51-45223',
};
export const makuPublic = Template.bind({});
makuPublic.args = {
  serial: 'MAKU52-45223',
};
export const Arvand = Template.bind({});
Arvand.args = {
  serial: 'ARVAND61-55436',
};
export const ArvandPublic = Template.bind({});
ArvandPublic.args = {
  serial: 'ARVAND62-55436',
};
export const Aras = Template.bind({});
Aras.args = {
  serial: 'ARAS71-77124',
};
export const ArasPublic = Template.bind({});
ArasPublic.args = {
  serial: 'ARAS72-77124',
};
export const Anzali = Template.bind({});
Anzali.args = {
  serial: 'ANZALI31-33425',
};
export const AnzaliPublic = Template.bind({});
AnzaliPublic.args = {
  serial: 'ANZALI32-33425',
};
export const Qeshm = Template.bind({});
Qeshm.args = {
  serial: 'QESHM61-98746',
};
export const QeshmPublic = Template.bind({});
QeshmPublic.args = {
  serial: 'QESHM62-98746',
};
export const Chahbahar = Template.bind({});
Chahbahar.args = {
  serial: 'CHFZ91-87985',
};
export const ChahbaharPublic = Template.bind({});
ChahbaharPublic.args = {
  serial: 'CHFZ92-87985',
};
