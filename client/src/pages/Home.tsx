import { ExternalLink, Github, Linkedin, Instagram, Twitter, Menu, X, Music } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-lg md:text-xl font-bold font-sora">Faris Irfan</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#marketing" className="text-sm hover:text-accent transition-colors">Marketing</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#research" className="text-sm hover:text-accent transition-colors">Research</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#marketing" className="text-sm hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Marketing</a>
              <a href="#projects" className="text-sm hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#research" className="text-sm hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Research</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/assets/hero-abstract-tech.webp')",
          }}
        />
        <div className="relative container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold mb-4 md:mb-6 leading-tight">
              Marketing Leader
              <span className="block text-accent">& AI Founder</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              1M+ cumulative content views, 23.5K peak followers, RM20K+ direct revenue generated across multiple ventures. Built customer acquisition strategies from zero at Thryffy (10K downloads, 607K views, 11K followers) and Nwabuike (30K attendees, 207K views, 4K followers). Now building AI products: <strong>Iedos</strong> (dating app, deployed in 48 hours) and <strong>Kroeva</strong> (B2B SaaS, enterprise sales pipeline).
            </p>
            <div className="flex flex-col gap-3 md:gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-1.5 w-full">
                <a href="#marketing" className="flex items-center justify-center gap-2">
                  View Work
                  <ExternalLink size={16} />
                </a>
              </Button>
              <div className="flex flex-row flex-wrap gap-2 md:gap-3">
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="LinkedIn">
                  <a href="https://www.linkedin.com/in/faris-irfan-iedos/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Linkedin size={16} />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Instagram">
                  <a href="https://www.instagram.com/startupfoundr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Instagram size={16} />
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="GitHub">
                  <a href="https://github.com/kroevasuperadmin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="X (Twitter)">
                  <a href="https://x.com/startupfoundr_" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Twitter size={16} />
                    <span className="hidden sm:inline">X</span>
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="TikTok">
                  <a href="https://www.tiktok.com/@startupfoundr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Music size={16} />
                    <span className="hidden sm:inline">TikTok</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Metrics Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container px-4 md:px-6">
          {/* Top 4 Metrics Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-accent">10M+</div>
              <p className="text-sm md:text-base text-muted-foreground">Paid Ads Impressions</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-accent">1M+</div>
              <p className="text-sm md:text-base text-muted-foreground">Cumulative Content Views</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-accent">40K+</div>
              <p className="text-sm md:text-base text-muted-foreground">Customers & Attendees</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-accent">23.5K</div>
              <p className="text-sm md:text-base text-muted-foreground">Peak Followers</p>
            </div>
          </div>
          
          {/* Centerpiece Metric - Revenue */}
          <div className="flex justify-center">
            <div className="space-y-4 text-center">
              <div className="text-6xl md:text-7xl font-bold text-accent">RM20K+</div>
              <p className="text-lg md:text-xl text-muted-foreground">Direct Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Experience Section */}
      <section id="marketing" className="py-16 md:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-12 md:mb-16">Marketing Experience</h2>

          {/* Thryffy */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Thryffy</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Founding Marketing Manager (March 2020 - September 2022). Built customer acquisition strategy from zero, driving 10K app downloads and RM10K in direct platform revenue. Managed paid ads campaigns (1M+ impressions) and established repeatable content and acquisition playbook still used by Thryffy today.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm md:text-base"><strong>Customer Acquisition:</strong> 10K app downloads acquired, RM10K direct revenue, 607,274 cumulative views, 11K peak followers</p>
              <p className="text-sm md:text-base"><strong>Paid Marketing:</strong> ~6M paid ads impressions managed across Malaysia operations (2020-2022)</p>
              <p className="text-sm md:text-base"><strong>Content Strategy:</strong> Built content and social frameworks that drive customer acquisition, still replicated by Thryffy today</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 md:gap-3">
              <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Thryffy Malaysia Instagram">
                <a href="https://www.instagram.com/thryffymy/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <span>MY</span>
                </a>
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Thryffy Brunei Instagram">
                <a href="https://www.instagram.com/thryffybn/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <span>BN (11K)</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Nwabuike Ventures */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Nwabuike Ventures</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Social Media & Marketing Manager (July 2024 - April 2025). Built demand generation strategy for multiple event brands, driving 30K event attendees and RM10K in direct ticket sales. Managed paid ads campaigns (1M+ impressions) and established repeatable event marketing playbook still used by Nwabuike today.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm md:text-base"><strong>Customer Acquisition:</strong> 30K event attendees acquired, RM10K direct ticket sales revenue, 207,685 cumulative views, 4K peak followers</p>
              <p className="text-sm md:text-base"><strong>Paid Marketing:</strong> ~2M paid ads impressions managed across Instagram, TikTok, Facebook for multiple brands</p>
              <p className="text-sm md:text-base"><strong>Content Strategy:</strong> Built content and social frameworks that drive customer acquisition, still replicated by Nwabuike today</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 md:gap-3">
              <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Bazaar Bustle Instagram">
                <a href="https://www.instagram.com/bazaarbustle/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <span>Bazaar Bustle</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Lensa Emas */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Lensa Emas Productions</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Assistant Producer & Social Media Manager (March 2018 - March 2020). First exposure to social media analytics and performance tracking. Managed content strategy across film screenings and music video releases.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm md:text-base"><strong>Impact:</strong> 10K cumulative screening attendees, RM100K production shoot revenue</p>
              <p className="text-sm md:text-base"><strong>Social Media:</strong> Tested analytics tools (Zoho, SocialInsider alternatives) early in career</p>
              <p className="text-sm md:text-base"><strong>Content:</strong> Pioneered content frameworks still replicated by Lensa Emas today</p>
            </div>
          </div>

          {/* BuzzMY */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">BuzzMY</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Social Media & Marketing Manager (September 2019 - March 2020). Managed social media strategy and community engagement for event brand. Built brand to 5K followers and established recurring customer waitlist as primary revenue driver.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm md:text-base"><strong>Impact:</strong> 5K followers, event ticket sales (RM20-50 per ticket, 100-500 pax per event)</p>
              <p className="text-sm md:text-base"><strong>Platforms:</strong> Instagram, TikTok, Facebook</p>
              <p className="text-sm md:text-base"><strong>Content:</strong> Pioneered content styles and templates still replicated by BuzzMY and successor brands today</p>
            </div>
          </div>

          {/* Personal Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Personal Brand (@startupfoundr)</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Built personal brand through content strategy and community engagement. Demonstrated ability to create viral content and establish thought leadership in startup and growth marketing space.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm md:text-base"><strong>Content Performance:</strong> 7.3K views (top performing reel), 3.9K views (second best), demonstrating ability to create viral content</p>
              <p className="text-sm md:text-base"><strong>Platforms:</strong> Instagram, TikTok, LinkedIn - building thought leadership in GTM and growth marketing</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 md:gap-3">
              <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="@startupfoundr Instagram">
                <a href="https://www.instagram.com/startupfoundr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <span>@startupfoundr</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-12 md:mb-16">Founder Projects</h2>

          {/* Iedos */}
          <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Iedos</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                AI-powered dating app solving decision fatigue and time waste through intent-aligned matching and behavioral verification. Built in 48 hours. Live on Google Play Store (Dec 2025) and Apple App Store (Jan 2026).
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm md:text-base"><strong>Tech Stack:</strong> React Native, AI matching algorithms, behavioral verification</p>
                <p className="text-sm md:text-base"><strong>Market:</strong> B2C, targeting users fatigued by traditional dating apps</p>
              </div>
              <div className="flex flex-row flex-wrap gap-2 md:gap-3">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-1.5">
                  <a href="https://www.iedos.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Iedos GitHub">
                  <a href="https://github.com/Iedos-AI-Dating-App/iedos-ai-dating-app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-48 md:h-64 lg:h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center border border-border overflow-hidden">
              <img src="/assets/iedos_preview.png" alt="Iedos app preview" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Kroeva */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 h-48 md:h-64 lg:h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center border border-border overflow-hidden">
              <img src="/assets/kroeva_dashboard_dark.png" alt="Kroeva dashboard preview" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kroeva</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                B2B SaaS iPaaS platform eliminating workflow waste for enterprise teams. Integrates Claude, Manus, Hailuo, Higgsfield, and custom AI systems into production workflows. Built enterprise sales pipeline and GTM strategy for operations-focused buyers.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm md:text-base"><strong>Tech Stack:</strong> Next.js, TypeScript, AI integrations</p>
                <p className="text-sm md:text-base"><strong>Market:</strong> B2B enterprise, CFOs and operations leads</p>
              </div>
              <div className="flex flex-row flex-wrap gap-2 md:gap-3">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-1.5">
                  <a href="https://www.kroeva.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="Kroeva GitHub">
                  <a href="https://github.com/kroevasuperadmin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 md:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-12 md:mb-16">Research & Thought Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <a href="https://medium.com/@wildricemedia/whop-com-a-research-report-53b2cb85efd1" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-accent transition-colors">Whop.com: A Research Report</h3>
              <p className="text-sm text-muted-foreground">Strategic analysis of creator economy infrastructure</p>
            </a>
            <a href="https://medium.com/@wildricemedia/the-abg-phenomenon-a-strategic-lever-for-startup-growth-efd665bc443b" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-accent transition-colors">The ABG Phenomenon</h3>
              <p className="text-sm text-muted-foreground">Strategic lever for startup growth in Southeast Asia</p>
            </a>
            <a href="https://medium.com/@wildricemedia/the-dinosaur-and-the-asteroid-an-autopsy-of-the-modern-dating-app-industry-d84a62a9152b" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-accent transition-colors">The Dinosaur and the Asteroid</h3>
              <p className="text-sm text-muted-foreground">Autopsy of the modern dating app industry</p>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-12 md:mb-16">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Alif Yazid Testimonial */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Alif Yazid</h3>
                  <p className="text-sm text-accent">Director at Lensa Emas Production</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                "I've known Faris since 2016, and from the very beginning, I've admired his relentless work ethic and unique way of thinking. He stands out as someone who's not only very smart but also able to approach challenges with strong critical thinking and sharp initiative. What sets Faris apart is his ability to see things differently — to think beyond the obvious and turn ideas into action. Hardworking, dependable, and forward-thinking, he would be an incredible asset to any team or organization."
              </p>
            </div>

            {/* Humayun Razzaq Testimonial */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Humayun Razzaq</h3>
                  <p className="text-sm text-accent">OoGyaa Founder</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                "Faris worked as an Operations Executive at OoGyaa Mobility, where he was a key part of our day-to-day operations. He handled fleet logistics, on-ground coordination, and maintenance support with reliability and a good attitude. He was proactive, dependable, and always ready to help when needed. I appreciated his contribution to the team and wish him the best in his future roles."
              </p>
            </div>

            {/* Uchechukwu Nwabuike Testimonial */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Uchechukwu Nwabuike</h3>
                  <p className="text-sm text-accent">CEO, Nwabuike Ventures</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                "I've worked with Faris for almost a decade now and he's diligent in his work, be it marketing or event coordination, you can always count on him and he's also a team player."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reel Case Studies Section */}
      <section className="py-16 md:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-12 md:mb-16">Instagram Reel Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Reel 1 */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">7.3K Views</h3>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Top-performing reel on @startupfoundr personal brand. Focused on startup execution insights and founder lessons.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Format:</strong> Short-form video (15-30 seconds) | <strong>Content:</strong> Founder insights, actionable tips
              </p>
            </div>

            {/* Reel 2 */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">3.9K Views</h3>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Second-best performing reel. Focused on content creation strategies and social media growth tactics.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Format:</strong> Short-form video (15-30 seconds) | <strong>Content:</strong> Content strategy, growth hacks
              </p>
            </div>

            {/* Aggregate Metrics */}
            <div className="p-6 md:p-8 border border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">150K+ Total Views</h3>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Cumulative views across all @startupfoundr content. 3.5K peak followers. Consistent engagement on startup and marketing topics.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Audience:</strong> Aspiring founders, marketers, startup enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold mb-8 md:mb-12">Get In Touch</h2>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Interested in discussing marketing strategy, startup execution, or AI integration? Let's connect.
            </p>
            <div className="flex flex-row flex-wrap gap-3 md:gap-4 mb-8">

              <Button variant="outline" className="border-border hover:bg-secondary px-3 py-1.5" aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/faris-irfan-iedos/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Faris Irfan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
