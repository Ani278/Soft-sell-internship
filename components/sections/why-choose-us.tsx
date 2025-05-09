"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, Award } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "Our platform ensures all license transfers are secure and compliant with software regulations.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment within 3 business days after acceptance.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Best Market Value",
      description: "Our extensive network of buyers ensures you get the highest possible value for your licenses.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Support",
      description: "Our team of software licensing experts guides you through every step of the process.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unique advantages that make us the preferred choice for software license resale.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-background rounded-lg shadow-sm border"
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
