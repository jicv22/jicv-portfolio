import { ReactNode } from "react";

export interface IModalContextParam {
  isOpen: boolean;
  openModal: (modalComponent: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
}
