import useModal from "../../hooks/useModal";
import { PageTemplate } from "../PageTemplate";
import { IModalTemplateParam } from "./interfaces";

function ModalTemplate({ children }: IModalTemplateParam) {
  const { closeModal } = useModal();

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("#modal-outside") === null) {
      closeModal();
    }
  };

  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-52 py-24"
      onClick={handleClickOutside}
    >
      <div
        id="modal-child-container"
        className="max-w-full max-h-full rounded-3xl overflow-x-clip overflow-y-auto scrollbar-thin scrollbar-thumb-darkGray scrollbar-track-transparent"
      >
        <PageTemplate isPageUp>{children}</PageTemplate>
      </div>
    </div>
  );
}

export default ModalTemplate;
