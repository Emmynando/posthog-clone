import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useAppDispatch } from "../../store/hook";
import { toggleModal } from "../../store/features/toggleModal";

export default function PortalHeader({
  onMaximize,
}: {
  onMaximize: () => void;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full border-b border-b-[rgb(var(border-clr))] backdrop-blur-3xl bg-primary/50 pl-[0.2rem] pr-[0.5rem] py-[0.5rem]">
      <div>
        <IoDocumentTextOutline className="font-semibold text-lg" />
      </div>
      <div>
        <p className="font-semibold text-sm">Documentation -PostHog</p>
      </div>
      <div className="flex items-end gap-2">
        <p className="text-medium  font-medium">_</p>
        <p onClick={onMaximize}>
          <MdCheckBoxOutlineBlank className="text-medium font-medium" />
        </p>
        <p
          className="text-medium -mb-1 font-medium cursor-pointer"
          onClick={() =>
            dispatch(toggleModal({ name: "portalConfirmation", value: false }))
          }
        >
          X
        </p>
      </div>
    </div>
  );
}
