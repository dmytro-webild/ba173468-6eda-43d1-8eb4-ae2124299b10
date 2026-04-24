"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Features", id: "features" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Vox AI"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardScroll
            title="The Future of Voice Reception"
            description="Elegant AI-driven voice receptionists tailored for modern businesses. Streamline interactions with minimalist, high-performance technology."
            background={{ variant: "sparkles-gradient" }}
            tag="AI Voice Solutions"
            buttons={[{ text: "Get Started", href: "#contact" }]}
            imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000"
            imageAlt="Minimalist AI Voice Tech"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            useInvertedBackground={true}
            title="Minimalist Precision"
            description="Our systems provide silent, powerful voice automation that feels natural, professional, and entirely invisible to your customers."
            metrics={[
              { value: "99.9%", title: "Uptime" },
              { value: "24/7", title: "Active" },
              { value: "0s", title: "Wait Time" },
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardSeven
            animationType="blur-reveal"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { title: "Voice Synthesis", description: "Human-grade articulation.", imageSrc: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=800" },
              { title: "CRM Integration", description: "Seamless data sync.", imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
              { title: "Sentiment Analysis", description: "Understand the customer intent.", imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
            ]}
            title="Elegance in Automation"
            description="Powerful tools designed for the modern AI-first business."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardTwo
            animationType="blur-reveal"
            textboxLayout="split"
            useInvertedBackground={true}
            plans={[
              { id: "starter", badge: "Essential", price: "$199", subtitle: "Core Voice Service", buttons: [{ text: "Select Plan", href: "#contact" }], features: ["Single Agent", "Basic Analytics", "24/7 Support"] },
              { id: "pro", badge: "Pro", price: "$499", subtitle: "Advanced Reception", buttons: [{ text: "Select Plan", href: "#contact" }], features: ["Multi-Agent", "Full API Access", "Sentiment Reports"] }
            ]}
            title="Transparent Pricing"
            description="Clear, fair, and scalable plans for your agency."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            tag="Contact"
            title="Design Your Reception"
            description="Get in touch to discuss your specific agency requirements."
            background={{ variant: "radial-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="VoxAI"
            columns={[
              { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
              { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "FAQ", href: "#faq" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}