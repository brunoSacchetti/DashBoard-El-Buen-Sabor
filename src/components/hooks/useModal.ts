import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Tipos genéricos para las acciones
type OpenModalAction = () => { type: string };
type CloseModalAction = () => { type: string };

interface UseFetchAndModalOptions<T> {
  service: {
    getAll: () => Promise<T[]>;
  };
  openModalAction: OpenModalAction;
  closeModalAction: CloseModalAction;
  selectShowModal: (state: any) => boolean;
}

export function useModal<T>({ service, openModalAction, closeModalAction, selectShowModal }: UseFetchAndModalOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal);

  useEffect(() => {
  }, [service]);

  const handleOpenModal = () => {
    dispatch(openModalAction());
  };

  const handleCloseModal = () => {
    dispatch(closeModalAction());
  };

  return {
    data,
    showModal,
    handleOpenModal,
    handleCloseModal
  };
}