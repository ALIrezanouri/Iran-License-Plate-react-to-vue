import { mount } from '@vue/test-utils';
import IranLicensePlate from '../IranLicensePlate/IranLicensePlate.vue';

describe('IranLicensePlate', () => {
  it('renders correctly with a valid serial', () => {
    const wrapper = mount(IranLicensePlate, {
      props: {
        serial: 'IR17-141b31',
      },
    });
    expect(wrapper.text()).not.toContain('Wrong Serial?');
  });

  it('shows "Wrong Serial?" for an invalid serial', () => {
    const wrapper = mount(IranLicensePlate, {
      props: {
        serial: 'invalid-serial',
      },
    });
    expect(wrapper.text()).toContain('Wrong Serial?');
  });
});
