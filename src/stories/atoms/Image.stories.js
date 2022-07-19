//Y cuando es con la api y no es estatica?
import imageFile from '../../assets/liferay.png';

export default {
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => <img src={image.src} alt={image.alt} />;