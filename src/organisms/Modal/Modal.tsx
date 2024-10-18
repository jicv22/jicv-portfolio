import { Button, EButtonType, ETextType, Text } from "../../atoms";
import useModal from "../../hooks/useModal";
import { PageTemplate } from "../../templates/PageTemplate";
import { IModalParam } from "./interfaces";

function Modal({ children }: IModalParam) {
  const { closeModal } = useModal();

  function handleClickOutside(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("#modal-outside") === null) {
      closeModal();
    }
  }

  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52 sm:py-12 lg:py-24"
      onClick={handleClickOutside}
    >
      <div
        id="modal-child-container"
        className="relative max-w-full max-h-full rounded-3xl overflow-x-clip overflow-y-auto"
      >
        <div className="z-50 absolute w-8 h-8 flex top-2 right-1 lg:invisible">
          <Button grow type={EButtonType.CONTENT_ONLY} onClick={closeModal}>
            <Text type={ETextType.T1}>x</Text>
          </Button>
        </div>
        <PageTemplate isPageUp>{children}</PageTemplate>
      </div>
    </div>
  );
}

export default Modal;
