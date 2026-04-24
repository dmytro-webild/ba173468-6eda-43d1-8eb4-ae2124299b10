"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="VoxAI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="VoxAI Receptionist"
      description="Revolutionizing business communication with state-of-the-art AI voice receptionists. Streamline your customer experience, 24/7."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-digital-waves-background-with-flowing-particles_1048-18665.jpg"
      imageAlt="AI Voice Technology"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Unmatched Efficiency"
      description="Our AI systems handle complex customer inquiries with human-like precision, ensuring zero downtime and higher customer satisfaction."
      metrics={[
        {
          value: "99%",
          title: "Accuracy Rate",
        },
        {
          value: "24/7",
          title: "Available",
        },
        {
          value: "50%",
          title: "Cost Savings",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/modern-infographic-element-collection_52683-1777.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Automated Answering",
          description: "Never miss a customer call, day or night.",
          imageSrc: "http://img.b2bpic.net/free-vector/business-strategies-with-color-elements_1284-1101.jpg",
        },
        {
          title: "Natural NLP",
          description: "Understanding context and nuance naturally.",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-npl-illustration_23-2149266853.jpg",
        },
        {
          title: "Round the Clock",
          description: "Available even on holidays.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-girl-happy-expression_1194-4371.jpg",
        },
      ]}
      title="Smart Features"
      description="Built for scale, speed, and intelligence."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",
          badge: "Essential",
          price: "$199/mo",
          subtitle: "Perfect for small businesses.",
          buttons: [
            {
              text: "Choose",
              href: "#",
            },
          ],
          features: [
            "1 AI Agent",
            "Basic Analytics",
            "Email Support",
          ],
        },
        {
          id: "business",
          badge: "Recommended",
          price: "$499/mo",
          subtitle: "For growing companies.",
          buttons: [
            {
              text: "Choose",
              href: "#",
            },
          ],
          features: [
            "5 AI Agents",
            "Advanced Analytics",
            "Priority Support",
            "Custom API",
          ],
        },
      ]}
      title="Scalable Plans"
      description="Pick the perfect plan for your business growth."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Voice Analytics",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-broker-looking-stock-market-exchange-statistics-with-global-money-trade-profit-computer-screen-analyzing-real-time-forex-data-report-make-hedge-fund-investment_482257-47670.jpg",
        },
        {
          id: "p2",
          name: "Transcriptions",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/business-concept-with-progress-close-up_23-2149151161.jpg",
        },
        {
          id: "p3",
          name: "AI Settings",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/multi-ethnic-business-team-sitting-table-office-center-speaking-about-project-meeting-broadroom_482257-5077.jpg",
        },
        {
          id: "p4",
          name: "Analytics",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/man-talking-someone-with-speaker_23-2148397748.jpg",
        },
        {
          id: "p5",
          name: "API Suite",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-watching-phone-screen-business-evolution-close-up_482257-32836.jpg",
        },
        {
          id: "p6",
          name: "Reports",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-music-playing-device-held-by-influencer-showing-it-his-subscribers_482257-121639.jpg",
        },
      ]}
      title="Platform Preview"
      description="Powerful management tools included."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex P.",
          handle: "@alex",
          testimonial: "VoxAI has transformed our support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-with-long-hair-dressed-yellow-jacket-red-shirt_613910-10364.jpg",
        },
        {
          id: "t2",
          name: "Sarah M.",
          handle: "@sarah",
          testimonial: "Seamless integration, excellent results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84866.jpg",
        },
        {
          id: "t3",
          name: "James L.",
          handle: "@james",
          testimonial: "Efficient and reliable daily.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-girl-with-short-curly-hair-eyeglasses-white-t-shir_574295-1267.jpg",
        },
        {
          id: "t4",
          name: "Emily K.",
          handle: "@emily",
          testimonial: "Increased lead conversion.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-young-man-casual-shirt-standing-with-laptop-hands_93675-134479.jpg",
        },
        {
          id: "t5",
          name: "Mike D.",
          handle: "@mike",
          testimonial: "The best AI tool we use.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-funny-cool-sister-with-curly-hair-winking-playfully-having-fun-foolind-around-sh_1258-152300.jpg",
        },
      ]}
      showRating={true}
      title="Client Success"
      description="What our partners say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How does it work?",
          content: "Our AI connects to your existing phone line.",
        },
        {
          id: "2",
          title: "Can it integrate with CRM?",
          content: "Yes, we support major CRM integrations.",
        },
        {
          id: "3",
          title: "Is support available?",
          content: "We offer 24/7 dedicated assistance.",
        },
      ]}
      title="Common Questions"
      description="Find answers to popular inquiries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Ready to scale?"
      description="Start your AI voice journey today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="VoxAI"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
