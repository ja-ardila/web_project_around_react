import { useContext, useState } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import useFormValidation from '../../../../hooks/useFormValidation';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialIsValid =
    name.length >= 2 &&
    name.length <= 40 &&
    description.length >= 2 &&
    description.length <= 200;
  const { errors, isValid, validateInput, validateForm } =
    useFormValidation(initialIsValid);

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!validateForm(event.currentTarget) || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await handleUpdateUser({ name, about: description });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
      onSubmit={(event) => void handleSubmit(event)}
      aria-busy={isSubmitting}
    >
      <input
        id="profile-name-input"
        className={`popup__input popup__input_type_name ${
          errors.name ? 'popup__input_type_error' : ''
        }`}
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
        aria-describedby="profile-name-input-error"
        aria-invalid={Boolean(errors.name)}
        value={name}
        onChange={(event) => {
          setName(event.currentTarget.value);
          validateInput(event.currentTarget);
        }}
        onBlur={(event) => validateInput(event.currentTarget)}
      />
      <span
        id="profile-name-input-error"
        className={`popup__input-error profile-name-input-error ${
          errors.name ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.name}
      </span>

      <input
        id="profile-description-input"
        className={`popup__input popup__input_type_description ${
          errors.description ? 'popup__input_type_error' : ''
        }`}
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength={2}
        maxLength={200}
        aria-describedby="profile-description-input-error"
        aria-invalid={Boolean(errors.description)}
        value={description}
        onChange={(event) => {
          setDescription(event.currentTarget.value);
          validateInput(event.currentTarget);
        }}
        onBlur={(event) => validateInput(event.currentTarget)}
      />
      <span
        id="profile-description-input-error"
        className={`popup__input-error profile-description-input-error ${
          errors.description ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.description}
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
