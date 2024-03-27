import { Monogram } from '@/app/ui/monogram';
import { StoryContainer } from '@/.storybook/story-container';

export default {
  title: 'Monogram',
};

export const Default = () => (
  <StoryContainer>
    <Monogram highlight />
  </StoryContainer>
);
