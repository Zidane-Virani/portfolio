import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Award, Calendar } from "lucide-react"

export default function About() {
  const languages = [
    { name: "Python", logo: "/images/python-logo.png" },
    { name: "C++", logo: "/images/cpp-logo.png" },
    { name: "JavaScript", logo: "/images/javascript-logo.png" },
    { name: "TypeScript", logo: "/images/typescript-logo.png" },
    { name: "Kotlin", logo: "/images/kotlin-logo.png" },
    { name: "Swift", logo: "/images/swift-logo.png" },
    { name: "SQL", logo: "/images/sql-logo.png" },
  ]

  const frameworks = [
    { name: "React", logo: "/images/react-logo.png" },
    { name: "Next.js", logo: "/images/nextjs-logo.png" },
    { name: "FastAPI", logo: "/images/fastapi-logo.png" },
    { name: "PyTorch", logo: "/images/pytorch-logo.png" },
    { name: "Node.js", logo: "/images/nodejs-logo.png" },
    { name: "Express", logo: "/images/express-logo.png" },
  ]

  const cloudAndTools = [
    { name: "AWS", logo: "/images/aws-logo.png" },
    { name: "Docker", logo: "/images/docker-logo.png" },
    { name: "Kubernetes", logo: "/images/kubernetes-logo.png" },
    { name: "PostgreSQL", logo: "/images/postgresql-logo.png" },
    { name: "Redis", logo: "/images/redis-logo.png" },
    { name: "Git", logo: "/images/git-logo.png" },
  ]

  const mlAndAI = [
    { name: "TensorFlow", logo: "/images/tensorflow-logo.png" },
    { name: "Hugging Face", logo: "/images/huggingface-logo.png" },
    { name: "OpenAI", logo: "/images/openai-logo.png" },
    { name: "Whisper", logo: "/images/whisper-logo.png" },
    { name: "BERT", logo: "/images/bert-logo.png" },
    { name: "MLflow", logo: "/images/mlflow-logo.png" },
  ]

  const TechSection = ({ title, technologies }: { title: string; technologies: typeof languages }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors group"
          >
            <div className="flex flex-col items-center space-y-3">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-sm text-gray-300 text-center">{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a Software Engineering student at Western University with a passion for machine learning and
                distributed systems. I've built and scaled ML pipelines that serve thousands of users, automated complex
                workflows, and founded a successful tech venture.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                My experience spans from building RAG chatbots and voice assistants to architecting serverless ML
                pipelines on AWS. I love tackling challenging problems and turning ideas into production-ready
                solutions.
              </p>
            </div>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Award className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">Western University</h3>
                    <p className="text-gray-300">Honours BEng. Software Engineering</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Sept 2023 – Apr 2027
                      </span>
                      <span>GPA: 3.92/4.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills */}
          <div className="space-y-12">
            <TechSection title="Programming Languages" technologies={languages} />
            <TechSection title="Frameworks & Libraries" technologies={frameworks} />
            <TechSection title="Cloud & DevOps" technologies={cloudAndTools} />
            <TechSection title="ML & AI Tools" technologies={mlAndAI} />
          </div>
        </div>
      </div>
    </div>
  )
}
