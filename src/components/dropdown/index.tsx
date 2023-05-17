import DownArrow from "@/assets/downArrow";
import { ReactComponentElement, useState } from "react";

type PlacementType = "bottom-left" | "bottom-right" | "top-left" | "top-right";

type Props = {
  title: string;
  children?: ReactComponentElement<any>;
  placement?: PlacementType;
};

const placementStyleFactory = (placement: PlacementType): string => {
  if (!placement) return "";
  let placementStyle = "";
  const placements = placement?.split("-");
  placements?.map((value: string) => {
    switch (value) {
      case "bottom":
        // placementStyle = placementStyle.concat("top-0 ");
        break;
      case "top":
        // placementStyle = placementStyle.concat("bottom-0 ");
        break;
      case "left":
        placementStyle = placementStyle.concat("right-0 ");
        break;
      case "right":
        placementStyle = placementStyle.concat("left-0 ");
        break;
      default:
        placementStyle = "";
        break;
    }
  });

  return placementStyle;
};
const Dropdown = ({ title = "Dropdown", children, placement }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown relative inline-block">
      <button
        onClick={() => setIsOpen((oldState) => !oldState)}
        className="dropbtn flex w-36 min-w-max cursor-pointer items-center justify-between gap-4 overflow-visible rounded-full border-[1px] border-gray-200 bg-white px-8 py-0 h-12 hover:border-gray-300"
      >
        {title}
        <DownArrow />
      </button>
      <div
        className={`dropdown-content absolute  z-[1] ${
          isOpen ? "" : "hidden"
        } ${
          placement && placementStyleFactory(placement)
        } mt-2 min-w-max rounded-md bg-white shadow-md`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
