import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContactModal, { IContactModal } from './ContactModal';
import { mockContactModalProps } from './ContactModal.mocks';

export default {
  title: 'templates/ContactModal',
  component: ContactModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ContactModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactModal> = (args) => (
  <ContactModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContactModalProps.base,
} as IContactModal;
