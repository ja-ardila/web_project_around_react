import type { CardFormData } from './CardData';
import type {
  AvatarFormData,
  EditProfileFormData,
  UserData,
} from './UserData';

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (userData: EditProfileFormData) => Promise<void>;
  handleUpdateAvatar: (avatarData: AvatarFormData) => Promise<void>;
  handleAddPlaceSubmit: (cardData: CardFormData) => Promise<void>;
}
