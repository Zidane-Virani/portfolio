"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Github, ArrowLeft, Play, Copy } from "lucide-react"
import Link from "next/link"

export default function GPTLanguageModel() {
  const [inputText, setInputText] = useState("The future of artificial intelligence is")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate text generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setGeneratedText(
      inputText +
        " rapidly evolving, with transformer architectures leading the way in natural language processing. These models demonstrate remarkable capabilities in understanding context, generating coherent text, and performing complex reasoning tasks.",
    )
    setIsGenerating(false)
  }

  const codeExample = `class GPTModel(nn.Module):
    def __init__(self, vocab_size, d_model, n_heads, n_layers):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model)
        self.transformer_blocks = nn.ModuleList([
            TransformerBlock(d_model, n_heads) 
            for _ in range(n_layers)
        ])
        self.ln_f = nn.LayerNorm(d_model)
        self.head = nn.Linear(d_model, vocab_size)
    
    def forward(self, x):
        x = self.embedding(x) + self.pos_encoding(x)
        for block in self.transformer_blocks:
            x = block(x)
        x = self.ln_f(x)
        return self.head(x)`

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
            <h1 className="text-4xl font-bold mb-4">GPT Style Language Model</h1>
            <p className="text-xl text-gray-300">
              A transformer-based language model built from scratch in PyTorch with custom tokenization and training
              pipeline.
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
                    Built a complete GPT-style language model from scratch, implementing all core transformer components
                    including multi-head attention, positional encoding, and causal masking. The model supports both
                    text generation and classification tasks.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• Custom BPE tokenizer implementation</li>
                      <li>• Multi-head self-attention mechanism</li>
                      <li>• Causal masking for autoregressive generation</li>
                      <li>• Residual connections and layer normalization</li>
                      <li>• Top-k and nucleus sampling strategies</li>
                      <li>• Modular architecture for different tasks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Architecture</h4>
                      <p className="text-gray-300 text-sm">
                        The model follows the standard transformer decoder architecture with 12 layers, 768 hidden
                        dimensions, and 12 attention heads. Trained on a diverse text corpus with AdamW optimizer.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Training Details</h4>
                      <p className="text-gray-300 text-sm">
                        Implemented custom training loop with gradient clipping, learning rate scheduling, and
                        checkpointing. Used cross-entropy loss with label smoothing for better generalization.
                      </p>
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
                    {["PyTorch", "NumPy", "Matplotlib", "AdamW", "Transformers", "CUDA", "Python"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400">Try the Model</CardTitle>
                  <CardDescription>Enter a prompt and see the model generate text</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Input Prompt</label>
                    <Textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Enter your prompt here..."
                      className="bg-gray-800 border-gray-700 text-white"
                      rows={3}
                    />
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Generate Text
                      </>
                    )}
                  </Button>
                  {generatedText && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Generated Output</label>
                      <div className="bg-gray-800 border border-gray-700 rounded-md p-3">
                        <p className="text-gray-300 text-sm leading-relaxed">{generatedText}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center justify-between">
                    Code Example
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-800 border border-gray-700 rounded-md p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{codeExample}</code>
                  </pre>
                </CardContent>
              </Card>

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
                  Download Model
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
