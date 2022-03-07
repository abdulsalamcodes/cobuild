import React, { createContext, useEffect, useState, useContext } from 'react';
import Toast from 'react-native-toast-message';

type Position = 'top' | 'bottom';

type FunctionType = (text1: string, position?: Position, text2?: string) => void;

interface ToastContextProviderInterface {
  children: React.ReactNode;
}

interface ToastStateInterface {
  type: string;
  text1: string;
  text2?: string;
  position?: Position;
}

interface ToastContextValueInterface {
  showError: FunctionType;
  showInfo: FunctionType;
  showSucces: FunctionType;
}

const ToastContext = createContext<ToastContextValueInterface | null>(null);

export const ToastContexProvider = ({ children }: ToastContextProviderInterface) => {
  const [toast, setToast] = useState<ToastStateInterface | null>(null);

  useEffect(() => {
    console.log(toast);
    if (!toast) return;


    Toast.show({
      type: toast.type,
      text1: toast.text1,
      text2: toast.text2,
      position: toast.position,
    });
  }, [toast]);

  const showError = (text1: string, position?: Position, text2?: string) => {
    setToast({
      type: 'error',
      text1,
      text2,
      position,
    })
  }

  const showInfo = (text1: string, position?: Position, text2?: string) => {
    setToast({
      type: 'success',
      text1,
      text2,
      position,
    })
  }

  const showSucces = (text1: string, position?: Position, text2?: string) => {
    setToast({
      type: 'error',
      text1,
      text2,
      position,
    })
  }

  const values = {
    showError,
    showInfo,
    showSucces,
  }

  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  )
}

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    console.log('toastContext must be used inside a ToastContext provider');
    return undefined;
  }

  return toastContext;
}