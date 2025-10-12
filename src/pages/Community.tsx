import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Calendar, MapPin, TrendingUp, Heart } from "lucide-react"

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Health Discussions",
    titleHindi: "स्वास्थ्य चर्चा",
    description: "Join community discussions about health topics, share experiences, and get support.",
    members: "2.5K+ members"
  },
  {
    icon: Calendar,
    title: "Health Events",
    titleHindi: "स्वास्थ्य कार्यक्रम",
    description: "Participate in local health camps, vaccination drives, and awareness programs.",
    events: "15 upcoming events"
  },
  {
    icon: MapPin,
    title: "Local Health Centers",
    titleHindi: "स्थानीय स्वास्थ्य केंद्र",
    description: "Find nearby hospitals, clinics, and healthcare facilities in your area.",
    centers: "500+ centers"
  },
  {
    icon: Users,
    title: "Support Groups",
    titleHindi: "सहायता समूह",
    description: "Connect with support groups for specific health conditions and wellness goals.",
    groups: "50+ active groups"
  }
]

const recentPosts = [
  {
    user: "Dr. Priya Sharma",
    userHindi: "डॉ. प्रिया शर्मा",
    time: "2 hours ago",
    title: "Monsoon Health Tips",
    titleHindi: "मानसून स्वास्थ्य सुझाव",
    content: "Important tips to stay healthy during monsoon season. Prevent waterborne diseases and boost immunity.",
    contentHindi: "मानसून के मौसम में स्वस्थ रहने के महत्वपूर्ण सुझाव। जल जनित रोगों से बचें और प्रतिरक्षा बढ़ाएं।",
    likes: 45,
    comments: 12,
    category: "Prevention"
  },
  {
    user: "Ravi Kumar",
    userHindi: "रवि कुमार",
    time: "5 hours ago",
    title: "Vaccination Drive Update",
    titleHindi: "टीकाकरण अभियान अपडेट",
    content: "New vaccination camp starting tomorrow at Community Health Center, Sector 15.",
    contentHindi: "कल से सामुदायिक स्वास्थ्य केंद्र, सेक्टर 15 में नया टीकाकरण शिविर शुरू हो रहा है।",
    likes: 28,
    comments: 8,
    category: "Vaccination"
  },
  {
    user: "Anita Devi",
    userHindi: "अनीता देवी",
    time: "1 day ago",
    title: "Diabetes Management Success",
    titleHindi: "मधुमेह प्रबंधन सफलता",
    content: "Sharing my journey of managing diabetes through diet and exercise. Happy to help others!",
    contentHindi: "आहार और व्यायाम के माध्यम से मधुमेह के प्रबंधन की अपनी यात्रा साझा कर रही हूं। दूसरों की मदद करने में खुशी होगी!",
    likes: 62,
    comments: 19,
    category: "Success Story"
  }
]

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Health Community</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">स्वास्थ्य समुदाय</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow community members, share health experiences, and support each other 
            on the journey to better health and wellness.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-2">
            साथी समुदाय के सदस्यों से जुड़ें, स्वास्थ्य अनुभव साझा करें, और बेहतर स्वास्थ्य 
            और कल्याण की यात्रा में एक-दूसरे का समर्थन करें।
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">5.2K+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-healthcare">1.8K+</div>
            <div className="text-sm text-muted-foreground">Health Posts</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-success">150+</div>
            <div className="text-sm text-muted-foreground">Success Stories</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">50+</div>
            <div className="text-sm text-muted-foreground">Expert Doctors</div>
          </Card>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="p-3 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <h4 className="text-sm text-muted-foreground mb-3">{feature.titleHindi}</h4>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {feature.members || feature.events || feature.centers || feature.groups}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Community Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Recent Community Posts</h3>
            <Button variant="outline">View All Posts</Button>
          </div>
          
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{post.user}</h4>
                        <p className="text-xs text-muted-foreground">{post.userHindi}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground ml-auto">{post.time}</span>
                    </div>
                    
                    <h5 className="font-semibold mb-1">{post.title}</h5>
                    <h6 className="text-sm text-muted-foreground mb-2">{post.titleHindi}</h6>
                    <p className="text-sm mb-2">{post.content}</p>
                    <p className="text-xs text-muted-foreground mb-3">{post.contentHindi}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {post.comments} comments
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Community CTA */}
        <Card className="p-8 text-center gradient-primary text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Health Community Today!</h3>
          <p className="text-lg mb-6">
            Connect with thousands of health-conscious individuals and healthcare professionals.
          </p>
          <p className="text-base mb-6">
            हजारों स्वास्थ्य-सचेत व्यक्तियों और स्वास्थ्य पेशेवरों से जुड़ें।
          </p>
          <Button variant="secondary" size="lg">
            Join Community
          </Button>
        </Card>
      </main>
    </div>
  )
}

export default Community