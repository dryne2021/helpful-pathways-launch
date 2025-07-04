import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Briefcase, FileText, CheckCircle, Users, Clock, Trophy } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Academic Writing Help',
      description: 'Professional assistance with essays, research papers, dissertations, and all academic writing needs.',
      link: '/academic-help'
    },
    {
      icon: Briefcase,
      title: 'Job Application Support',
      description: 'Expert help with resumes, cover letters, and job application materials to land your dream job.',
      link: '/job-support'
    },
    {
      icon: FileText,
      title: 'Journal Publishing',
      description: 'Guidance and support for publishing your research in peer-reviewed academic journals.',
      link: '/publish-journal'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Professional writers with advanced degrees ensure top-quality work.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We meet deadlines without compromising on quality or attention to detail.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support and direct communication with your assigned writer.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Thousands of satisfied clients with successful academic and career outcomes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Academic Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert writing assistance, career support, and publishing guidance to help you succeed in your academic and professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="#contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/academic-help">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic and career support tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to your success with professional, reliable, and results-driven services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fill out our quick form and get a personalized quote for your project within 24 hours.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
              Get Your Free Quote
            </a>
          </Button>
          <p className="text-primary-foreground/70 mt-4">
            No commitment required • Free consultation • Quick response time
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;