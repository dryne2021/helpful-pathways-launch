import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, FileText, GraduationCap, Search, Users, Clock, CheckCircle, Star } from 'lucide-react';

const AcademicHelp = () => {
  const services = [
    {
      icon: FileText,
      title: 'Essay Writing',
      description: 'High-quality essays across all subjects and academic levels',
      features: ['Custom written', 'Plagiarism-free', 'Proper citations', 'Multiple revisions']
    },
    {
      icon: Search,
      title: 'Research Papers',
      description: 'In-depth research papers with comprehensive analysis',
      features: ['Original research', 'Academic sources', 'Proper methodology', 'Data analysis']
    },
    {
      icon: GraduationCap,
      title: 'Dissertations & Theses',
      description: 'Complete dissertation and thesis writing support',
      features: ['Chapter-by-chapter', 'Literature review', 'Methodology design', 'Defense preparation']
    },
    {
      icon: BookOpen,
      title: 'Coursework Help',
      description: 'Assistance with assignments, homework, and projects',
      features: ['Subject expertise', 'Step-by-step solutions', 'Concept explanations', 'Practice problems']
    }
  ];

  const subjects = [
    'Business & Management', 'Psychology', 'Engineering', 'Computer Science',
    'Literature & English', 'History', 'Sociology', 'Political Science',
    'Economics', 'Marketing', 'Finance', 'Healthcare & Nursing',
    'Education', 'Law', 'Philosophy', 'Science & Technology'
  ];

  const process = [
    {
      step: '1',
      title: 'Submit Your Requirements',
      description: 'Fill out our form with your assignment details, deadline, and specific requirements.'
    },
    {
      step: '2',
      title: 'Get Matched with Expert',
      description: 'We assign a qualified writer with expertise in your subject area.'
    },
    {
      step: '3',
      title: 'Track Progress',
      description: 'Stay updated on your project progress and communicate directly with your writer.'
    },
    {
      step: '4',
      title: 'Receive & Review',
      description: 'Get your completed work on time with free revisions if needed.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Academic Writing Help
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional academic writing assistance from qualified experts across all subjects and academic levels. 
              Get high-quality, original work delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Writing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive writing support for students at all academic levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subjects We Cover</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expert writers have advanced degrees in diverse academic fields
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-smooth">
                <span className="text-foreground font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple and straightforward process to get your academic work done
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:shadow-glow transition-smooth">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from satisfied students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                program: 'MBA Student',
                rating: 5,
                testimonial: 'Excellent work on my research paper. The writer understood my requirements perfectly and delivered high-quality work on time.'
              },
              {
                name: 'John D.',
                program: 'Psychology Major',
                rating: 5,
                testimonial: 'Great support throughout my dissertation process. The guidance and expertise helped me achieve the grade I was aiming for.'
              },
              {
                name: 'Lisa K.',
                program: 'Engineering Student',
                rating: 5,
                testimonial: 'Professional service with attention to detail. The coursework help was exactly what I needed to understand complex concepts.'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academics?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get professional academic writing help today. Fill out our form for a custom quote.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
              Get Started Now
            </a>
          </Button>
          <p className="text-primary-foreground/70 mt-4">
            Free consultation • 24/7 support • Money-back guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicHelp;