import type { ImagePopupConfig } from '../../../../types/types.ts';

type ImageProps = {
  image: ImagePopupConfig;
};

export default function ImagePopup(props: ImageProps): React.JSX.Element {
    const { name, link } = props.image;
    return(
        <>
            <img alt="Imagen ampliada del lugar" className="popup__image" src={link} />
            <p className="popup__caption">{name}</p>
        </>
    )

}