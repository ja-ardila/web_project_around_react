export default function EditAvatar(): React.JSX.Element {
    return(
        <form
            className="popup__form"
            id="avatar-form"
            noValidate
          >
            <input
              id="avatar-link-input"
              className="popup__input popup__input_type_avatar"
              name="avatar"
              placeholder="Enlace a la imagen"
              type="url"
              required
              aria-describedby="avatar-link-input-error"
            />
            <span
              id="avatar-link-input-error"
              className="popup__input-error avatar-link-input-error"
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