import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const gallerySubitems = [
  { name: "Guitars & Music", href: "/gallery-guitars-music" },
  { name: "PNW Life", href: "/gallery-pnw" },
  { name: "USA", href: "/gallery-usa" },
];

const topLevelItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

interface IProps {
  currentPath: string;
}

export default function CurbNavbar({ currentPath }: IProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-700 bg-zinc-900 flex items-center justify-between px-4 h-12">
      {/* Left: mobile menu + brand */}
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-zinc-300 hover:text-white hover:bg-zinc-800"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-zinc-900 border-zinc-700 w-64"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav className="flex flex-col gap-1 mt-4">
              {topLevelItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 transition-colors",
                    currentPath === item.href && "text-amber-400",
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 font-medium text-zinc-500 text-xs uppercase tracking-widest mt-2">
                Gallery
              </div>
              <div className="pl-4 flex flex-col gap-1">
                {gallerySubitems.map((si) => (
                  <a
                    key={si.name}
                    href={si.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 transition-colors text-sm",
                      currentPath === si.href && "text-amber-400",
                    )}
                  >
                    {si.name}
                  </a>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <a href="/">
          <h1 className="text-2xl font-bold tracking-[0.2em] text-white">
            STEELZILLA
          </h1>
        </a>
      </div>

      {/* Center: desktop nav */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-zinc-300 hover:text-amber-400 hover:bg-transparent focus:bg-transparent",
                currentPath === "/" && "text-amber-400",
              )}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-amber-400 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-amber-400">
              Gallery
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-52 p-2 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg">
                {gallerySubitems.map((si) => (
                  <li key={si.name}>
                    <NavigationMenuLink asChild>
                      <a
                        href={si.href}
                        className={cn(
                          "block px-3 py-2 rounded-md text-zinc-300 text-sm hover:text-amber-400 hover:bg-zinc-800 transition-colors",
                          currentPath === si.href && "text-amber-400",
                        )}
                      >
                        {si.name}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-zinc-300 hover:text-amber-400 hover:bg-transparent focus:bg-transparent",
                currentPath === "/contact" && "text-amber-400",
              )}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right: call button */}
      <Button
        asChild
        variant="outline"
        className="bg-amber-600 text-white border-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 text-xs font-bold tracking-wider"
      >
        <a href="sms:12538205600">CALL OR TEXT</a>
      </Button>
    </nav>
  );
}
