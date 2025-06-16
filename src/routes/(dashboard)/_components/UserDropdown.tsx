import {
  ArrowUpRight,
  BookOpen,
  ChevronsUpDown,
  Headset,
  Link,
  LogOut,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Skeleton } from "~/components/ui/skeleton";
import { signOut, useSession } from "~/lib/utils/auth";

const UserDropdown = () => {
  const { isPending, data } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center space-x-3 w-48 mr-3">
        <div className="space-y-1 flex-1">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-2.5 w-full" />
        </div>
        <Skeleton className="w-7 h-7 rounded-full" />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-between gap-1 w-48">
        <div className="text-left truncate ml-1">
          <p className="text-sm truncate">{data?.user.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {data?.user.email}
          </p>
        </div>
        <ChevronsUpDown className="text-muted-foreground size-4 shrink-0 mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <DropdownMenuItem asChild>
          <NavLink to="/settings/account">
            <Settings />
            Settings
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer" asChild>
          <NavLink
            to={`https://opencatchup.com/${data?.user.username}`}
            target="_blank"
          >
            <Link />
            Open My Link
            <ArrowUpRight className="size-3.5 ml-auto transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group cursor-pointer" asChild>
          <NavLink to="https://docs.opencatchup.com" target="_blank">
            <BookOpen />
            Documentation
            <ArrowUpRight className="size-3.5 ml-auto transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer" asChild>
          <NavLink to="https://opencatchup.com/support" target="_blank">
            <Headset />
            Support
            <ArrowUpRight className="size-3.5 ml-auto transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={signOut}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
