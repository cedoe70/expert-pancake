"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        investmentAmount: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.investmentAmount) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-slate-600">Ready to begin your cryptocurrency investment journey? Contact our experts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[hsl(221,83%,53%)] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-[hsl(221,83%,53%)] text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Headquarters</h4>
                  <p className="text-slate-600">123 Financial District<br />New York, NY 10004<br />United States</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[hsl(158,64%,52%)] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone text-[hsl(158,64%,52%)] text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone Support</h4>
                  <p className="text-slate-600">+1 (555) 123-4567<br />Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[hsl(253,55%,60%)] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-[hsl(253,55%,60%)] text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email Support</h4>
                  <p className="text-slate-600">support@cryptovest.com<br />Response within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-[hsl(221,83%,53%)] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-[hsl(221,83%,53%)] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-[hsl(221,83%,53%)] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-[hsl(221,83%,53%)] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Request a Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-medium text-slate-700 mb-2">Investment Amount</label>
                <Select value={formData.investmentAmount} onValueChange={(value) => handleInputChange('investmentAmount', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-25000">$5,000 - $25,000</SelectItem>
                    <SelectItem value="25000-100000">$25,000 - $100,000</SelectItem>
                    <SelectItem value="100000+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[hsl(221,83%,53%)] hover:bg-blue-700"
                disabled={submitContactForm.isPending}
              >
                {submitContactForm.isPending ? "Submitting..." : "Schedule Consultation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
