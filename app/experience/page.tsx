import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { MapPin } from "lucide-react"

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
          <div className="space-y-8">
            {/* Founder */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">Founder</CardTitle>
                    <CardDescription className="text-gray-300">Medium.com - Acquired</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>Jan 2023 - Feb 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Toronto, ON
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Sold a fully automated RAG pipeline for mid–five figures after scaling to $2.8K monthly net profit
                    and 80K+ monthly users
                  </li>
                  <li>
                    • Decreased end-to-end latency by 87% using an async pipeline with OpenAI, Lambda, SQS, and
                    Playwright on Fargate
                  </li>
                  <li>
                    • Reduced costs by 57% by offloading I/O-heavy scraping tasks and optimizing Lambda cold starts via
                    pre-loaded containers
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* ML Engineer Intern - VJDS */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">ML Engineer Intern</CardTitle>
                    <CardDescription className="text-gray-300">VJDS International Inc.</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>Jun 2025 - Dec 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Edmonton, AL
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Automated grading for 1,000+ students by deploying an AWS Textract and Comprehend-powered pipeline
                    with FastAPI
                  </li>
                  <li>
                    • Reduced inference latency by 82% via async architecture and serverless orchestration on AWS
                    (Lambda, Step Functions, API Gateway, RDS)
                  </li>
                  <li>
                    • Scaled the system to 40+ live classrooms with 3 senior engineers, replacing manual grading with
                    real-time automation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* ML Engineer Intern - Roam X */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">ML Engineer Intern</CardTitle>
                    <CardDescription className="text-gray-300">Roam X</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>TBD - TBD</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Location TBD
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Awarded $11,000 to build a multimodal restaurant ranking system using BERT, ResNet-18, Faiss, and PyTorch; deployed with FastAPI, Docker, and EC2 Spot, serving 2,500+ users with sub-1s latency </li>
                  <li>• Finetuned the model with PyTorch, Faiss, and EC2 on user data, improving recommendation quality by 72%</li>
                  <li>• Deployed a SageMaker endpoint with Docker, ECR, and CloudWatch for low-latency inference with real-time monitoring </li>
                </ul>
              </CardContent>
            </Card>

            {/* Applied ML Researcher */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">Applied ML Researcher (Co-op)</CardTitle>
                    <CardDescription className="text-gray-300">Western University</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>May 2025 - Sep 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      London, ON
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Project 1: Awarded $10,000 to build a DistilBERT pipeline mapping key ideas from articles to 10+
                    peer-reviewed papers each
                  </li>
                  <li>
                    • Cut inference time by 55% by deploying on EC2 with Docker, and automated retraining using Sage
                    Maker and MLflow
                  </li>
                  <li>
                    • Project 2: Built a multi-modal interruption detector using BERT, librosa, and MediaPipe; reached
                    91% F1 on 9,000+ samples
                  </li>
                  <li>
                    • Enabled real-time inference via ONNX quantization, reducing latency by 42% and memory usage by 60%
                    in EC2 deployment
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Engineer Intern - Juteq */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">Data Engineer Intern (Co-op)</CardTitle>
                    <CardDescription className="text-gray-300">Juteq Inc</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>May 2025 - Sep 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Mississauga, ON
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Re-architected a production ML pipeline by containerizing 12 real-time microservices and
                    decoupling them with Kafka, enabling 4× higher throughput and cutting end-to-end latency by 50%
                  </li>
                  <li>
                    • Reduced cold start time by 40% across 25+ Lambda functions and 15+ Step Functions using shared
                    Layers, saving over $1,000/month in compute costs and accelerating downstream inference
                  </li>
                  <li>
                    • Integrated monitoring and alerting with CloudWatch and Grafana, enabling real-time debugging and
                    reducing incident resolution time by 65% during high-traffic events
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* ML Software Engineer Intern - Enabled Canada */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">ML Software Engineer Intern</CardTitle>
                    <CardDescription className="text-gray-300">
                      Enabled Canada (Vector Institute Affiliated)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>Jan 2025 - May 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Toronto, ON
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Built a voice assistant for seniors, achieving 92% accuracy on 100K+ real-world queries using
                    Whisper and DistilBERT
                  </li>
                  <li>
                    • Scaled GPU-backed async inference to 1,000+ req/sec with FastAPI, Redis, and EC2; load tested with
                    500+ concurrent users
                  </li>
                  <li>
                    • Boosted peak-time request success rate from 91% to 99.9% by architecting a real-time inference
                    queue with Redis Streams, AWS SQS, and async FastAPI workers to absorb burst traffic and eliminate
                    GPU overload
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* ML Software Engineer Intern - Dibbly */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-purple-400">ML Software Engineer Intern (Co-op)</CardTitle>
                    <CardDescription className="text-gray-300">Dibbly Inc</CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>Jan 2025 - May 2025</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Oakville, ON
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Built a RAG chatbot to handle 3,000+ weekly support queries in real-time (95% accuracy, 1–5s
                    latency), replacing a multi-day manual process for 5,000+ active users
                  </li>
                  <li>
                    • Fine-tuned Mistral-7B on SageMaker using PyTorch and CUDA, boosting alignment by 35% and cutting
                    bad responses by 33%
                  </li>
                  <li>
                    • Built a RAG pipeline with Bedrock, Kendra, and Lambda-based fallback routing, enabling low-latency
                    semantic search over 10,000+ docs and eliminating empty responses in 99.2% of queries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
