// providers.tsx
'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore, initializeAuth } from './store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    // Initialize auth state from localStorage
    storeRef.current?.dispatch(initializeAuth());
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}