import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Chatbot } from "@/components/chatbot"
import { HealthcareDashboard } from "@/components/healthcare-dashboard"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

const Index = () => {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <section id="dashboard" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Health Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your health journey, vaccination schedule, and stay updated with local health alerts.
            </p>
          </div>
          <HealthcareDashboard />
        </section>

        <section id="chat" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Health Assistant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant health guidance, symptom checking, and vaccination information in your preferred language.
            </p>
          </div>
          <div className="flex justify-center">
            <Chatbot />
          </div>
        </section>
      </main>

      {/* Floating Chat Button */}
      {!showChat && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowChat(true)}
            size="lg"
            className="h-14 w-14 rounded-full shadow-[var(--shadow-strong)] hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Floating Chat Widget */}
      {showChat && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
          <div className="relative">
            <Button
              onClick={() => setShowChat(false)}
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-destructive text-white hover:bg-destructive/90 z-10"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="w-96 max-w-[calc(100vw-2rem)]">
              <Chatbot />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">SwasthyaSahayak - स्वास्थ्य सहायक</h3>
            <p className="text-muted-foreground mb-6">
              Empowering rural and urban communities with accessible healthcare information and guidance.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>© 2024 SwasthyaSahayak. Supporting India's health journey.</p>
              <p className="mt-2">
                This platform provides general health information. Always consult healthcare professionals for medical advice.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
