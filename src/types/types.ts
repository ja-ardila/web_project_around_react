export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
  contentClassName?: string;
};

export type ImagePopupConfig = {
  name?: string;
  link?: string;
};

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (userData: EditProfileFormData) => Promise<void>;
  handleUpdateAvatar: (avatarData: AvatarFormData) => Promise<void>;
  handleAddPlaceSubmit: (cardData: CardFormData) => Promise<void>;
}

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface EditProfileFormData {
  name: string;
  about: string;
}

export interface AvatarFormData {
  avatar: string;
}

export interface CardFormData {
  name: string;
  link: string;
}

export type NewCardFormData = CardFormData;
