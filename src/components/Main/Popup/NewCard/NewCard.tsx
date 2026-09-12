import { useContext, useState } from 'react';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import useFormValidation from '../../../../hooks/useFormValidation';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, isValid, validateInput, validateForm } =
    useFormValidation();

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!validateForm(event.currentTarget) || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await handleAddPlaceSubmit({ name, link });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      noValidate
      onSubmit={(event) => void handleSubmit(event)}
      aria-busy={isSubmitting}
    >
      <input
        id="card-name-input"
        className={`popup__input popup__input_type_card-name ${
          errors.name ? 'popup__input_type_error' : ''
        }`}
        name="name"
        placeholder="Título"
        type="text"
        required
        minLength={2}
        maxLength={30}
        aria-describedby="card-name-input-error"
        aria-invalid={Boolean(errors.name)}
        value={name}
        onChange={(event) => {
          setName(event.currentTarget.value);
          validateInput(event.currentTarget);
        }}
        onBlur={(event) => validateInput(event.currentTarget)}
      />
      <span
        id="card-name-input-error"
        className={`popup__input-error card-name-input-error ${
          errors.name ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.name}
      </span>

      <input
        id="card-link-input"
        className={`popup__input popup__input_type_url ${
          errors.link ? 'popup__input_type_error' : ''
        }`}
        name="link"
        placeholder="Enlace a la imagen"
        type="url"
        required
        aria-describedby="card-link-input-error"
        aria-invalid={Boolean(errors.link)}
        value={link}
        onChange={(event) => {
          setLink(event.currentTarget.value);
          validateInput(event.currentTarget);
        }}
        onBlur={(event) => validateInput(event.currentTarget)}
      />
      <span
        id="card-link-input-error"
        className={`popup__input-error card-link-input-error ${
          errors.link ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.link}
      </span>

      <button
        className={`button popup__button ${
          isSubmitting ? 'popup__button_loading' : ''
        }`}
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? 'Creando...' : 'Crear'}
      </button>
    </form>
  );
}
