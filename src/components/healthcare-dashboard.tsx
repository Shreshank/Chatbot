import { Calendar, Shield, AlertTriangle, Users, Thermometer, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface VaccinationRecord {
  name: string
  dueDate: string
  status: "completed" | "due" | "overdue"
  ageGroup: string
}

interface OutbreakAlert {
  disease: string
  location: string
  severity: "low" | "medium" | "high"
  date: string
}

const vaccinationData: VaccinationRecord[] = [
  { name: "COVID-19 Booster", dueDate: "2024-12-01", status: "due", ageGroup: "Adult" },
  { name: "Hepatitis B", dueDate: "2024-06-15", status: "completed", ageGroup: "Adult" },
  { name: "Tetanus", dueDate: "2025-03-20", status: "due", ageGroup: "Adult" },
  { name: "Influenza", dueDate: "2024-10-01", status: "overdue", ageGroup: "Adult" },
]

const outbreakAlerts: OutbreakAlert[] = [
  { disease: "Dengue", location: "Delhi NCR", severity: "high", date: "2024-09-10" },
  { disease: "Chikungunya", location: "Mumbai", severity: "medium", date: "2024-09-08" },
  { disease: "Malaria", location: "West Bengal", severity: "low", date: "2024-09-05" },
]

export function HealthcareDashboard() {
  const completedVaccinations = vaccinationData.filter(v => v.status === "completed").length
  const totalVaccinations = vaccinationData.length
  const vaccinationProgress = (completedVaccinations / totalVaccinations) * 100

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive"
      case "medium": return "warning"
      case "low": return "success"
      default: return "secondary"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success"
      case "due": return "warning"
      case "overdue": return "destructive"
      default: return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      {/* Health Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vaccination Progress</p>
                <p className="text-2xl font-bold text-primary">{Math.round(vaccinationProgress)}%</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <Progress value={vaccinationProgress} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-healthcare">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
                <p className="text-2xl font-bold text-healthcare">{outbreakAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-healthcare" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Due Vaccinations</p>
                <p className="text-2xl font-bold text-warning">
                  {vaccinationData.filter(v => v.status === "due" || v.status === "overdue").length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="text-2xl font-bold text-success">87</p>
              </div>
              <Heart className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vaccination Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Vaccination Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vaccinationData.map((vaccine, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
                  <div className="flex-1">
                    <h4 className="font-semibold">{vaccine.name}</h4>
                    <p className="text-sm text-muted-foreground">Due: {vaccine.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusColor(vaccine.status) as any}>
                      {vaccine.status}
                    </Badge>
                    {vaccine.status !== "completed" && (
                      <Button size="sm" variant="outline-healthcare">
                        Schedule
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outbreak Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Outbreak Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {outbreakAlerts.map((alert, index) => (
                <div key={index} className="p-4 rounded-2xl border border-border bg-background">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{alert.disease}</h4>
                        <Badge variant={getSeverityColor(alert.severity) as any} className="text-xs">
                          {alert.severity} risk
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        <Users className="h-3 w-3 inline mr-1" />
                        {alert.location}
                      </p>
                      <p className="text-xs text-muted-foreground">{alert.date}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 text-primary">
                <Thermometer className="h-4 w-4" />
                <span className="font-semibold text-sm">Prevention Tip</span>
              </div>
              <p className="text-sm mt-1">
                Use mosquito repellent and eliminate stagnant water around your home to prevent vector-borne diseases.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}