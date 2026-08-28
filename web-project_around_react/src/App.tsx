//import { useState } from 'react'
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="page__content">
      <Header />
      <Main />
      <Footer />
      {/* <div className="popup" id="edit-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Editar perfil</h3>
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
        </div>
      </div> */}
      {/* <div className="popup" id="avatar-popup">
        <div
          className="popup__content popup__content_type_avatar"
        >
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">
            Cambiar foto de perfil
          </h3>
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
        </div>
      </div> */}
      {/* <div className="popup" id="new-card-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Nuevo lugar</h3>
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
        </div>
      </div> */}
      {/* <div className="popup" id="delete-card-popup">
        <div
          className="popup__content popup__content_type_confirmation"
        >
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">¿Estás seguro/a?</h3>
          <form
            className="popup__form popup__form_type_confirmation"
          >
            <button
              className="button popup__button popup__button_type_confirmation"
              type="submit"
            >
              Sí
            </button>
          </form>
        </div>
      </div> */}
      {/* <div className="popup" id="image-popup">
        <div className="popup__content popup__content_content_image">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <img alt="Imagen ampliada del lugar" className="popup__image" src="#" />
          <p className="popup__caption"></p>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default App
