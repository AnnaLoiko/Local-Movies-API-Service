import { useRef, useEffect } from 'react';

export default function useUpdateEffect(effect, deps) {
  const mounted = useRef();
  
  useEffect(() => {
    if (mounted.current) return effect();
    mounted.current = true;
    return undefined;
  }, deps);
}
