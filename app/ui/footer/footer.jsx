import { Link } from '@/app/ui/link';
import { Text } from '@/app/ui/text';
import { classes } from '@/app/utils/style';
import config from '@/app/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
