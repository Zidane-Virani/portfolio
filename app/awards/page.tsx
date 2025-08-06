import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Award } from "lucide-react"

export default function Awards() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Awards & Leadership</h1>
          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Automated Book Marketing Platform
                </CardTitle>
                <CardDescription className="text-gray-300">Leadership Award - $1,400 Grant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Awarded $1,400 to lead a 4-person team to build a GPT-4o powered marketing tool to automate 1,000+
                  daily LinkedIn messages. Achieved a 43% increase in reply rates while scaling outreach using Puppeteer
                  automation and rate-limit protection.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "FastAPI", "AWS EC2", "Puppeteer", "GPT-4o"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Research Grant - DistilBERT Pipeline
                </CardTitle>
                <CardDescription className="text-gray-300">Western University - $10,000 Award</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Awarded $10,000 to build a DistilBERT pipeline mapping key ideas from articles to 10+ peer-reviewed
                  papers each. Successfully deployed the system with Docker on EC2 and automated retraining using
                  SageMaker and MLflow.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DistilBERT", "Docker", "AWS EC2", "SageMaker", "MLflow"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
