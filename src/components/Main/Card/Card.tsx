import { useContext } from 'react';

import CurrentUserContext from '../../../contexts/CurrentUserContext';
import type { CardData } from '../../../types/types.ts';

type CardProps = {
  card: CardData;
  onCardClick: (card: CardData) => void;
  handleCardLike: (card: CardData) => Promise<void>;
  handleCardDelete: (card: CardData) => Promise<void>;
};

export default function Card({
  card,
  onCardClick,
  handleCardLike,
  handleCardDelete,
}: CardProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link } = card;
  const isOwn = card.owner === currentUser?._id;
  const cardLikeButtonClassName = `card__like-button ${
    card.isLiked ? 'card__like-button_is-active' : ''
  }`;

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
          onClick={() => void handleCardDelete(card)}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => void handleCardLike(card)}
        />
      </div>
    </li>
  );
}
