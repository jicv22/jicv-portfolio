import useModal from "../../hooks/useModal";
import { IModalParam } from "./interfaces";
import crossIcon from "/src/assets/icos/cross.svg";

function Modal({ children }: IModalParam) {
  const { closeModal } = useModal();

  function handleClickOutside(event: React.MouseEvent<HTMLDivElement>) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }

  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm
      sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52 sm:py-12"
      onClick={handleClickOutside}
    >
      <div
        className="relative bg-darkDarkGray border-darkGray border-4 max-h-full overflow-y-auto rounded-3xl
        py-12 px-8 md:px-24 xl:px-36 2xl:px-40"
      >
        <button
          className="z-50 absolute top-4 right-4 w-6 aspect-square rounded-full lg:invisible"
          onClick={closeModal}
        >
          <img className="invert" src={crossIcon} alt="Close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
