import { useContext, useRef, useState } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import useFormValidation from '../../../../hooks/useFormValidation';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, isValid, validateInput, validateForm } =
    useFormValidation();

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (
      !validateForm(event.currentTarget) ||
      !avatarRef.current ||
      isSubmitting
    ) {
      return;
    }

    setIsSubmitting(true);

    try {
      await handleUpdateAvatar({ avatar: avatarRef.current.value });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
      onSubmit={(event) => void handleSubmit(event)}
      aria-busy={isSubmitting}
    >
      <input
        id="avatar-link-input"
        className={`popup__input popup__input_type_avatar ${
          errors.avatar ? 'popup__input_type_error' : ''
        }`}
        name="avatar"
        placeholder="Enlace a la imagen"
        type="url"
        required
        aria-describedby="avatar-link-input-error"
        aria-invalid={Boolean(errors.avatar)}
        ref={avatarRef}
        onChange={(event) => validateInput(event.currentTarget)}
        onBlur={(event) => validateInput(event.currentTarget)}
      />
      <span
        id="avatar-link-input-error"
        className={`popup__input-error avatar-link-input-error ${
          errors.avatar ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.avatar}
      </span>
      <button
        className={`button popup__button ${
          isSubmitting ? 'popup__button_loading' : ''
        }`}
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  );
}
