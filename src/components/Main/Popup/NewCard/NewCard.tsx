import { useContext, useState } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    void handleAddPlaceSubmit({ name, link });
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        id="card-name-input"
        className="popup__input popup__input_type_card-name"
        name="name"
        placeholder="Título"
        type="text"
        required
        minLength={2}
        maxLength={30}
        aria-describedby="card-name-input-error"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span
        id="card-name-input-error"
        className="popup__input-error card-name-input-error"
      ></span>

      <input
        id="card-link-input"
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        type="url"
        required
        aria-describedby="card-link-input-error"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <span
        id="card-link-input-error"
        className="popup__input-error card-link-input-error"
      ></span>

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
