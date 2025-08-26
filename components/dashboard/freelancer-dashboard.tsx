'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wrench, 
  MessageSquare, 
  User,
  Megaphone, 
  CreditCard,
  Calendar,
  DollarSign,
  Star,
  Plus,
  Edit,
  Eye,
  Clock,
  MapPin
} from 'lucide-react';

interface FreelancerStats {
  totalServices: number;
  totalInquiries: number;
  totalPromotions: number;
  subscriptionPlan: string;
  catalogItems: number;
  maxCatalogItems: number;
  totalEarnings: number;
  appointments: number;
}

export default function FreelancerDashboard() {
  const [stats] = useState<FreelancerStats>({
    totalServices: 5,
    totalInquiries: 23,
    totalPromotions: 2,
    subscriptionPlan: 'Professional Freelancer Plan',
    catalogItems: 12,
    maxCatalogItems: 15,
    totalEarnings: 2500,
    appointments: 8,
  });

  const modules = [
    {
      title: 'Service Listing',
      description: 'Manage your service offerings',
      icon: Wrench,
      count: stats.totalServices,
      color: 'bg-purple-500',
      href: '/freelancer/services'
    },
    {
      title: 'Inquiry List',
      description: 'View and respond to inquiries',
      icon: MessageSquare,
      count: stats.totalInquiries,
      color: 'bg-red-500',
      href: '/freelancer/inquiries'
    },
    {
      title: 'Freelancer Profile',
      description: 'Manage your profile',
      icon: User,
      count: 0,
      color: 'bg-blue-500',
      href: '/freelancer/profile'
    },
    {
      title: 'Promotion',
      description: 'Create and manage promotions',
      icon: Megaphone,
      count: stats.totalPromotions,
      color: 'bg-yellow-500',
      href: '/freelancer/promotions'
    },
    {
      title: 'Subscription Plan',
      description: 'Manage your subscription',
      icon: CreditCard,
      count: 0,
      color: 'bg-indigo-500',
      href: '/freelancer/subscription'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Beginner Freelancer Plan',
      price: 'RM 79/month',
      features: ['3 catalog items', 'Basic service listing', 'Email support'],
      current: false
    },
    {
      name: 'Intermediate Freelancer Plan',
      price: 'RM 149/month',
      features: ['9 catalog items', 'Enhanced listing', 'Priority support', 'Analytics'],
      current: false
    },
    {
      name: 'Professional Freelancer Plan',
      price: 'RM 249/month',
      features: ['15 catalog items', 'Premium listing', '24/7 support', 'Advanced analytics', 'Featured badge'],
      current: true
    }
  ];

  const recentServices = [
    {
      id: 1,
      title: 'Web Development',
      rate: 150,
      category: 'Technology',
      status: 'Active',
      inquiries: 5
    },
    {
      id: 2,
      title: 'Graphic Design',
      rate: 80,
      category: 'Creative',
      status: 'Active',
      inquiries: 3
    },
    {
      id: 3,
      title: 'Content Writing',
      rate: 50,
      category: 'Writing',
      status: 'Active',
      inquiries: 7
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Freelancer Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your services and grow your business</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalServices}</div>
            <p className="text-xs text-muted-foreground">
              Services listed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RM {stats.totalEarnings}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalInquiries}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Catalog Usage</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.catalogItems}/{stats.maxCatalogItems}</div>
            <p className="text-xs text-muted-foreground">
              Items used
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Subscription */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{stats.subscriptionPlan}</h3>
              <p className="text-sm text-gray-600">Active until December 31, 2024</p>
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Recent Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Services</span>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">RM {service.rate}/hr</p>
                    <p className="text-sm text-gray-600">{service.inquiries} inquiries</p>
                  </div>
                  <Badge variant="outline">{service.status}</Badge>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modules Grid */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Modules</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <module.icon className="h-5 w-5 text-white" />
                    </div>
                    {module.count > 0 && (
                      <Badge variant="secondary">{module.count}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(0, 1).map((module) => (
              <Card key={module.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <module.icon className="h-5 w-5 text-white" />
                    </div>
                    {module.count > 0 && (
                      <Badge variant="secondary">{module.count}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(1, 3).map((module) => (
              <Card key={module.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <module.icon className="h-5 w-5 text-white" />
                    </div>
                    {module.count > 0 && (
                      <Badge variant="secondary">{module.count}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(3).map((module) => (
              <Card key={module.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <module.icon className="h-5 w-5 text-white" />
                    </div>
                    {module.count > 0 && (
                      <Badge variant="secondary">{module.count}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Subscription Plans */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Available Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.current ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.current && (
                <Badge className="absolute -top-2 -right-2" variant="default">
                  Current Plan
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-900">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "outline" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
