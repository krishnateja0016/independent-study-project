import React, { useState } from 'react';
import { 
  Heart, 
  Zap, 
  Shield, 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                IRON MAN
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('suits')} className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium">
                  Suits
                </button>
                <button onClick={() => scrollToSection('timeline')} className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium">
                  Timeline
                </button>
                <button onClick={() => scrollToSection('achievements')} className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium">
                  Achievements
                </button>
                
              </div>
            </div>

            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-red-600/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-red-500 px-3 py-2 text-base font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('suits')} className="block text-gray-300 hover:text-red-500 px-3 py-2 text-base font-medium w-full text-left">
                Suits
              </button>
              <button onClick={() => scrollToSection('timeline')} className="block text-gray-300 hover:text-red-500 px-3 py-2 text-base font-medium w-full text-left">
                Timeline
              </button>
              <button onClick={() => scrollToSection('achievements')} className="block text-gray-300 hover:text-red-500 px-3 py-2 text-base font-medium w-full text-left">
                Achievements
              </button>
              
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-yellow-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent">
            IRON MAN
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Genius. Billionaire. Playboy. Philanthropist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Discover the Legend
            </button>
            <button 
              onClick={() => scrollToSection('suits')}
              className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Armor Collection
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Tony Stark Biography
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-2xl"
                style={{
                  backgroundImage: 'url(/images/profile.png)'
                }}
              ></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-red-600/20">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Real Name:</p>
                    <p className="text-white font-semibold">Anthony Edward Stark</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Born:</p>
                    <p className="text-white font-semibold">May 29, 1970</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Height:</p>
                    <p className="text-white font-semibold">6'1" (1.85m)</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Weight:</p>
                    <p className="text-white font-semibold">225 lbs (102kg)</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Occupation:</p>
                    <p className="text-white font-semibold">CEO, Inventor, Superhero</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Base:</p>
                    <p className="text-white font-semibold">Malibu, California</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-red-600/20">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tony Stark is a genius inventor and billionaire industrialist who created a powerful suit of armor to save his life and protect the world as Iron Man. As the CEO of Stark Industries, he has dedicated his life to advancing technology and protecting humanity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  After being captured by terrorists and forced to build weapons, Stark instead created his first Iron Man suit to escape. Since then, he has become one of Earth's Mightiest Heroes and a founding member of the Avengers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suits Section */}
      <section id="suits" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Iron Man Armor Collection
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mark I",
                description: "The original suit built in captivity using scraps and basic materials.",
                features: ["Basic Propulsion", "Flame Thrower", "Crude Armor"],
                image: "/images/armor/mark1.jpg"
              },
              {
                name: "Mark VII",
                description: "Battle of New York armor with enhanced combat capabilities.",
                features: ["Repulsor Technology", "Unibeam", "Advanced AI"],
                image: "/images/armor/mark7.jpg"
              },
              {
                name: "Mark L (50)",
                description: "Infinity War nanotechnology suit with bleeding-edge tech.",
                features: ["Nanotechnology", "Shape-shifting", "Self-repair"],
                image: "/images/armor/mark50.jpg"
              },
              {
                name: "War Machine",
                description: "Heavily armed variant operated by James Rhodes.",
                features: ["Heavy Artillery", "Machine Guns", "Missile Systems"],
                image: "/images/armor/war-machine.jpg"
              },
              {
                name: "Mark XLII",
                description: "Extremis-enhanced suit with remote control capabilities.",
                features: ["Extremis Integration", "Remote Control", "Modular Design"],
                image: "/images/armor/mark42.jpg"
              },
              {
                name: "Mark LXXXV",
                description: "Final suit used in the ultimate sacrifice against Thanos.",
                features: ["Infinity Stones", "Advanced Nano-tech", "Ultimate Power"],
                image: "/images/armor/mark85.jpg"
              }
            ].map((suit, index) => (
              <div key={index} className="group bg-gray-800/50 rounded-lg overflow-hidden border border-red-600/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${suit.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-500 mb-2">{suit.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{suit.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {suit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <Shield className="w-3 h-3 mr-2 text-red-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCU Timeline */}
      <section id="timeline" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            MCU Timeline
          </h2>
          
          <div className="space-y-8">
            {[
              {
                year: "2008",
                movie: "Iron Man",
                description: "Tony Stark becomes Iron Man after being captured by terrorists.",
                impact: "Birth of the MCU"
              },
              {
                year: "2010",
                movie: "Iron Man 2",
                description: "Stark faces government pressure and new enemies while dealing with palladium poisoning.",
                impact: "Introduction of War Machine"
              },
              {
                year: "2012",
                movie: "The Avengers",
                description: "Iron Man joins Earth's Mightiest Heroes to defend against the Chitauri invasion.",
                impact: "Formation of the Avengers"
              },
              {
                year: "2013",
                movie: "Iron Man 3",
                description: "Stark faces the Mandarin and overcomes PTSD from the Battle of New York.",
                impact: "Character development arc"
              },
              {
                year: "2015",
                movie: "Avengers: Age of Ultron",
                description: "Stark's creation of Ultron leads to global consequences.",
                impact: "Guilt and responsibility themes"
              },
              {
                year: "2016",
                movie: "Captain America: Civil War",
                description: "The Avengers split over the Sokovia Accords.",
                impact: "Team division and conflict"
              },
              {
                year: "2017",
                movie: "Spider-Man: Homecoming",
                description: "Stark mentors Peter Parker and provides advanced technology.",
                impact: "Mentorship role established"
              },
              {
                year: "2018",
                movie: "Avengers: Infinity War",
                description: "Iron Man faces Thanos and witnesses the devastating snap.",
                impact: "Half the universe erased"
              },
              {
                year: "2019",
                movie: "Avengers: Endgame",
                description: "Tony Stark makes the ultimate sacrifice to defeat Thanos.",
                impact: "Hero's ultimate sacrifice"
              }
            ].map((event, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  {index < 8 && <div className="w-0.5 h-16 bg-gradient-to-b from-red-500 to-transparent mt-2"></div>}
                </div>
                <div className="flex-1 bg-gray-800/50 p-6 rounded-lg border border-red-600/20 group-hover:border-red-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-red-500">{event.movie}</h3>
                    <span className="text-yellow-500 font-semibold">{event.year}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-400 italic">{event.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Achievements & Legacy
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Avengers Founder",
                description: "Co-founded the Avengers Initiative and led Earth's Mightiest Heroes."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Arc Reactor Technology",
                description: "Revolutionized clean energy with his miniaturized arc reactor design."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "World Savior",
                description: "Saved Earth multiple times from extraterrestrial and supernatural threats."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Ultimate Sacrifice",
                description: "Gave his life to defeat Thanos and save the entire universe."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Stark Industries CEO",
                description: "Transformed his company from weapons manufacturing to clean technology."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Technological Innovation",
                description: "Created dozens of Iron Man suits with cutting-edge nanotechnology."
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-red-600/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-red-500 mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-red-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                  IRON MAN
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A tribute to Tony Stark, the genius who changed the world and saved the universe.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-red-500 transition-colors">
                  About Tony Stark
                </button>
                <button onClick={() => scrollToSection('suits')} className="block text-gray-400 hover:text-red-500 transition-colors">
                  Armor Collection
                </button>
                <button onClick={() => scrollToSection('timeline')} className="block text-gray-400 hover:text-red-500 transition-colors">
                  MCU Timeline
                </button>
                <button onClick={() => scrollToSection('achievements')} className="block text-gray-400 hover:text-red-500 transition-colors">
                  Achievements
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Iron Man Fan Site. Created with ❤️ for Tony Stark fans worldwide.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              "I am Iron Man." - Tony Stark
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}

export default App;