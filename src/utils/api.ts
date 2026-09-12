import type {
  AvatarFormData,
  CardFormData,
  CardData,
  EditProfileFormData,
  UserData,
} from '../interfaces';

interface ApiOptions {
  baseUrl: string;
  headers: Record<string, string>;
}

class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ baseUrl, headers }: ApiOptions) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const responseText = await response.text();

    if (!responseText) {
      return undefined as T;
    }

    return JSON.parse(responseText) as T;
  }

  public async getUserInfo(): Promise<UserData> {
    return await this.request<UserData>('/users/me');
  }

  public async getInitialCards(): Promise<CardData[]> {
    return await this.request<CardData[]>('/cards/');
  }

  public async updateUserInfo(
    userData: EditProfileFormData,
  ): Promise<UserData> {
    return await this.request<UserData>('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  public async updateUserAvatar(
    avatarData: AvatarFormData,
  ): Promise<UserData> {
    return this.updateAvatar(avatarData);
  }

  public async updateAvatar(avatarData: AvatarFormData): Promise<UserData> {
    return await this.request<UserData>('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify(avatarData),
    });
  }

  public async addCard(cardData: CardFormData): Promise<CardData> {
    return await this.request<CardData>('/cards/', {
      method: 'POST',
      body: JSON.stringify(cardData),
    });
  }

  public async changeLikeStatus(
    cardId: string,
    isLiked: boolean,
  ): Promise<CardData> {
    return isLiked ? this.removeLike(cardId) : this.addLike(cardId);
  }

  public async addLike(cardId: string): Promise<CardData> {
    return await this.request<CardData>(`/cards/${cardId}/likes`, {
      method: 'PUT',
    });
  }

  public async removeLike(cardId: string): Promise<CardData> {
    return await this.request<CardData>(`/cards/${cardId}/likes`, {
      method: 'DELETE',
    });
  }

  public async deleteCard(cardId: string): Promise<void> {
    return await this.request<void>(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  }
}

export const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1',
  headers: {
    authorization: '0643131e-75cd-455c-bdf0-2b7687c050c4',
    'Content-Type': 'application/json',
  },
});

export default api;
