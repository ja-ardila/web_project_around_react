export default function NewCard(): React.JSX.Element {
    return(
        <form className="popup__form" id="new-card-form" noValidate>
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
            />
            <span
                id="card-link-input-error"
                className="popup__input-error card-link-input-error"
            ></span>

            <button
                className="button popup__button popup__button_disabled"
                type="submit"
                disabled
            >
                Crear
            </button>
        </form>
    )

}