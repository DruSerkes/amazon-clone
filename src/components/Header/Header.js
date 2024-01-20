import { Top } from "./Top";
import { Bottom } from "./Bottom";

export function Header() {
  return (
    <header className="w-full sticky flex flex-col">
      <Top />
      <Bottom />
    </header>
  );
}
