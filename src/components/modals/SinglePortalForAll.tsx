import { lazy, useState, useEffect } from "react";
import PortalHeader from "./PortalHeader";
import Backdrop from "./Backdrop";
import { useAppSelector } from "../../store/hook";
import { toggleSelector } from "../../store/features/toggleModal";

const Portal = lazy(() => import("./Portal"));

export default function SinglePortalForAll() {
  const [notMaximized, setNotMaximized] = useState(true);
  const { portalConfirmation } = useAppSelector(toggleSelector);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (portalConfirmation) {
      setActive(true);
    }
  }, [portalConfirmation]);

  const handleAnimationEnd = () => {
    if (!portalConfirmation) {
      setActive(false);
    }
  };

  const handleMaximize = () => {
    if (notMaximized) {
      setNotMaximized(false);
    }
  };
  const handleMinimize = () => {
    if (!notMaximized) {
      setNotMaximized(true);
    }
  };

  if (!active) return null;

  return (
    <Portal selector="#portal-root">
      <Backdrop />
      <div
        className={`justify-self-center fixed border-gradient  z-[9999] rounded-md ] py-4 ${
          notMaximized ? "w-[92%] top-[5%]" : "w-[100%] top-[3.2%]"
        } ${portalConfirmation ? "animate-modal-open" : "animate-modal-close"}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="bg-transparent  rounded-[2px] h-[30em]">
          <PortalHeader
            onMaximize={handleMaximize}
            onMinimize={handleMinimize}
          />
          <div
            className={`bg-[#EEEFE9] flex items-center justify-center ${
              notMaximized ? "h-[90%]" : "h-screen"
            }`}
          >
            {/* text box */}
            <div className="w-[40%] text-black">
              <p className="text-center">
                {" "}
                This is a clone of{" "}
                <a
                  href="https://posthog.com/"
                  className="text-blue-800!"
                  target="_blank"
                >
                  PostHog
                </a>
                .
                <br /> If you would like to connect with the developer, kindly
                reach out on{" "}
                <a
                  href="https://www.linkedin.com/in/chukwuemeka-joshua-okezie-2b1335177"
                  className="text-blue-800! font-semibold"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
