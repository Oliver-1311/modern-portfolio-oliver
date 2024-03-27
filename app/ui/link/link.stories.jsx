import { Link } from '@/app/ui/link';
import { StoryContainer } from '@/.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://olivermacedo.com">Primary link</Link>
    <Link secondary href="https://olivermacedo.com">
      Secondary link
    </Link>
  </StoryContainer>
);
