import { useState } from 'react';

interface DeleteConfirmationProps {
  onConfirm: () => Promise<void>;
}

export default function DeleteConfirmation({
  onConfirm,
}: DeleteConfirmationProps): React.JSX.Element {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (isDeleting) {
      return;
    }

    setIsDeleting(true);

    try {
      await onConfirm();
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <form
      className="popup__form popup__form_type_confirmation"
      onSubmit={(event) => void handleSubmit(event)}
    >
      <button
        className={`button popup__button popup__button_type_confirmation ${
          isDeleting ? 'popup__button_loading' : ''
        }`}
        type="submit"
        disabled={isDeleting}
      >
        {isDeleting ? 'Eliminando...' : 'Sí'}
      </button>
    </form>
  );
}
