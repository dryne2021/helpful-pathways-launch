import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Search, Edit, Send, BookOpen, Award, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';

const PublishJournal = () => {
  const services = [
    {
      icon: FileText,
      title: 'Manuscript Preparation',
      description: 'Professional manuscript writing and formatting for journal submission',
      features: ['Academic writing standards', 'Proper formatting', 'Citation management', 'Quality assurance']
    },
    {
      icon: Search,
      title: 'Journal Selection',
      description: 'Help identify the best journals for your research topic',
      features: ['Impact factor analysis', 'Scope matching', 'Peer review process', 'Publication timeline']
    },
    {
      icon: Edit,
      title: 'Peer Review Support',
      description: 'Assistance with addressing reviewer comments and revisions',
      features: ['Response letters', 'Manuscript revisions', 'Statistical analysis', 'Data interpretation']
    },
    {
      icon: Send,
      title: 'Submission Management',
      description: 'Complete submission process management from start to finish',
      features: ['Submission tracking', 'Communication with editors', 'Revision management', 'Publication follow-up']
    }
  ];

  const research_areas = [
    'Medicine & Healthcare', 'Engineering & Technology', 'Natural Sciences', 'Social Sciences',
    'Business & Economics', 'Computer Science', 'Environmental Science', 'Psychology',
    'Education', 'Mathematics', 'Physics & Chemistry', 'Biology & Life Sciences',
    'Agricultural Sciences', 'Materials Science', 'Energy & Sustainability', 'Public Health'
  ];

  const process = [
    {
      step: '1',
      title: 'Research Assessment',
      description: 'We evaluate your research and determine the best publication strategy for maximum impact.'
    },
    {
      step: '2',
      title: 'Manuscript Development',
      description: 'Our experts help structure and write your manuscript according to journal standards.'
    },
    {
      step: '3',
      title: 'Journal Matching',
      description: 'We identify the most suitable journals based on your research scope and impact goals.'
    },
    {
      step: '4',
      title: 'Submission & Support',
      description: 'Complete submission management with ongoing support through the review process.'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Higher Acceptance Rates',
      description: 'Our professionally prepared manuscripts have 70% higher acceptance rates than average.'
    },
    {
      icon: TrendingUp,
      title: 'Impact Factor Guidance',
      description: 'Strategic advice on targeting high-impact journals in your field for maximum visibility.'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to our network of academic editors and reviewers across various disciplines.'
    },
    {
      icon: BookOpen,
      title: 'Publication Strategy',
      description: 'Comprehensive publication planning to build your academic profile and career.'
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
              Journal Publishing Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert guidance and support for publishing your research in peer-reviewed academic journals. 
              From manuscript preparation to publication success, we help you navigate the academic publishing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                  Start Publishing
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Publishing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for every stage of the academic publishing process
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Publishing Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven expertise and results in academic publishing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Areas We Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert publishing support across diverse academic and research disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {research_areas.map((area, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-smooth">
                <span className="text-foreground font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Publishing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to successful academic publication
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

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publication Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real researchers who achieved their publication goals with our support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Emily Chen',
                field: 'Biomedical Engineering',
                achievement: 'Published in Nature Communications (Impact Factor: 17.69)',
                testimonial: 'The manuscript preparation service was exceptional. Got accepted on first submission to a top-tier journal!'
              },
              {
                name: 'Prof. James Wilson',
                field: 'Computer Science',
                achievement: 'Published 3 papers in IEEE journals within 6 months',
                testimonial: 'Strategic journal selection advice helped me publish in the most relevant venues for my research.'
              },
              {
                name: 'Dr. Maria Rodriguez',
                field: 'Environmental Science',
                achievement: 'Published review article in Science of the Total Environment',
                testimonial: 'Excellent support through the peer review process. The revision assistance was particularly valuable.'
              }
            ].map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{story.testimonial}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.field}</p>
                    <p className="text-sm text-accent font-medium">{story.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publication Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our track record of helping researchers publish in high-impact venues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Papers Published', description: 'Successfully published manuscripts' },
              { number: '85%', label: 'Acceptance Rate', description: 'First-round acceptance rate' },
              { number: '50+', label: 'Journal Partners', description: 'Established journal relationships' },
              { number: '12.5', label: 'Average Impact Factor', description: 'Of journals we help clients publish in' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Publish Your Research?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform your research into published papers with our expert guidance and support.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
              Begin Your Publication Journey
            </a>
          </Button>
          <p className="text-primary-foreground/70 mt-4">
            Free consultation • Success guarantee • Expert guidance throughout
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublishJournal;