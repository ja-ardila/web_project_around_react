import { useContext } from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import type { CardData, PopupConfig } from '../../types/types';
import Card from './Card/Card';
import DeleteConfirmation from './Popup/DeleteConfirmation/DeleteConfirmation';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import EditProfile from './Popup/EditProfile/EditProfile';
import ImagePopup from './Popup/ImagePopup/ImagePopup';
import NewCard from './Popup/NewCard/NewCard';
import Popup from './Popup/Popup';

interface MainProps {
  cards: CardData[];
  isInitialLoading: boolean;
  popup: PopupConfig | null;
  handleOpenPopup: (popup: PopupConfig) => void;
  handleClosePopup: () => void;
  handleCardLike: (card: CardData) => Promise<void>;
  handleCardDelete: (card: CardData) => Promise<void>;
}

function Main({
  cards,
  isInitialLoading,
  popup,
  handleOpenPopup,
  handleClosePopup,
  handleCardLike,
  handleCardDelete,
}: MainProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup: PopupConfig = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup: PopupConfig = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };

  const editAvatarPopup: PopupConfig = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar />,
    contentClassName: 'popup__content_type_avatar',
  };

  function handleCardClick(card: CardData): void {
    handleOpenPopup({
      children: (
        <ImagePopup
          image={{
            name: card.name,
            link: card.link,
          }}
        />
      ),
    });
  }

  function handleDeleteClick(card: CardData): void {
    handleOpenPopup({
      title: '¿Estás seguro/a?',
      contentClassName: 'popup__content_type_confirmation',
      children: (
        <DeleteConfirmation onConfirm={() => handleCardDelete(card)} />
      ),
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <button
          aria-label="Cambiar foto de perfil"
          className="profile__avatar-button"
          type="button"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt={currentUser?.name ?? 'Avatar'}
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section
        className="cards page__section"
        aria-busy={isInitialLoading}
      >
        {isInitialLoading ? (
          <p className="cards__status" role="status">
            Cargando lugares...
          </p>
        ) : (
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={handleCardClick}
                handleCardLike={handleCardLike}
                handleCardDelete={handleDeleteClick}
              />
            ))}
          </ul>
        )}
      </section>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          contentClassName={popup.contentClassName}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
