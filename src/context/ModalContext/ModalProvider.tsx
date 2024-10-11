import { ReactNode, useState } from "react";
import ModalContext from "./ModalContext";
import { ModalTemplate } from "../../templates";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (modalComponent: ReactNode) => {
    setModalContent(modalComponent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
      {isOpen && <ModalTemplate>{modalContent}</ModalTemplate>}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
