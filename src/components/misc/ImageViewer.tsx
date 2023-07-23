/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { usePopup } from '@/contexts/Popup.context';
import React from 'react';

function ImageViewer() {
  const { imageViewer, deactivateImageViewer } = usePopup();

  return (imageViewer?.inHTML && (
    <div
      onClick={deactivateImageViewer}
      className={`
            ${
              imageViewer?.isActive
                ? 'visible opacity-100'
                : 'invisible opacity-0'
            }
          fixed left-0 top-0 z-[99999] flex h-full w-full items-center justify-center bg-black/70 p-10 transition-all duration-200`}
    >
      <img
        role="button"
        onClick={(e) => e.stopPropagation()}
        style={{
          objectFit: 'contain',
          maxWidth: imageViewer?.maxWidth || '100%',
          maxHeight: imageViewer?.maxHeight || '100%',
          aspectRatio: imageViewer.aspectRatio || 'auto',
        }}
        src={imageViewer.image}
        alt="Viewer"
      />
    </div>
  )) as JSX.Element | null;
}

export default ImageViewer;
