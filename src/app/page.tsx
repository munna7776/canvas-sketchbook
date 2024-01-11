"use client";

import { Provider } from "react-redux";
import Board from "~/components/Board";
import { Menu } from "~/components/Menu";
import Toolbox from "~/components/Toolbox";
import { store } from "~/lib/store";

export default function Page() {
  return (
    <main className="h-screen w-screen relative">
      <Provider store={store}>
        <Menu />
        <Toolbox />
        <Board />
      </Provider>
    </main>
  );
}
