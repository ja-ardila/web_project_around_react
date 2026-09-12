import type { ReactNode } from 'react';

export interface PopupConfig {
  title?: string;
  children: ReactNode;
  contentClassName?: string;
}

export interface ImagePopupConfig {
  name: string;
  link: string;
}
