import { Button } from '@/app/ui/button';
import { Icon } from '@/app/ui/icon';
import { Text } from '@/app/ui/text';
import { useTheme } from '@/app/ui/theme-provider';
import { Transition } from '@/app/ui/transition';
import { useRef, useState } from 'react';
import styles from './code.module.css';

export const Code = props => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang = props.className?.split('-')[1];

  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.code} data-theme={theme}>
      {!!lang && (
        <Text secondary size="s" className={styles.lang}>
          {lang}
        </Text>
      )}
      <pre ref={elementRef} {...props} />
      <div className={styles.actions}>
        <Button iconOnly onClick={handleCopy} aria-label="Copy">
          <span className={styles.copyIcon}>
            <Transition in={!copied}>
              {({ visible, nodeRef }) => (
                <Icon ref={nodeRef} icon="copy" data-visible={visible} />
              )}
            </Transition>
            <Transition in={copied}>
              {({ visible, nodeRef }) => (
                <Icon ref={nodeRef} icon="check" data-visible={visible} />
              )}
            </Transition>
          </span>
        </Button>
      </div>
    </div>
  );
};
