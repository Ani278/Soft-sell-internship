"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  licenseType: z.string().min(1, { message: "Please select a license type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Sell Your Software Licenses?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fill out the form and our team will get back to you within 24 hours with a valuation and next steps.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">No Obligation Valuation</h3>
                  <p className="text-muted-foreground">Get a free estimate with no commitment required.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Confidential Process</h3>
                  <p className="text-muted-foreground">Your information is kept secure and private.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Guidance</h3>
                  <p className="text-muted-foreground">Our specialists will help you through every step.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-background rounded-lg border shadow-sm p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="licenseType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>License Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select license type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="microsoft">Microsoft</SelectItem>
                              <SelectItem value="adobe">Adobe</SelectItem>
                              <SelectItem value="autodesk">Autodesk</SelectItem>
                              <SelectItem value="oracle">Oracle</SelectItem>
                              <SelectItem value="sap">SAP</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your software licenses (quantity, version, etc.)"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
