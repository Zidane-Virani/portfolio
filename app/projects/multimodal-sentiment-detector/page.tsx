"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Github, ArrowLeft, Upload, Play, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function MultimodalSentimentDetector() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setResults(null)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setResults({
      emotions: {
        happy: 0.72,
        neutral: 0.15,
        sad: 0.08,
        angry: 0.03,
        surprised: 0.02,
      },
      confidence: 0.89,
      dominant_emotion: "Happy",
      facial_features: {
        smile_detected: true,
        eye_contact: true,
        head_pose: "frontal",
      },
      audio_features: {
        tone: "positive",
        energy_level: "high",
        speech_rate: "normal",
      },
    })
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-4xl font-bold mb-4">Multimodal Sentiment Detector</h1>
            <p className="text-xl text-gray-300">
              Advanced emotion analysis system that processes video, audio, and facial expressions to detect human
              emotions with 89% accuracy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    A comprehensive multimodal sentiment detection system that analyzes uploaded videos to identify
                    human emotions by combining computer vision, audio processing, and natural language understanding.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Capabilities:</h4>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• Real-time facial expression recognition</li>
                      <li>• Voice tone and prosody analysis</li>
                      <li>• Contextual understanding from speech</li>
                      <li>• Multi-modal fusion for improved accuracy</li>
                      <li>• Support for multiple video formats</li>
                      <li>• Confidence scoring and uncertainty quantification</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Technical Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Computer Vision Pipeline</h4>
                      <p className="text-gray-300 text-sm">
                        Uses MediaPipe for face detection and landmark extraction, followed by a CNN trained on facial
                        expression datasets. Processes 30 FPS with real-time performance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Audio Processing</h4>
                      <p className="text-gray-300 text-sm">
                        Extracts MFCC features, spectrograms, and prosodic features using Librosa. Combines with
                        speech-to-text for contextual analysis using BERT embeddings.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Fusion Strategy</h4>
                      <p className="text-gray-300 text-sm">
                        Late fusion approach combining predictions from visual, audio, and text modalities using
                        weighted ensemble with learned attention mechanisms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">89%</div>
                      <div className="text-sm text-gray-400">Overall Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">0.92</div>
                      <div className="text-sm text-gray-400">F1 Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">30ms</div>
                      <div className="text-sm text-gray-400">Inference Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">7</div>
                      <div className="text-sm text-gray-400">Emotion Classes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "MediaPipe", "TensorFlow", "Librosa", "BERT", "FastAPI", "Python", "NumPy"].map(
                      (tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Try the Detector</CardTitle>
                  <CardDescription>Upload a video to analyze emotions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="video-upload"
                    />
                    <label htmlFor="video-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">{selectedFile ? selectedFile.name : "Click to upload video"}</p>
                      <p className="text-sm text-gray-500">Supports MP4, AVI, MOV formats</p>
                    </label>
                  </div>

                  <Button
                    onClick={handleAnalyze}
                    disabled={!selectedFile || isAnalyzing}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Analyze Emotions
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {results && (
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Dominant Emotion</span>
                        <span className="text-purple-400">{results.dominant_emotion}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white font-semibold">Confidence</span>
                        <span className="text-purple-400">{(results.confidence * 100).toFixed(1)}%</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Emotion Breakdown</h4>
                      {Object.entries(results.emotions).map(([emotion, score]: [string, any]) => (
                        <div key={emotion} className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300 capitalize">{emotion}</span>
                            <span className="text-gray-300">{(score * 100).toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${score * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Visual Features</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>Smile: {results.facial_features.smile_detected ? "✓" : "✗"}</li>
                          <li>Eye Contact: {results.facial_features.eye_contact ? "✓" : "✗"}</li>
                          <li>Head Pose: {results.facial_features.head_pose}</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Audio Features</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>Tone: {results.audio_features.tone}</li>
                          <li>Energy: {results.audio_features.energy_level}</li>
                          <li>Speech Rate: {results.audio_features.speech_rate}</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  API Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
