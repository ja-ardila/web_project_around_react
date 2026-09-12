import { useContext, useState } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    void handleUpdateUser({ name, about: description });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name-input"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
        aria-describedby="profile-name-input-error"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span
        id="profile-name-input-error"
        className="popup__input-error profile-name-input-error"
      ></span>

      <input
        id="profile-description-input"
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength={2}
        maxLength={200}
        aria-describedby="profile-description-input-error"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <span
        id="profile-description-input-error"
        className="popup__input-error profile-description-input-error"
      ></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
