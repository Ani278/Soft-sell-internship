"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get Valuation",
      description: "Receive a competitive market valuation based on current demand and license type.",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly via your preferred payment method.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your software licenses quick and hassle-free.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border"
              variants={itemVariants}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-4 text-3xl font-bold text-primary">{index + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
