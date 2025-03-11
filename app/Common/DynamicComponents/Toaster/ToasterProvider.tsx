import React, { ReactNode, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import toastConfig from './Toast';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const memoizedToastConfig = useCallback(() => toastConfig, []);

  return (
    <>
      {children}
      <Toast config={memoizedToastConfig()} />
    </>
  );
};
