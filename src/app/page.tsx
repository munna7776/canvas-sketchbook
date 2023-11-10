"use client";

import { Menu } from "~/components/Menu";
import Toolbox from "~/components/Toolbox";

export default function Page() {
  return (
    <main className="h-screen w-screen relative">
      <Menu />
      <Toolbox />
    </main>
  );
}
