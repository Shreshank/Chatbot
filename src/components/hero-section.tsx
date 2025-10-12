import { ArrowRight, Bot, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "24/7 health guidance in your language"
  },
  {
    icon: Shield,
    title: "Vaccination Tracker",
    description: "Never miss important immunizations"
  },
  {
    icon: Heart,
    title: "Symptom Checker",
    description: "Early detection and health monitoring"
  }
]

export function HeroSection() {

  const naviga = useNavigate();

  const handleRedirect = () => {
    naviga('/chat');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-healthcare/5 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 gradient-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 gradient-healthcare rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in">
            <span className="gradient-primary bg-clip-text text-transparent">
              स्वास्थ्य सहायक
            </span>
            <br />
            <span className="text-foreground">Your Health Companion</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground animate-slide-up">
            Get instant health guidance, track vaccinations, and stay informed about health outbreaks in your area. 
            Available in multiple Indian languages for rural and urban communities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap animate-bounce-in">
            <Link to="/chat"
              variant="hero" 
              size="hero"
              className="group flex px-[70px] py-[20px] text-[18px]  rounded-3xl text-white bg-gradient-to-r from-cyan-500 to-pink-500"
            >
              Start Health Chat
              <ArrowRight className="ml-3 mt-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
              {/* <Button onClick={() => {handleRedirect}}
                variant="hero" 
                size="hero"
                className="group"
              >
                Start Health Chat
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
            <Button 
              variant="outline" 
              size="lg"
              className="h-16 px-8 text-base rounded-3xl border-2"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by healthcare professionals</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-xs font-semibold">MoHFW Approved</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-semibold">HIPAA Compliant</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-semibold">24/7 Available</div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group border-0 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Users Helped</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-healthcare">50+</div>
              <div className="text-sm text-muted-foreground">Health Topics</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-warning">8</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-success">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}