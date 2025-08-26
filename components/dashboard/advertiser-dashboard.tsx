'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  MessageSquare, 
  User,
  Megaphone, 
  CreditCard,
  Eye,
  MousePointer,
  TrendingUp,
  Star,
  Plus,
  Edit,
  Calendar,
  DollarSign
} from 'lucide-react';

interface AdvertiserStats {
  totalAds: number;
  totalInquiries: number;
  totalPromotions: number;
  subscriptionPlan: string;
  adSlots: number;
  maxAdSlots: number;
  totalViews: number;
  totalClicks: number;
  ctr: number;
}

export default function AdvertiserDashboard() {
  const [stats] = useState<AdvertiserStats>({
    totalAds: 3,
    totalInquiries: 8,
    totalPromotions: 1,
    subscriptionPlan: 'Intermediate Advertiser Plan',
    adSlots: 2,
    maxAdSlots: 3,
    totalViews: 15420,
    totalClicks: 342,
    ctr: 2.22,
  });

  const modules = [
    {
      title: 'Ads Listing',
      description: 'Manage your advertisements',
      icon: BarChart3,
      count: stats.totalAds,
      color: 'bg-pink-500',
      href: '/dashboard/advertiser/ads'
    },
    {
      title: 'Inquiry List',
      description: 'View and respond to inquiries',
      icon: MessageSquare,
      count: stats.totalInquiries,
      color: 'bg-red-500',
      href: '/dashboard/advertiser/inquiries'
    },
    {
      title: 'Advertiser Profile',
      description: 'Manage your profile',
      icon: User,
      count: 0,
      color: 'bg-blue-500',
      href: '/dashboard/advertiser/profile'
    },
    {
      title: 'Promotion',
      description: 'Create and manage promotions',
      icon: Megaphone,
      count: stats.totalPromotions,
      color: 'bg-yellow-500',
      href: '/dashboard/advertiser/promotions'
    },
    {
      title: 'Subscription Plan',
      description: 'Manage your subscription',
      icon: CreditCard,
      count: 0,
      color: 'bg-indigo-500',
      href: '/dashboard/advertiser/subscription'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Beginner Advertiser Plan',
      price: 'RM 199/month',
      features: ['3 ad slots (1 month)', 'Basic targeting', 'Email support'],
      current: false
    },
    {
      name: 'Intermediate Advertiser Plan',
      price: 'RM 399/month',
      features: ['3 ad slots (3 months)', 'Enhanced targeting', 'Priority support', 'Analytics'],
      current: true
    },
    {
      name: 'Professional Advertiser Plan',
      price: 'RM 699/month',
      features: ['3 ad slots (6 months)', 'Premium targeting', '24/7 support', 'Advanced analytics', 'Featured badge'],
      current: false
    }
  ];

  const recentAds = [
    {
      id: 1,
      title: 'Langkawi Beach Resort',
      status: 'Active',
      views: 5420,
      clicks: 156,
      ctr: 2.88,
      endDate: '2024-12-15'
    },
    {
      id: 2,
      title: 'Island Adventure Tours',
      status: 'Active',
      views: 6800,
      clicks: 98,
      ctr: 1.44,
      endDate: '2024-11-30'
    },
    {
      id: 3,
      title: 'Local Restaurant Promotion',
      status: 'Paused',
      views: 3200,
      clicks: 88,
      ctr: 2.75,
      endDate: '2024-12-20'
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Advertiser Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your advertisements and track performance</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Ads</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAds}</div>
            <p className="text-xs text-muted-foreground">
              {stats.adSlots}/{stats.maxAdSlots} slots used
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClicks}</div>
            <p className="text-xs text-muted-foreground">
              CTR: {stats.ctr}%
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

      {/* Recent Ads Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Ads Performance</span>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Create Ad
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAds.map((ad) => (
              <div key={ad.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold">{ad.title}</h4>
                  <p className="text-sm text-gray-600">Ends: {ad.endDate}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-semibold">{ad.views.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{ad.clicks}</p>
                    <p className="text-xs text-gray-600">Clicks</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{ad.ctr}%</p>
                    <p className="text-xs text-gray-600">CTR</p>
                  </div>
                  <Badge variant={ad.status === 'Active' ? 'default' : 'secondary'}>
                    {ad.status}
                  </Badge>
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
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
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
                  <a href={module.href}>
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advertising" className="space-y-6">
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
                  <a href={module.href}>
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
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
                  <a href={module.href}>
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
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
                  <a href={module.href}>
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
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
