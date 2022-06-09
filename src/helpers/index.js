import { faChessKing } from '@fortawesome/free-solid-svg-icons';

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getDate = (numero) => {
  const fechaNueva = new Date();
  fechaNueva.setDate(fechaNueva.getDate() - numero);
  const opciones = {
    month: 'short',
    day: '2-digit',
    weekday: 'short',
  };
  return fechaNueva.toLocaleDateString('en-EN', opciones);
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return fechaNueva.toLocaleDateString('es-ES', opciones);
};
