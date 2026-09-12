import { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CurrentUserContext from './contexts/CurrentUserContext';
import type { CardData, PopupConfig, UserData } from './types/types';
import api from './utils/api';

function App(): React.JSX.Element {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  useEffect(() => {
    async function loadInitialData(): Promise<void> {
      try {
        const [userData, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards(),
        ]);

        setCurrentUser(userData);
        setCards(initialCards);
      } catch (error) {
        console.error(error);
      }
    }

    void loadInitialData();
  }, []);

  function handleOpenPopup(selectedPopup: PopupConfig): void {
    setPopup(selectedPopup);
  }

  function handleClosePopup(): void {
    setPopup(null);
  }

  async function handleCardLike(card: CardData): Promise<void> {
    try {
      const apiCall = card.isLiked
        ? api.removeLike(card._id)
        : api.addLike(card._id);
      const updatedCard = await apiCall;

      setCards((currentCards) =>
        currentCards.map((currentCard) =>
          currentCard._id === card._id ? updatedCard : currentCard,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card: CardData): Promise<void> {
    try {
      await api.deleteCard(card._id);

      setCards((currentCards) =>
        currentCards.filter((currentCard) => currentCard._id !== card._id),
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
