export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
};

export type ImagePopupConfig = {
  name?: string;
  link?: string;
};

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
};