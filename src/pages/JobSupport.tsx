import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, FileText, User, Search, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';

const JobSupport = () => {
  const services = [
    {
      icon: FileText,
      title: 'Resume Writing',
      description: 'Professional resumes that get you noticed by employers',
      features: ['ATS-optimized format', 'Industry-specific keywords', 'Achievement-focused content', 'Multiple revisions']
    },
    {
      icon: User,
      title: 'Cover Letter Writing',
      description: 'Compelling cover letters tailored to specific job applications',
      features: ['Personalized content', 'Company research included', 'Professional tone', 'Targeted messaging']
    },
    {
      icon: Search,
      title: 'LinkedIn Profile Optimization',
      description: 'Professional LinkedIn profiles that attract recruiters',
      features: ['Keyword optimization', 'Professional summary', 'Skills highlighting', 'Network building tips']
    },
    {
      icon: Target,
      title: 'Job Application Strategy',
      description: 'Complete job search strategy and application assistance',
      features: ['Job search planning', 'Application tracking', 'Interview preparation', 'Salary negotiation tips']
    }
  ];

  const industries = [
    'Technology & IT', 'Healthcare & Medical', 'Finance & Banking', 'Marketing & Sales',
    'Engineering', 'Education', 'Legal', 'Consulting',
    'Human Resources', 'Project Management', 'Operations', 'Creative & Design',
    'Customer Service', 'Manufacturing', 'Retail', 'Non-Profit'
  ];

  const process = [
    {
      step: '1',
      title: 'Career Consultation',
      description: 'We discuss your career goals, experience, and target positions to understand your needs.'
    },
    {
      step: '2',
      title: 'Professional Writing',
      description: 'Our career experts craft your resume, cover letter, and other materials.'
    },
    {
      step: '3',
      title: 'Review & Refine',
      description: 'You review the draft and we make revisions to ensure perfect alignment with your goals.'
    },
    {
      step: '4',
      title: 'Job Search Support',
      description: 'Receive ongoing support and guidance throughout your job search process.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Response Rates',
      description: 'Our professionally written resumes get 3x more interview callbacks than standard resumes.'
    },
    {
      icon: Target,
      title: 'Industry Expertise',
      description: 'Writers with experience in your specific industry understand what employers want to see.'
    },
    {
      icon: CheckCircle,
      title: 'ATS Optimization',
      description: 'All documents are optimized to pass Applicant Tracking Systems used by most companies.'
    },
    {
      icon: User,
      title: 'Personal Branding',
      description: 'We help you develop a consistent professional brand across all job search materials.'
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
              Job Application Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional career services to help you land your dream job. From resume writing to interview preparation, 
              we provide comprehensive support for your job search success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Career Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive job search support to help you stand out from the competition
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Service Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven strategies and expertise that deliver real results
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

      {/* Industries Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional career services across all major industries and career levels
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-smooth">
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating compelling job application materials
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from clients who achieved their career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael R.',
                position: 'Software Engineer',
                company: 'Tech Startup',
                result: 'Landed dream job at startup with 40% salary increase',
                testimonial: 'The resume completely transformed how I presented my experience. Got multiple interviews within weeks!'
              },
              {
                name: 'Jennifer S.',
                position: 'Marketing Manager',
                company: 'Fortune 500',
                result: 'Promoted to senior role at Fortune 500 company',
                testimonial: 'Professional LinkedIn profile helped me get noticed by recruiters. Excellent service and results!'
              },
              {
                name: 'David L.',
                position: 'Project Manager',
                company: 'Consulting Firm',
                result: 'Career transition into management consulting',
                testimonial: 'The career consultation helped me pivot industries successfully. Highly recommend their expertise!'
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
                    <p className="text-sm text-muted-foreground">{story.position} at {story.company}</p>
                    <p className="text-sm text-accent font-medium">{story.result}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream job. Get professional career support that delivers results.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
              Start Your Success Story
            </a>
          </Button>
          <p className="text-primary-foreground/70 mt-4">
            Free career consultation • 100% satisfaction guarantee • Fast turnaround
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSupport;