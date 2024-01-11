import { Pencil, Eraser, Undo2, Redo2, FileDown } from 'lucide-react';
import { useDispatch,useSelector } from 'react-redux';
import { onMenuItemClick } from '~/lib/store/menu-slice';
import { MenuItem, RootState } from '~/lib/type';
import { cn } from '~/lib/utils';

export const Menu = () => {
  const {activeMenuItem} = useSelector((state: RootState) => state.menu)
  const dispatch = useDispatch();

  const menuItemClickHandler = (item: MenuItem) => () => {
    dispatch(onMenuItemClick(item));
  };

  return (
    <div className="border-[hsl(244, 100%, 97%)] absolute left-1/2 top-5 z-[4] flex -translate-x-1/2 gap-[25px] rounded-md border bg-white px-5 py-1 shadow-all">
      <button
        className={cn(
          'grid h-9 w-9 cursor-pointer place-items-center rounded-md',
          activeMenuItem === "PENCIL" && 'bg-[#e0dfff] text-[#030064]',
        )}
        onClick={menuItemClickHandler("PENCIL")}
      >
        <Pencil size={16} />
      </button>
      <button 
        className={cn(
          'grid h-9 w-9 cursor-pointer place-items-center rounded-md',
          activeMenuItem === "ERASER" && 'bg-[#e0dfff] text-[#030064]',
        )}
        onClick={menuItemClickHandler("ERASER")}
      >
        <Eraser size={16} />
      </button>
      <button className="grid h-9 w-9 cursor-pointer place-items-center rounded-md hover:bg-[#f4f4f4]">
        <Undo2 size={16} />
      </button>
      <button className="grid h-9 w-9 cursor-pointer place-items-center rounded-md hover:bg-[#f4f4f4]">
        <Redo2 size={16} />
      </button>
      <button className="grid h-9 w-9 cursor-pointer place-items-center rounded-md hover:bg-[#f4f4f4]">
        <FileDown size={16} />
      </button>
    </div>
  );
};
