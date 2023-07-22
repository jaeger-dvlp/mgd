import React from 'react';
import Wait from '@/common/utils/Wait.util';

import {
  IAlertPopup,
  TPopupStatus,
  IConfirmPopup,
  IPopupContext,
} from '@/types/boilerplate.types';

const PopupContext = React.createContext<IPopupContext>({
  alertPopup: null,
  confirmPopup: null,
  imageViewer: null,
  activateAlertPopup: () => {},
  deactivateAlertPopup: () => {},
  activateConfirmPopup: () => {},
  deactivateConfirmPopup: () => {},
  activateImageViewer: () => {},
  deactivateImageViewer: () => {},
});

export default function PopupWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [alertPopup, setAlertPopup] = React.useState<IAlertPopup>({
    inHTML: false,
    isActive: false,
    status: 'loading',
    text: '',
    onConfirm: () => {},
  });

  const [confirmPopup, setConfirmPopup] = React.useState<IConfirmPopup>({
    inHTML: false,
    isActive: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  });

  const [imageViewer, setImageViewer] = React.useState<{
    inHTML: boolean;
    isActive: boolean;
    image: string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    aspectRatio?: string;
  }>({
    inHTML: false,
    isActive: false,
    image: '',
    maxWidth: undefined,
    maxHeight: undefined,
    aspectRatio: undefined,
  });

  const activateImageViewer = React.useCallback(
    async ({
      image,
      maxWidth,
      maxHeight,
      aspectRatio,
    }: {
      image: string;
      maxWidth?: number | string;
      maxHeight?: number | string;
      aspectRatio?: string;
    }) => {
      setImageViewer({
        inHTML: true,
        isActive: false,
        image,
        maxWidth,
        maxHeight,
        aspectRatio,
      });
      await Wait(50);
      setImageViewer({
        inHTML: true,
        isActive: true,
        image,
        maxWidth,
        maxHeight,
        aspectRatio,
      });
    },
    [imageViewer]
  );

  const deactivateImageViewer = React.useCallback(async () => {
    setImageViewer((prev) => ({
      ...prev,
      isActive: false,
    }));

    await Wait(250);
    setImageViewer({
      inHTML: false,
      isActive: false,
      image: '',
      maxWidth: 0,
      aspectRatio: '1:1',
    });
  }, [imageViewer]);

  const deactivateAlertPopup = React.useCallback(async () => {
    setAlertPopup((prev) => ({
      ...prev,
      isActive: false,
    }));

    await Wait(500);
    setAlertPopup({
      inHTML: false,
      isActive: false,
      status: 'loading',
      text: '',
    });
  }, [alertPopup]);

  const activateAlertPopup = React.useCallback(
    async (text: string, status: TPopupStatus, onConfirm?: () => void) => {
      setAlertPopup({
        inHTML: true,
        isActive: false,
        status,
        text,
        onConfirm,
      });

      await Wait(50);
      setAlertPopup({
        inHTML: true,
        isActive: true,
        status,
        text,
        onConfirm,
      });
    },
    [alertPopup]
  );

  const activateConfirmPopup = React.useCallback(
    async (text: string, onConfirm?: () => void, onCancel?: () => void) => {
      setConfirmPopup({
        inHTML: true,
        isActive: false,
        text,
        onConfirm,
        onCancel,
      });

      await Wait(50);
      setConfirmPopup({
        inHTML: true,
        isActive: true,
        text,
        onConfirm,
        onCancel,
      });
    },
    [confirmPopup]
  );

  const deactivateConfirmPopup = React.useCallback(async () => {
    setConfirmPopup((prev) => ({
      ...prev,
      isActive: false,
    }));

    await Wait(500);
    setConfirmPopup({
      inHTML: false,
      isActive: false,
      text: '',
      onConfirm: () => {},
      onCancel: () => {},
    });
  }, [confirmPopup]);

  const value: IPopupContext = React.useMemo(
    () => ({
      alertPopup,
      confirmPopup,
      imageViewer,
      activateAlertPopup,
      deactivateAlertPopup,
      activateConfirmPopup,
      deactivateConfirmPopup,
      activateImageViewer,
      deactivateImageViewer,
    }),
    [alertPopup, confirmPopup, imageViewer]
  );

  React.useEffect(() => {
    if (alertPopup.isActive || confirmPopup.isActive) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [alertPopup, confirmPopup]);

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
}

export function usePopup(): IPopupContext {
  const context = React.useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupWrapper');
  }
  return context;
}
