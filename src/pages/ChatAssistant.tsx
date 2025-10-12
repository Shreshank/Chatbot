import { Navbar } from "@/components/navbar"
import { Chatbot } from "@/components/chatbot"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, Mic, Globe, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "24/7 Health Guidance",
    titleHindi: "24/7 स्वास्थ्य मार्गदर्शन",
    description: "Get instant health information and guidance anytime, anywhere."
  },
  {
    icon: Mic,
    title: "Voice Support",
    titleHindi: "आवाज़ सहायता",
    description: "Talk to the assistant using voice input for hands-free interaction."
  },
  {
    icon: Globe,
    title: "Multi-language",
    titleHindi: "बहु-भाषा",
    description: "Communicate in Hindi, English, and regional languages."
  },
  {
    icon: Clock,
    title: "Quick Responses",
    titleHindi: "त्वरित उत्तर",
    description: "Get fast and accurate responses to your health queries."
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    titleHindi: "गोपनीयता सुरक्षित",
    description: "Your health conversations are secure and confidential."
  },
  {
    icon: Bot,
    title: "AI Powered",
    titleHindi: "AI संचालित",
    description: "Advanced AI technology for accurate health information."
  }
]

const sampleQueries = [
  {
    category: "Symptoms",
    categoryHindi: "लक्षण",
    queries: [
      "I have a fever and headache",
      "मुझे बुखार और सिरदर्द है",
      "What to do for stomach pain?",
      "पेट दर्द के लिए क्या करें?"
    ]
  },
  {
    category: "Vaccination",
    categoryHindi: "टीकाकरण",
    queries: [
      "When should my child get vaccinated?",
      "मेरे बच्चे को कब टीका लगवाना चाहिए?",
      "COVID-19 booster schedule",
      "COVID-19 बूस्टर अनुसूची"
    ]
  },
  {
    category: "Prevention",
    categoryHindi: "रोकथाम",
    queries: [
      "How to prevent dengue?",
      "डेंगू से कैसे बचें?",
      "Diet tips for diabetes",
      "मधुमेह के लिए आहार सुझाव"
    ]
  }
]

const ChatAssistant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <div className="p-4 gradient-primary rounded-3xl w-fit mx-auto mb-6">
            <Bot className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Health Assistant</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">AI स्वास्थ्य सहायक</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your intelligent health companion providing instant guidance, symptom checking, 
            and personalized health information in your preferred language.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-2">
            आपका बुद्धिमान स्वास्थ्य साथी जो आपकी पसंदीदा भाषा में तुरंत मार्गदर्शन, 
            लक्षण जांच और व्यक्तिगत स्वास्थ्य जानकारी प्रदान करता है।
          </p>
        </div> */}

        {/* Main Chat Interface */}
        {/* Chat Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Start Your Health Conversation</h3>
              <p className="text-sm text-muted-foreground">
                Type your health questions below or click on sample queries to get started.
              </p>
            </div>
            <Chatbot />
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Assistant Features
              </h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">{feature.title}</h5>
                      <p className="text-xs text-muted-foreground mb-1">{feature.titleHindi}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Sample Queries */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Sample Health Queries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleQueries.map((category, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{category.category}</Badge>
                  <Badge variant="outline" className="text-xs">{category.categoryHindi}</Badge>
                </div>
                <div className="space-y-2">
                  {category.queries.map((query, queryIndex) => (
                    <div
                      key={queryIndex}
                      className="p-2 bg-muted/50 rounded-lg text-sm cursor-pointer hover:bg-muted/80 transition-colors"
                    >
                      "{query}"
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <Card className="p-6 border-warning/20 bg-warning/5">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-warning mt-1" />
            <div>
              <h4 className="font-semibold text-warning mb-2">Important Medical Disclaimer</h4>
              <p className="text-sm text-muted-foreground mb-2">
                This AI health assistant provides general health information and guidance for educational purposes only. 
                It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-xs text-muted-foreground">
                यह AI स्वास्थ्य सहायक केवल शैक्षणिक उद्देश्यों के लिए सामान्य स्वास्थ्य जानकारी और मार्गदर्शन प्रदान करता है। 
                यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।
              </p>
              <p className="text-sm font-medium text-warning mt-2">
                Always consult qualified healthcare professionals for medical concerns.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

export default ChatAssistant