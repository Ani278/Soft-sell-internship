import HeroSection from "@/components/sections/hero-section"
import HowItWorks from "@/components/sections/how-it-works"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import ContactForm from "@/components/sections/contact-form"
import ChatWidget from "@/components/chat-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SoftSell - Software License Resale Made Easy",
  description:
    "Get the best value for your unused software licenses. SoftSell makes it easy to sell your licenses quickly and securely.",
  keywords: ["software resale", "license resale", "sell software licenses", "software marketplace"],
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  )
}
