import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatAssistant from "./pages/ChatAssistant";
import Community from "./pages/Community";
import HealthInfo from "./pages/HealthInfo";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="healthcare-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
            future={{
              v7_startTransition: true,
            }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/health-info" element={<HealthInfo />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
