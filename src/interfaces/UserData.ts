export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface EditProfileFormData {
  name: string;
  about: string;
}

export interface AvatarFormData {
  avatar: string;
}
