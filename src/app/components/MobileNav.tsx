'use client';

import { Gift, Info, LayoutGrid, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: 'Categories', href: '/categories', icon: LayoutGrid },
    { name: 'Offers', href: '/offers', icon: Gift },
    { name: 'About Us', href: '/about', icon: Info },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] bg-[#004D40] text-white p-0"
      >
        <SheetHeader className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <img
              src="/logo.png"
              alt="Restaurant Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </SheetHeader>
        <div className="flex flex-col py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
