import { useState } from "react"
import { Menu, X, Heart, MessageCircle, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { cn } from "@/lib/utils"
import { useLocation, Link } from "react-router-dom";

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
  current: boolean
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/", icon: BarChart3, current: true },
  { name: "Chat Assistant", href: "/chat", icon: MessageCircle, current: false },
  { name: "Health Info", href: "/health-info", icon: Heart, current: false },
  { name: "Community", href: "/community", icon: Users, current: false },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="gradient-primary p-2 rounded-2xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                SwasthyaSahayak
              </h1>
              <p className="text-xs text-muted-foreground">स्वास्थ्य सहायक</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href; // auto check
                return(
                  <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
                )
              })}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/sign-in">Sign In</a>
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-background/95 backdrop-blur">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200",
                  item.current
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}