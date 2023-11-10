import { Pencil, Eraser, Undo2, Redo2, FileDown } from "lucide-react";
import { cn } from "~/lib/utils";

export const Menu = () => {
  return (
    <div className="absolute left-1/2 top-5 -translate-x-1/2 bg-white shadow-all border border-[hsl(244, 100%, 97%)] rounded-md flex gap-[25px] px-5 py-1">
      <button className={cn("h-9 w-9 rounded-md grid place-items-center cursor-pointer", true && "bg-[#e0dfff] text-[#030064]")} >
        <Pencil size={16} />
      </button>
      <button className="h-9 w-9 grid place-items-center cursor-pointer hover:bg-[#f4f4f4] rounded-md" >
        <Eraser size={16} />
      </button>
      <button className="h-9 w-9 grid place-items-center cursor-pointer hover:bg-[#f4f4f4] rounded-md" >
        <Undo2 size={16} />
      </button>
      <button className="h-9 w-9 grid place-items-center cursor-pointer hover:bg-[#f4f4f4] rounded-md" >
        <Redo2 size={16} />
      </button>
      <button className="h-9 w-9 grid place-items-center cursor-pointer hover:bg-[#f4f4f4] rounded-md" >
        <FileDown size={16} />
      </button>
    </div>
  );
};
