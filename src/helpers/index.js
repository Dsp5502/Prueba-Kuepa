import { faChessKing } from '@fortawesome/free-solid-svg-icons';

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatearFecha = () => {
  const fechaNueva = new Date();

  const opciones = {
    month: 'short',
    day: '2-digit',
    weekday: 'short',
  };
  return fechaNueva.toLocaleDateString('en-EN', opciones);
};

//Obtener fecha hace 10 dias
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
