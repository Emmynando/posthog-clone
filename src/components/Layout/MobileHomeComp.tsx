import { useAppDispatch } from "../../store/hook";
import { toggleModal } from "../../store/features/toggleModal";
import { HOMEITEMS, HOMEITEMS2 } from "./HomeComp";

const allHomeItems = [...HOMEITEMS, ...HOMEITEMS2];
export default function MobileHomeComp() {
  const dispatch = useAppDispatch();
  return (
    <div className="columns-3 h-[95dvh] [column-fill:auto] gap-x-2 md:hidden w-dvw px-2 mt-2">
      {allHomeItems.map((item) => (
        <div
          key={item.id}
          className=" flex flex-col items-center min-h-[100px] word-break"
        >
          <img
            src={item.img}
            alt={item.title}
            className="size-[40px] mx-auto"
          />
          <button
            className={`bg-[#e1d7c2] px-1 cursor-pointer ${
              item.title === "Company handbook" ? "max-w-[80px]" : "w-max"
            }`}
            onClick={() =>
              dispatch(toggleModal({ name: "portalConfirmation", value: true }))
            }
          >
            <h1
              className={`text-[#4d4f46] text-[13px] font-medium ${
                item.title === "Company handbook" && ""
              }`}
            >
              {item.title}
            </h1>
          </button>
        </div>
      ))}
    </div>
  );
}
