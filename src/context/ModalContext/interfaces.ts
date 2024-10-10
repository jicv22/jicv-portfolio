import { ReactNode } from "react";

export interface ModalContextType {
  isOpen: boolean;
  openModal: (modalComponent: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
}
