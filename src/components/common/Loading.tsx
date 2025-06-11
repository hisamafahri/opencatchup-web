import { cn } from "~/lib/utils";
import { Icons } from "../icons";

const Loading = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  return (
    <section
      className={cn(
        "h-full flex items-center justify-center",
        fullScreen && "min-h-screen",
      )}
    >
      <Icons.Logo className="h-5 w-min animate-custom-pulse" />
    </section>
  );
};

export default Loading;
