import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Shield, Mail, Lock, Phone } from "lucide-react"

const SignIn = () => {
  const [userType, setUserType] = useState<"user" | "admin">("user")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSignIn = (type: "user" | "admin") => {
    // This is just UI - no actual authentication logic
    console.log(`${type} sign in attempted with:`, formData)
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} sign in interface - Authentication to be implemented with Supabase`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <h2 className="text-xl text-muted-foreground mb-2">साइन इन करें</h2>
          <p className="text-sm text-muted-foreground">
            Access your health dashboard and community features
          </p>
        </div>

        {/* Sign In Form */}
        <Card className="p-6">
          <Tabs value={userType} onValueChange={(value) => setUserType(value as "user" | "admin")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="user" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                User
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-4">
              <div className="text-center mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">User Sign In</h3>
                <p className="text-sm text-muted-foreground">उपयोगकर्ता साइन इन</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="user-password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={() => handleSignIn("user")} 
                  className="w-full"
                  size="lg"
                >
                  Sign In as User
                </Button>

                <div className="text-center text-sm">
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="admin" className="space-y-4">
              <div className="text-center mb-4">
                <div className="p-3 bg-healthcare/10 rounded-2xl w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-healthcare" />
                </div>
                <h3 className="font-semibold">Admin Sign In</h3>
                <p className="text-sm text-muted-foreground">प्रशासक साइन इन</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="Enter admin email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admin-password">Admin Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="Enter admin password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={() => handleSignIn("admin")} 
                  variant="healthcare"
                  className="w-full"
                  size="lg"
                >
                  Sign In as Admin
                </Button>

                <div className="text-center text-sm">
                  <a href="#" className="text-healthcare hover:underline">
                    Contact system administrator
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Separator className="mb-4" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Don't have an account?
              </p>
              <Button variant="outline" className="w-full">
                Create New Account
              </Button>
            </div>
          </div>
        </Card>

        {/* Alternative Sign In Options */}
        <Card className="p-4 mt-6">
          <h4 className="font-semibold mb-3 text-center">Quick Access</h4>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Sign in with Phone OTP
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <User className="h-4 w-4 mr-2" />
              Continue as Guest
            </Button>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy.
            <br />
            साइन इन करके, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं।
          </p>
        </div>
      </main>
    </div>
  )
}

export default SignIn