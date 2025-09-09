import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AppProvider } from '@/contexts/AppContext';
import SiteHeader from '@/components/SiteHeader';

const team = {
  leadership: [
    { 
      name: 'Volker Kunze', 
      role: 'Co-founder and Chairman Governing Board', 
      bio: 'Visionary leader and strategic advisor with extensive experience in technology governance and international partnerships. Volker brings global perspective and strategic oversight to drive African Ai DTG\'s mission of digital transformation across the continent.',
      image: '/Board chair profile.jpg'
    },
    { 
      name: 'Shedrack Bata Joel', 
      role: 'CEO and Founder', 
      bio: 'Passionate entrepreneur and technology innovator with deep roots in Borno State. Shedrack founded African Ai DTG with a vision to harness AI for Africa\'s digital transformation, leading the company\'s growth from humble beginnings to continental impact.',
      image: '/CEO profile.jpg'
    },
    { 
      name: 'Daniel Nicholas Dibal', 
      role: 'CTO', 
      bio: 'Technical architect and innovation leader responsible for building the robust technology foundation that powers African Ai DTG\'s solutions. Daniel oversees the development of cutting-edge platforms that serve governments, enterprises, and communities across Africa.',
      image: '/CTO Profile.png'
    },
  ],
};

const Team: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SiteHeader />
        {/* Hero */}
        <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2 text-base sm:text-lg">
              Our Leadership Team
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
              Visionaries. Innovators. Leaders.
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Three exceptional leaders driving Africa's digital transformation through artificial intelligence, 
              strategic vision, and technical excellence.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {team.leadership.map((person, index) => (
                <Card key={person.name} className="group bg-white/5 backdrop-blur-sm border-gray-300/30 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105">
                  <CardHeader className="text-center pb-6 sm:pb-8">
                    {/* Profile Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-2xl">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover brightness-110 contrast-125"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                <span class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                                  ${person.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {person.name}
                    </CardTitle>
                    <CardDescription className="text-amber-300 text-base sm:text-lg font-semibold">
                      {person.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed text-center text-sm sm:text-base">
                      {person.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Our Shared Vision</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Together, we are building a future where artificial intelligence serves humanity, 
              where technology bridges gaps, and where innovation creates opportunities for all of Africa. 
              Our leadership team combines global perspective, local expertise, and technical excellence 
              to deliver transformative solutions that make a real difference.
            </p>
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
    </AppProvider>
  );
};

export default Team;
