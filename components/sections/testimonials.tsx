"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechGrowth Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and their valuation was higher than we expected.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "As we transitioned to cloud services, we had numerous legacy licenses. SoftSell made it easy to convert these assets into capital that funded our digital transformation.",
      stars: 5,
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
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(testimonial.stars)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                    </div>
                  </div>
                  <p className="italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
