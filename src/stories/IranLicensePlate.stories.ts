import { Story, Meta } from '@storybook/vue3';
import IranLicensePlate from '../IranLicensePlate/IranLicensePlate.vue';

export default {
  title: 'Majid Alinejad/Iran License Plate/Regular',
  component: IranLicensePlate,
  args: {
    serial: 'IR17-141b31',
    isLoading: false,
    isUnknown: false,
    style: { width: '400px', fontSize: '1.3rem' },
  },
  argTypes: {},
  decorators: [
    (story) => ({
      template: '<div style="justify-content: center; align-items: center; display: flex; width: 100%; height: 100%;"><story /></div>',
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  components: { IranLicensePlate },
  setup() {
    return { args };
  },
  template: '<IranLicensePlate v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Loading = Template.bind({});
Loading.args = {
  serial: '',
  isLoading: true,
};

export const Unknown = Template.bind({});
Unknown.args = {
  serial: '',
  isUnknown: true,
};

export const RelativeResponsive = Template.bind({});
RelativeResponsive.args = {
  serial: 'IR17-141b31',
  style: { fontSize: '5vw' },
};

export const Taxi = Template.bind({});
Taxi.args = {
  serial: 'IR17-141T31',
};

export const Governmental = Template.bind({});
Governmental.args = {
  serial: 'IR17-141f31',
};

export const Personal = Template.bind({});
Personal.args = {
  serial: 'IR17-141h31',
};

export const Handicapped = Template.bind({});
Handicapped.args = {
  serial: 'IR17-141H31',
};

export const Public = Template.bind({});
Public.args = {
  serial: 'IR17-141A31',
};

export const Police = Template.bind({});
Police.args = {
  serial: 'IR17-141P31',
};

export const Sepah = Template.bind({});
Sepah.args = {
  serial: 'IR17-141C31',
};

export const Military = Template.bind({});
Military.args = {
  serial: 'IR17-141M31',
};

export const Ministry = Template.bind({});
Ministry.args = {
  serial: 'IR17-141Z31',
};

export const Headquarter = Template.bind({});
Headquarter.args = {
  serial: 'IR17-141F31',
};

export const Agriculture = Template.bind({});
Agriculture.args = {
  serial: 'IR17-141K31',
};

export const Temporary = Template.bind({});
Temporary.args = {
  serial: 'IR17-141G31-9902',
  style: { width: '400px', fontSize: '1.1rem' },
};

export const Diplomatic = Template.bind({});
Diplomatic.args = {
  serial: 'IR17-141D31',
};

export const Service = Template.bind({});
Service.args = {
  serial: 'IR17-141S31',
};
