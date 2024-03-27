import { useReducedMotion } from 'framer-motion';
import { useRouter} from 'next/router';
import { useCallback, useRef } from 'react';

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const router = useRouter();
  // const location = useLocation();
  // const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split('#')[1];
      const targetElement = document.getElementById(id);

      targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);

            if (router.asPath === window.location.pathname) {
            onDone?.();
            router.push(`${window.location.pathname}#${id}`, undefined, { scroll: false });
          }
        }, 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [router, reduceMotion]
  );

  return scrollToHash;
}
