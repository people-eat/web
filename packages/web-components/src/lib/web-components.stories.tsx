import type { Meta, StoryObj } from '@storybook/react';
import { WebComponents } from './web-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof WebComponents> = {
    component: WebComponents,
    title: 'WebComponents',
};
export default meta;
type Story = StoryObj<typeof WebComponents>;

export const Primary = {
    args: {},
};

export const Heading: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Welcome to WebComponents!/gi)).toBeTruthy();
    },
};
