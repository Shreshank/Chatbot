import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Activity, Users, Calendar, Phone } from "lucide-react"

const healthTopics = [
  {
    icon: Heart,
    title: "Heart Health",
    titleHindi: "हृदय स्वास्थ्य",
    description: "Learn about maintaining a healthy heart through diet, exercise, and regular checkups.",
    descriptionHindi: "आहार, व्यायाम और नियमित जांच के माध्यम से स्वस्थ हृदय बनाए रखने के बारे में जानें।",
    category: "preventive"
  },
  {
    icon: Shield,
    title: "Vaccination Guide",
    titleHindi: "टीकाकरण गाइड",
    description: "Complete vaccination schedule for children and adults with reminders.",
    descriptionHindi: "याददाश्त के साथ बच्चों और वयस्कों के लिए पूर्ण टीकाकरण अनुसूची।",
    category: "vaccination"
  },
  {
    icon: Activity,
    title: "Common Symptoms",
    titleHindi: "सामान्य लक्षण",
    description: "Identify common disease symptoms and when to seek medical help.",
    descriptionHindi: "सामान्य बीमारी के लक्षणों की पहचान करें और कब चिकित्सा सहायता लें।",
    category: "symptoms"
  },
  {
    icon: Users,
    title: "Family Health",
    titleHindi: "पारिवारिक स्वास्थ्य",
    description: "Health tips for all family members from infants to elderly.",
    descriptionHindi: "शिशुओं से लेकर बुजुर्गों तक सभी परिवारजनों के लिए स्वास्थ्य सुझाव।",
    category: "family"
  },
  {
    icon: Calendar,
    title: "Health Calendar",
    titleHindi: "स्वास्थ्य कैलेंडर",
    description: "Monthly health awareness days and seasonal health tips.",
    descriptionHindi: "मासिक स्वास्थ्य जागरूकता दिवस और मौसमी स्वास्थ्य सुझाव।",
    category: "awareness"
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    titleHindi: "आपातकालीन संपर्क",
    description: "Important emergency numbers and first aid information.",
    descriptionHindi: "महत्वपूर्ण आपातकालीन नंबर और प्राथमिक चिकित्सा जानकारी।",
    category: "emergency"
  }
]

const HealthInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Health Information</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">स्वास्थ्य जानकारी</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive health information covering preventive care, common symptoms, 
            and wellness tips for individuals and families across India.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-2">
            भारत भर के व्यक्तियों और परिवारों के लिए निवारक देखभाल, सामान्य लक्षण और 
            कल्याण युक्तियों को कवर करने वाली व्यापक स्वास्थ्य जानकारी।
          </p>
        </div>

        {/* Health Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTopics.map((topic, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-2xl">
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{topic.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {topic.category}
                    </Badge>
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    {topic.titleHindi}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {topic.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {topic.descriptionHindi}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Health Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-4">Emergency Helplines</h4>
              <div className="space-y-2 text-sm">
                <p><strong>National Emergency:</strong> 112</p>
                <p><strong>Ambulance:</strong> 108</p>
                <p><strong>Women Helpline:</strong> 1091</p>
                <p><strong>Child Helpline:</strong> 1098</p>
                <p><strong>COVID-19 Helpline:</strong> 1075</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-4">Health Schemes</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Ayushman Bharat:</strong> Health insurance for families</p>
                <p><strong>Janani Suraksha Yojana:</strong> Safe motherhood intervention</p>
                <p><strong>Mission Indradhanush:</strong> Immunization program</p>
                <p><strong>Pradhan Mantri Surakshit Matritva Abhiyan:</strong> Antenatal care</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HealthInfo