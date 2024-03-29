import { Input } from '@/app/ui/input';
import { useFormInput } from '@/app/hooks';

export default {
  title: 'Input',
};

const Story = args => {
  const exampleValue = useFormInput('');
  return (
    <div style={{ maxWidth: 400, width: '100%', padding: 30 }}>
      <Input {...exampleValue} {...args} />
    </div>
  );
};

export const Text = Story.bind({});

Text.args = {
  label: 'Your name',
  type: 'text',
};

export const Multiline = Story.bind({});

Multiline.args = {
  label: 'Type a message',
  type: 'text',
  multiline: true,
};
