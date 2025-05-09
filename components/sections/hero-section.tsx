"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Turn Unused Software Licenses Into Cash
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                SoftSell helps you sell your unused software licenses quickly, securely, and at the best market value.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link href="#contact">Sell My Licenses</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">How It Works</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Trusted by 500+ businesses worldwide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[350px] md:h-[400px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="font-medium">License Valuation</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Just now</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="font-medium">Adobe Creative Cloud (3 seats)</p>
                    <p className="text-sm text-muted-foreground">Estimated value: $1,200 - $1,450</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="font-medium">Microsoft Office 365 (10 seats)</p>
                    <p className="text-sm text-muted-foreground">Estimated value: $850 - $1,050</p>
                  </div>
                  <Button className="w-full">Get Paid Now</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
