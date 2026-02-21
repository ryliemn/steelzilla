"use client";

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
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const gallerySubitems = [
  { name: "Guitars & Music", href: "/gallery-guitars-music" },
  { name: "PNW Life", href: "/gallery-pnw" },
  { name: "Commemorating Life Events", href: "/gallery-life-events" },
  { name: "Custom Projects", href: "/gallery-custom-projects" },
  { name: "Transportation", href: "/gallery-transportation" },
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
    <nav className="border-b border-zinc-500 bg-zinc-400 flex items-center justify-between px-4 h-16">
      {/* Left: mobile menu + brand */}
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-zinc-300"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-zinc-400 border-zinc-500 w-64">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav className="flex flex-col gap-1 mt-4">
              {topLevelItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md font-medium hover:bg-zinc-300 transition-colors",
                    currentPath === item.href && "bg-zinc-300",
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 font-medium text-zinc-700 text-sm uppercase tracking-wide mt-2">
                Gallery
              </div>
              <div className="pl-4 flex flex-col gap-1">
                {gallerySubitems.map((si) => (
                  <a
                    key={si.name}
                    href={si.href}
                    className={cn(
                      "px-3 py-2 rounded-md hover:bg-zinc-300 transition-colors text-sm",
                      currentPath === si.href && "bg-zinc-300",
                    )}
                  >
                    {si.name}
                  </a>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <h1 className="text-2xl font-semibold tracking-wider">STEELZILLA</h1>
      </div>

      {/* Center: desktop nav */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-zinc-300",
                currentPath === "/" && "bg-zinc-300",
              )}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-300">
              Gallery
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-52 p-2 bg-zinc-600">
                {gallerySubitems.map((si) => (
                  <li key={si.name}>
                    <NavigationMenuLink asChild>
                      <a
                        href={si.href}
                        className={cn(
                          "block px-3 py-2 rounded-md text-white text-sm hover:bg-zinc-500 transition-colors",
                          currentPath === si.href && "bg-zinc-500",
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
                "bg-transparent hover:bg-zinc-300",
                currentPath === "/contact" && "bg-zinc-300",
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
        className="bg-zinc-800 text-white border-zinc-800 hover:bg-zinc-700 hover:text-white text-xs font-bold"
      >
        <a href="tel:12538205600">CALL OR TEXT</a>
      </Button>
    </nav>
  );
}
