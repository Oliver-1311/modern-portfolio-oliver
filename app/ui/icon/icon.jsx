import { classes } from '@/app/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from '@/public/vercel.svg';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
   console.log('sprites:', sprites);
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
       <use href={`./icons.svg#${icon}`} />
    </svg>
  );
});
