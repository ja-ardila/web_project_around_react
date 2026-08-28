export default function EditProfile(): React.JSX.Element {
    return (
        <form className="popup__form" id="edit-profile-form" noValidate>
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
            />
            <span
              id="profile-description-input-error"
              className="popup__input-error profile-description-input-error"
            ></span>

            <button
              className="button popup__button popup__button_disabled"
              type="submit"
              disabled
            >
              Guardar
            </button>
        </form>
    );
}