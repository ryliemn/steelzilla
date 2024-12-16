"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    subitems: [
      {
        name: "Guitars & Music",
        href: "/gallery-guitars-music",
      },
      {
        name: "PNW Life",
        href: "/gallery-pnw",
      },
      {
        name: "Commemorating Life Events",
        href: "/gallery-life-events",
      },
      {
        name: "Custom Projects",
        href: "/gallery-custom-projects",
      },
      {
        name: "Transportation",
        href: "/gallery-transportation",
      },
      {
        name: "USA",
        href: "/gallery-usa",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function CurbNavbar() {
  const pathname = usePathname();

  return (
    <Navbar isBordered className="bg-zinc-400">
      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" />
        <NavbarBrand>
          <h1 className="text-2xl font-semibold tracking-wider">STEELZILLA</h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden md:flex">
        {menuItems.map((mi) => {
          if (!mi.subitems) {
            return (
              <NavbarItem key={mi.name} isActive={pathname === mi.href}>
                <Link color="foreground" href={mi.href}>
                  {mi.name}
                </Link>
              </NavbarItem>
            );
          } else {
            return (
              <Dropdown key={mi.name} className="bg-zinc-600">
                <NavbarItem isActive={pathname === mi.href}>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      radius="sm"
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                      variant="light"
                    >
                      {mi.name}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu className="w-[240px]">
                  {mi.subitems.map((si) => {
                    return (
                      <DropdownItem key={si.name} href={si.href}>
                        <Link color="foreground" className="text-white">
                          {si.name}
                        </Link>
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            );
          }
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="tel:12538205600"
          variant="bordered"
          className="w-30 text-xs text-wrap text-center font-bold flex-col gap-0 bg-zinc-800 text-white"
        >
          <div>CALL OR TEXT</div>
        </Button>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((mi) => {
          if (!mi.subitems) {
            return (
              <NavbarMenuItem key={mi.name}>
                <Link color="foreground" href={mi.href}>
                  {mi.name}
                </Link>
              </NavbarMenuItem>
            );
          } else {
            return (
              <div className="pl-4" key={mi.name}>
                {mi.subitems.map((si) => {
                  return (
                    <NavbarMenuItem key={si.name}>
                      <Link color="foreground" href={si.href}>
                        Gallery - {si.name}
                      </Link>
                    </NavbarMenuItem>
                  );
                })}
              </div>
            );
          }
        })}
      </NavbarMenu>
    </Navbar>
  );
}
