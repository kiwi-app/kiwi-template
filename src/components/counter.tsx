'use client';

import { changeCounter } from '@/store/kiwi-slice';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter({ initialValue }: { initialValue: number }) {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.kiwi);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(changeCounter(initialValue));
    setMounted(true);
  }, [initialValue]);

  if (!mounted) return null;
  return (
    <div className="flex gap-4 justify-between">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          dispatch(changeCounter(count - 1));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <span className="text-primary text-xl">{count}</span>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          dispatch(changeCounter(count + 1));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}
