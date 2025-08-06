import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: "gpt-language-model",
      title: "GPT Style Language Model",
      description: "Built from scratch in PyTorch",
      summary:
        "Built a GPT-style language model from scratch in PyTorch with custom BPE tokenizer, causal masking, multi-head attention, residual blocks, top-k sampling, and modular output heads.",
      technologies: ["PyTorch", "NumPy", "Matplotlib", "AdamW", "Transformers"],
    },
    {
      id: "multimodal-sentiment-detector",
      title: "Multimodal Sentiment Detector",
      description: "Video emotion analysis system",
      summary:
        "Built a multimodal sentiment detection system that analyzes emotions from uploaded videos by combining facial expression recognition, voice tone analysis, and contextual understanding.",
      technologies: ["OpenCV", "MediaPipe", "TensorFlow", "Librosa", "BERT", "FastAPI"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Featured Projects</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-purple-400 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">{project.description}</CardDescription>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
