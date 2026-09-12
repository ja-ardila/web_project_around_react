import { useContext, useRef } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (avatarRef.current) {
      void handleUpdateAvatar({ avatar: avatarRef.current.value });
    }
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-link-input"
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="Enlace a la imagen"
        type="url"
        required
        aria-describedby="avatar-link-input-error"
        ref={avatarRef}
      />
      <span
        id="avatar-link-input-error"
        className="popup__input-error avatar-link-input-error"
      ></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
