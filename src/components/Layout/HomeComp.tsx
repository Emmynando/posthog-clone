import { useAppDispatch } from "../../store/hook";
import { toggleModal } from "../../store/features/toggleModal";
const HOMEITEMS = [
  {
    id: "1",
    title: "home.mdx",
    img: "/images/home.png",
  },
  {
    id: "2",
    title: "Product OS",
    img: "/images/product.png",
  },
  {
    id: "3",
    title: "Pricing",
    img: "/images/pricing.png",
  },
  {
    id: "4",
    title: "customers.mdx",
    img: "/images/customers.png",
  },
  {
    id: "5",
    title: "demo.mov",
    img: "/images/demo.png",
  },
  {
    id: "6",
    title: "Talk to a human",
    img: "/images/envelope.png",
  },
  {
    id: "7",
    title: "Ask a question",
    img: "/images/question.png",
  },
  {
    id: "8",
    title: "Sign up",
    img: "/images/signup.png",
  },
];

const HOMEITEMS2 = [
  {
    id: "1",
    title: "Why PostHog?",
    img: "/images/posthog.png",
  },
  {
    id: "2",
    title: "Changelog",
    img: "/images/changelog.png",
  },
  {
    id: "3",
    title: "Company handbook",
    img: "/images/handbook.png",
  },
  {
    id: "4",
    title: "Store",
    img: "/images/store.png",
  },
  {
    id: "5",
    title: "Work here",
    img: "/images/work.png",
  },
  {
    id: "6",
    title: "Trash",
    img: "/images/trash.png",
  },
];
export default function HomeComp() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between w-[80%] md:w-full">
      <div className="flex flex-col flex-wrap gap-4 h-[85dvh] w-[10%] mt-6 pl-4">
        {HOMEITEMS.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="size-[40px] mx-auto"
            />
            <button
              className="bg-[#e1d7c2] w-max px-1 cursor-pointer"
              onClick={() =>
                dispatch(
                  toggleModal({ name: "portalConfirmation", value: true })
                )
              }
            >
              <h1 className="text-[#4d4f46] text-[13px] font-medium">
                {item.title}
              </h1>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-wrap gap-4 h-[85dvh] w-[10%] mt-6 pr-4">
        {HOMEITEMS2.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="size-[40px] mx-auto"
            />

            <div className="w-max">
              {item.title === "Company handbook" ? (
                <div className="flex flex-col gap-[1px] cursor-pointer">
                  <span className="text-[#4d4f46] text-[13px] bg-[#e1d7c2] p-1 font-medium">
                    Company
                  </span>
                  <span className="text-[#4d4f46] text-[13px] bg-[#e1d7c2] p-1 font-medium">
                    handbook
                  </span>
                </div>
              ) : (
                <button className="bg-[#e1d7c2] w-max px-1 cursor-pointer">
                  <h1 className="text-[#4d4f46] text-[13px] font-medium">
                    {item.title}
                  </h1>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
