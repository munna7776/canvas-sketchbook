import { COLORS } from "~/lib/const";
import { cn } from "~/lib/utils";

const Toolbox = () => {
  const selectedColor = "#1e1e1e";
  return (
    <div className="absolute top-1/4 left-8 w-[186px] shadow-all border border-[hsl(244, 100%, 97%)] rounded-md p-3 flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-normal mb-2 text-[#1b1b1f]">Stroke</h3>
        <div className="flex gap-[10px]">
          {COLORS.map((color, index) => (
            <button
              key={index}
              title={color}
              style={{ backgroundColor: color }}
              className={cn(
                "h-6 w-6 rounded outline outline-0 outline-[#d6d6d6] outline-offset-2",
                selectedColor === color
                  ? "outline-1 outline-[#4a47b1]"
                  : "hover:outline-1"
              )}
            >
              <span className="sr-only">{"Select color - " + color}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <label
          htmlFor="size"
          className="text-sm font-normal mb-1 text-[#1b1b1f]"
        >
          Brush Size
        </label>
        <input
          type="range"
          name="size"
          min={0}
          max={100}
          step={10}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Toolbox;
