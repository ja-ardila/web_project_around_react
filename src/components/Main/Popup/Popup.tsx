type PopupProps = {
  title?: string;
  children: React.ReactNode;
  contentClassName?: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function Popup(props: PopupProps): React.JSX.Element {
  const { title, children, contentClassName, onClose, isOpen } = props;
  const popupContentClassName = [
    'popup__content',
    !title ? 'popup__content_content_image' : '',
    contentClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className={popupContentClassName}>
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
