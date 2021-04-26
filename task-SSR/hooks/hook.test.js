import { renderHook, act } from '@testing-library/react-hooks'
import useToggle from './useToggle'


test('should useToggle', () => {
  const  {result}  = renderHook(() => useToggle(false));

  expect(result.current[0]).toBe(false);
  expect(typeof result.current[1]).toBe('function');

  act(() => {
    result.current[1]()
  });

  expect(result.current[0]).toBe(true);
})