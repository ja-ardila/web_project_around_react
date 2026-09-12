import { useContext, useState } from 'react';

import CurrentUserContext from '../../../contexts/CurrentUserContext';
import type { CardData } from '../../../interfaces/CardData';

type CardProps = {
  card: CardData;
  onCardClick: (card: CardData) => void;
  handleCardLike: (card: CardData) => Promise<void>;
  handleCardDelete: (card: CardData) => void;
};

export default function Card({
  card,
  onCardClick,
  handleCardLike,
  handleCardDelete,
}: CardProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const { name, link } = card;
  const isOwn = card.owner === currentUser?._id;
  const cardLikeButtonClassName = `card__like-button ${
    card.isLiked ? 'card__like-button_is-active' : ''
  } ${isLikeLoading ? 'card__like-button_loading' : ''}`;

  async function handleLikeClick(): Promise<void> {
    if (isLikeLoading) {
      return;
    }

    setIsLikeLoading(true);

    try {
      await handleCardLike(card);
    } finally {
      setIsLikeLoading(false);
    }
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      {isOwn && (
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
          onClick={() => handleCardDelete(card)}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label={isLikeLoading ? 'Actualizando Me gusta' : 'Like card'}
          aria-busy={isLikeLoading}
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => void handleLikeClick()}
          disabled={isLikeLoading}
        />
      </div>
    </li>
  );
}
