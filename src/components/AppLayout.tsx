import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
 
import { Link, useLocation } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SiteHeader />

      {/* Hero Section with background video */}
      <section className="relative px-0 py-0 text-center text-white overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/Header section video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 backdrop-blur-[1px]">
          <div className="max-w-4xl mx-auto">
            <img
              src="/Transparent African Ai DTG logo.png"
              alt="African Ai DTG"
              className="mx-auto mb-4 sm:mb-6 h-24 sm:h-32 md:h-40 lg:h-48 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight pb-2">
              Engineering Digital Transformation
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto px-4">
              We partner with governments, institutions, and enterprises to build robust technology solutions, 
              inspired by a legacy of strength and driven by future-focused innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-400 hover:bg-white hover:text-black w-full sm:w-auto" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Your Partner in Progress</h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-2">
            We are a full-spectrum technology and innovation firm born in the heart of Northeast Nigeria. 
            We don't just build software; we build systems that work. From pioneering e-governance frameworks 
            to deploying advanced telehealth solutions, we provide the end-to-end expertise required to turn 
            ambitious ideas into tangible impact.
          </p>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 text-left md:grid-cols-2">
            <div className="rounded-lg border border-gray-300 bg-white/10 p-4 sm:p-6">
              <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-amber-300">Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                To engineer a future for Africa where technology creates accessible governance, empowers
                communities, and drives sustainable economic growth for all.
              </p>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white/10 p-4 sm:p-6">
              <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-amber-300">Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Our mission is to design, build, and deploy bespoke technology solutions for public and private
                sector partners. We solve the continent's most complex challenges through relentless innovation,
                deep local insight, and an unwavering commitment to delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Our Story</h2>
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-4 sm:space-y-6">
            <p>
              At African Ai DTG, our vision is singular and bold: to harness the power of Artificial Intelligence 
              to accelerate Africa's digital transformation.
            </p>
            <p>
              Our journey didn't begin in a conventional tech hub. It started in Maiduguri, Borno State of Nigeria 
              —an environment that demands more than just solutions; it demands intelligent, resilient systems built 
              from the ground up. This origin forged our unique approach. We learned to apply data-driven insights 
              and Ai-powered tools not as a luxury, but as a necessity to solve complex, real-world problems in 
              governance, healthcare, business, education and agriculture.
            </p>
            <p>
              This experience became our proof of concept. We demonstrated that the most challenging environments 
              are often the most fertile ground for groundbreaking innovation.
            </p>
            <p>
              Today, we bring this battle-tested expertise to the entire continent. We are African Ai DTG—a team 
              of strategists, engineers, and innovators dedicated to building a smarter, more connected, and 
              prosperous future for all of Africa, driven by the transformative potential of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">How We Work: Our Guiding Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Extreme Ownership</CardTitle>
                <CardDescription className="text-gray-400">
                  We take full responsibility for our work, our promises, and the outcomes we deliver. Every team member is an owner.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Relentless Execution</CardTitle>
                <CardDescription className="text-gray-400">
                  Our job is not done until the solution is deployed, adopted, and delivering value. We are defined by our follow-through.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Pioneering Innovation</CardTitle>
                <CardDescription className="text-gray-400">
                  We embrace emerging technologies not for the trend, but for the transformative power they offer. We are perpetually learning and adapting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Pragmatic Resilience</CardTitle>
                <CardDescription className="text-gray-400">
                  We tackle the hardest problems with clear-eyed realism and unwavering grit. We know transformation isn't easy, and we are built for the challenge.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">₦</span>
                </div>
                <CardTitle className="text-white">Strategic Frugality</CardTitle>
                <CardDescription className="text-gray-400">
                  We operate with efficiency and resourcefulness, ensuring we provide maximum value and impact for every investment our clients make.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-gray-300 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <CardTitle className="text-white">Impact</CardTitle>
                <CardDescription className="text-gray-400">
                  We measure success not by lines of code or system uptime, but by the real-world, positive change our solutions create for people, communities, and institutions. This principle compels us to build with empathy, to listen deeply to the needs of the end-users, and to ensure that every feature we develop serves a meaningful purpose.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-4 sm:mb-6">
              <span className="text-blue-400 text-xs sm:text-sm font-medium">OUR EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              From government digitalization to enterprise innovation, we deliver end-to-end technology expertise 
              that transforms organizations and drives sustainable growth across Africa.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* GovTech & Public Sector */}
            <Card className="group bg-white/5 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2 sm:p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mx-auto sm:mx-0">
                    <img src="/GOVTECH.png" alt="GovTech" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                      GovTech & Public Sector Digitalization
                    </CardTitle>
                    <CardDescription className="text-blue-200/80 text-sm sm:text-base">
                      Building the digital infrastructure for modern, transparent, and efficient governance
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                  We empower governments and public institutions to serve citizens more effectively through secure, 
                  scalable, and user-friendly digital solutions that enhance transparency, streamline operations, 
                  and improve public service delivery across all levels of government.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  This is a core area of our expertise, focusing on digital transformation for government bodies.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">Borno State Government</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Comprehensive E-governance framework and 15 e-governance solutions for various ministries and agencies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">BOSIMP (Borno State Social Investment Management Programme)</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Borno State Entrepreneurship Hub and supporting data dashboard for social investment programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">Citizen-Government Bridge</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Reporting management system for communication and accountability between citizens and government</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">Social Beneficiary Management System (SBMS)</p>
                      <p className="text-gray-300 text-xs sm:text-sm">System for distribution of social packages for government and humanitarian sectors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">BICTDA (Borno ICT Development Agency)</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Internal MIS and 3 Learning Management Systems for kids, adults, and artisans</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Enterprise Solutions */}
            <Card className="group bg-white/5 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                    <img src="/enterprisesolutions.png" alt="Enterprise Solutions" className="w-12 h-12 object-contain rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2 group-hover:text-green-300 transition-colors">
                      Custom Enterprise Solutions
                    </CardTitle>
                    <CardDescription className="text-green-200/80 text-base">
                      Developing bespoke software, IoT systems, and platforms for HealthTech, AgriTech, and Security
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We build technology that solves specific industry challenges. From patient care to farm yields, 
                  our bespoke solutions are designed to optimize processes, improve outcomes, and create a 
                  competitive advantage for your organization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">UMTH (University of Maiduguri Teaching Hospital)</p>
                      <p className="text-gray-300 text-sm">Telehealth Information System, Virtual Reality (VR) solution, and IoT solutions for patient care and follow-up</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">KofaSentinel</p>
                      <p className="text-gray-300 text-sm">Smart gate software showcasing capability in security and property technology (PropTech)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Faculty of Law, University of Maiduguri</p>
                      <p className="text-gray-300 text-sm">Faculty website and learning management system development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Agri-connect</p>
                      <p className="text-gray-300 text-sm">Dedicated platform for farmers showcasing expertise in AgriTech</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Kanem Velocity Park</p>
                      <p className="text-gray-300 text-sm">Cultural and creative park blending sports and technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">"Eklesia" Gospel Podcast & Tech Journal "Faithflow"</p>
                      <p className="text-gray-300 text-sm">Podcast platform and tech journal showcasing versatility in media and content delivery systems</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Capacity Building */}
            <Card className="group bg-white/5 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                    <img src="/capacitybuilding.png" alt="Capacity Building" className="w-12 h-12 object-contain rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2 group-hover:text-orange-300 transition-colors">
                      Technology Capacity Building
                    </CardTitle>
                    <CardDescription className="text-orange-200/80 text-base">
                      Empowering the next generation of builders through targeted curriculum and intensive bootcamps, seminars and workshops
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We believe in building sustainable technology ecosystems. Our capacity building programs equip 
                  individuals and organizations with the skills, knowledge, and mindset needed to drive digital 
                  transformation in their communities.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Leveraging our origins and humble beginnings, we have a strong portfolio in education and skill development.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Learning Management Systems (LMS)</p>
                      <p className="text-gray-300 text-sm">Three distinct LMS tailored for different audiences: kids, adults, and artisans, plus faculty law system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Curriculum Development</p>
                      <p className="text-gray-300 text-sm">Specialized curriculum for artisans, adults and kids across digital literacy centers in Borno state and beyond</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Training & Workshops</p>
                      <p className="text-gray-300 text-sm">Extensive experience conducting bootcamps, seminars, and workshops on digital literacy and branding for K-12 students, undergrads, and SMEs in Borno and Jigawa states</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">NBET Selection</p>
                      <p className="text-gray-300 text-sm">Official selection by the National Board for Educational Technology (NBET) as a skill provider, validating our expertise</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Strategy & Design */}
            <Card className="group bg-white/5 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <img src="/digitalstrategyanddesign.png" alt="Digital Strategy & Design" className="w-12 h-12 object-contain rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                      Digital Strategy & Design
                    </CardTitle>
                    <CardDescription className="text-purple-200/80 text-base">
                      From UI/UX and branding to documentary production, we craft the narratives that drive adoption
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  A great solution requires a great user experience and a compelling story. Our design and strategy 
                  team works to ensure your digital product is not only functional but also intuitive, engaging, 
                  and perfectly aligned with your brand.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Web Design</p>
                      <p className="text-gray-300 text-sm">Diverse client portfolio including BICTDA, BOSGGW, BOSIMP, Faculty of Law, Multicyclic tech solutions, Zaimah fresh, and Corporate Barbershop</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Graphic Design & Branding</p>
                      <p className="text-gray-300 text-sm">Significant experience creating visibility materials, having designed over 20 brochures and 150+ fliers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">UI/UX Design</p>
                      <p className="text-gray-300 text-sm">Using Figma, designed a wide array of apps across multiple sectors including edtech, agritech, telehealth, fintech, and e-commerce</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold">Video Production</p>
                      <p className="text-gray-300 text-sm">Produced video documentaries for clients like BICTDA and BOSGGW, demonstrating multimedia skills</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Our Solutions Section */}
          <section className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
            {/* Video Background */}
            <video 
              autoPlay 
              muted 
              loop 
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/Our solutions background.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-4 sm:mb-6">Our Solutions</h2>
                <p className="text-base sm:text-lg lg:text-xl text-amber-200 max-w-3xl mx-auto px-2">
                  Innovative technology solutions built for organizations across Africa. 
                  From government digitalization to enterprise platforms, discover our comprehensive suite of services.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* LMS for Adults */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">LMS for Adults</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Upskill for Tomorrow. Learn Today.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Our Learning Management System for adults is designed for career growth and lifelong learning. Access practical courses, gain certified skills, and learn at your own pace with a platform built to fit your busy life. It's more than education; it's your pathway to professional advancement.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://dlva.com.ng/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* LMS for Kids */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">LMS for Kids</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Where Learning and Fun Click!</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Welcome to a safe and engaging digital playground where kids can explore the world of technology. Our interactive LMS for children makes learning foundational digital skills an adventure, with fun games, creative projects, and easy-to-follow lessons that spark curiosity and build confidence.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://dlvakids.com.ng/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Ekklesia Podcast */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Ekklesia Podcast</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Your Daily Dose of Faith and Inspiration.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    The Ekklesia Podcast is a space for spiritual nourishment and uplifting conversation. Tune in to hear inspiring sermons, thoughtful discussions, and powerful testimonies that connect you to a community of faith, anytime and anywhere.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://ekklesiaebomi.vercel.app/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Borno Agri-Connect */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Borno Agri-Connect</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Empowering Farmers with Data-Driven Agriculture.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Borno Agri-Connect is a revolutionary platform designed to link farmers to markets, resources, and vital information. By leveraging technology, we help farmers increase their yields, access fair pricing, and adopt modern agricultural practices for a more prosperous and food-secure future.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://borno-agriconnect.vercel.app/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Social Beneficiary Management System */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Social Beneficiary Management System</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Transparent Aid. Measurable Impact.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Our Social Beneficiary Management System is a robust tool for NGOs and government agencies dedicated to efficient and transparent aid distribution. Track beneficiaries, manage resources, and generate real-time impact reports to ensure your support reaches those who need it most, every time.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://sbms-silk.vercel.app/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Multicyclic Tech Solutions Website */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Multicyclic Tech Solutions Website</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Your Vision, Engineered.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    At Multicyclic Tech Solutions, we built their website to deliver end-to-end technology services that drive growth and efficiency.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://multicyclictechsolutions.com.ng/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Kanem Velocity Park */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Kanem Velocity Park</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">The Hub for Borno's Creative Economy.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Kanem Velocity Park is a dynamic ecosystem where culture, creativity, and technology converge. We provide a platform for artists, innovators, and entrepreneurs to connect, collaborate, and showcase their talent to the world, driving the growth of the region's vibrant creative industry.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://kanemvelocitypark.com.ng/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* KofaSentinel (PropTech) */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">KofaSentinel (PropTech)</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Intelligent Access for Modern Properties.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    KofaSentinel is a state-of-the-art PropTech solution that redefines property security and management. Our smart gate system offers seamless, secure access control for residential estates and corporate facilities, combining cutting-edge technology with user-friendly convenience.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://kofa-sentinel.vercel.app/', '_blank')}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Citizen Reporting Platform */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2">Citizen Reporting Platform</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Your Voice, Amplified. Our Community, Improved.</h4>
                  <p className="text-amber-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    This platform is a direct bridge between you and your government. Report civic issues, provide feedback, and stay informed about community projects with a simple, intuitive tool designed to foster accountability, transparency, and collaborative problem-solving.
                  </p>
                  <button 
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200 text-sm sm:text-base"
                    onClick={() => window.open('https://bictdareport.com/', '_blank')}
                  >
                    Learn More →
                  </button>
          </div>
          </div>
        </div>
      </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-blue-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Organization?</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Let's discuss how our comprehensive technology solutions can drive your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-blue-400 hover:bg-white/10 w-full sm:w-auto" asChild>
                  <Link to="/team">Meet Our Team</Link>
            </Button>
              </div>
          </div>
          </div>
        </div>
      </section>


      {/* Final Call to Action Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Let's discuss how we can deliver similar transformative results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-blue-400 hover:bg-white hover:text-black w-full sm:w-auto" asChild>
              <Link to="/team">Meet Our Team</Link>
          </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Trusted Partners</h2>
            <p className="text-gray-300 text-base sm:text-lg">We're proud to work with leading organizations across Africa</p>
          </div>
          
          {/* Scrolling Partners Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 sm:space-x-12 items-center cursor-pointer">
              {/* First set of partner logos */}
              <div className="flex space-x-8 sm:space-x-12 items-center flex-shrink-0">
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BICTDA Report Logo.png" alt="BICTDA" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Bosimp logo.png" alt="BOSIMP" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Umth logo.jpg" alt="UMTH" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BOA.png" alt="BOA" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BOAGGW.jpg" alt="BOAGGW" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/NBTE.png" alt="NBTE" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/NYSC.png" alt="NYSC" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/LAWSAN.png" alt="LAWSAN" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Digital Literacy Academy Logo.png" alt="Digital Literacy Academy" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/KofaSentinel logo.png" alt="KofaSentinel" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Multicyclic.jpg" alt="Multicyclic" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Zaimah fresh logo.jpg" alt="Zaimah Fresh" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center flex-shrink-0">
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BICTDA Report Logo.png" alt="BICTDA" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Bosimp logo.png" alt="BOSIMP" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Umth logo.jpg" alt="UMTH" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BOA.png" alt="BOA" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/BOAGGW.jpg" alt="BOAGGW" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/NBTE.png" alt="NBTE" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/NYSC.png" alt="NYSC" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/LAWSAN.png" alt="LAWSAN" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Digital Literacy Academy Logo.png" alt="Digital Literacy Academy" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/KofaSentinel logo.png" alt="KofaSentinel" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Multicyclic.jpg" alt="Multicyclic" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-24 h-12 sm:w-32 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-gray-300/20 p-1 sm:p-2">
                  <img src="/Partners logo/Zaimah fresh logo.jpg" alt="Zaimah Fresh" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-6 sm:py-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 sm:gap-3 text-center">
          <img src="/Transparent African Ai DTG logo.png" alt="African Ai DTG" className="h-6 sm:h-8" />
          <p className="text-gray-400 text-sm sm:text-base">© 2024 African Ai DTG. A Legacy of Resilience. A Future of Innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;