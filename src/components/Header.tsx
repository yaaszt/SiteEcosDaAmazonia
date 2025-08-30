import { useState } from "react";
import { Menu, TreePine } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "./ui/sheet";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({
  currentPage,
  setCurrentPage,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", key: "inicio" },
    { name: "Produtos", key: "produtos" },
    { name: "Sobre", key: "sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 px-4 max-w-none w-full">
        <div className="hidden md:flex md:items-center md:h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TreePine className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              Ecos da Amazônia
            </span>
          </div>

          {/* Desktop Navigation - Positioned to the far right */}
          <nav className="flex items-center space-x-8 ml-auto pr-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.key)}
                className={`text-lg transition-all duration-200 hover:text-primary hover:scale-105 ${
                  currentPage === item.key
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden h-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TreePine className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              Ecos da Amazônia
            </span>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    Menu de Navegação
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegue pelas páginas do site Ecos da
                    Amazônia
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-6 pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <TreePine className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold">
                      Ecos da Amazônia
                    </span>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setCurrentPage(item.key);
                          setIsOpen(false);
                        }}
                        className={`text-lg transition-colors hover:text-primary text-left ${
                          currentPage === item.key
                            ? "text-primary font-medium"
                            : ""
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}