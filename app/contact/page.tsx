import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>647-667-1235</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>zidanevirani54@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Find Me Online</h3>
                <div className="flex justify-center gap-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
