'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  Briefcase, 
  MessageSquare, 
  User,
  Megaphone, 
  CreditCard,
  Image,
  MapPin,
  Phone,
  Mail,
  Star,
  Plus,
  Edit,
  Eye
} from 'lucide-react';

interface BusinessStats {
  totalListings: number;
  totalJobs: number;
  totalInquiries: number;
  totalPromotions: number;
  subscriptionPlan: string;
  catalogItems: number;
  maxCatalogItems: number;
}

export default function BusinessDashboard() {
  const [stats] = useState<BusinessStats>({
    totalListings: 3,
    totalJobs: 2,
    totalInquiries: 15,
    totalPromotions: 1,
    subscriptionPlan: 'Intermediate Business Plan',
    catalogItems: 6,
    maxCatalogItems: 9,
  });

  const modules = [
    {
      title: 'Business Listing',
      description: 'Manage your business information',
      icon: Building2,
      count: stats.totalListings,
      color: 'bg-blue-500',
      href: '/dashboard/business/listings'
    },
    {
      title: 'Job Posting',
      description: 'Post and manage job vacancies',
      icon: Briefcase,
      count: stats.totalJobs,
      color: 'bg-green-500',
      href: '/business/jobs'
    },
    {
      title: 'Inquiry List',
      description: 'View and respond to inquiries',
      icon: MessageSquare,
      count: stats.totalInquiries,
      color: 'bg-red-500',
      href: '/business/inquiries'
    },
    {
      title: 'Business Profile',
      description: 'Manage your business profile',
      icon: User,
      count: 0,
      color: 'bg-purple-500',
      href: '/business/profile'
    },
    {
      title: 'Promotion',
      description: 'Create and manage promotions',
      icon: Megaphone,
      count: stats.totalPromotions,
      color: 'bg-yellow-500',
      href: '/business/promotions'
    },
    {
      title: 'Subscription Plan',
      description: 'Manage your subscription',
      icon: CreditCard,
      count: 0,
      color: 'bg-indigo-500',
      href: '/business/subscription'
    }
  ];

  // Mock billing data for business dashboard
  const mockBillingData = [
    {
      id: '1',
      invoiceNumber: 'INV-2024-001',
      description: 'Premium Business Listing Subscription',
      amount: 'RM 199.00',
      status: 'Paid',
      date: '2024-11-01',
      dueDate: '2024-12-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001234',
      nextBilling: '2024-12-01'
    },
    {
      id: '2',
      invoiceNumber: 'INV-2024-002',
      description: 'Featured Business Promotion',
      amount: 'RM 89.00',
      status: 'Paid',
      date: '2024-10-15',
      dueDate: '2024-11-15',
      plan: 'Featured Plan',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001235',
      nextBilling: '2024-11-15'
    },
    {
      id: '3',
      invoiceNumber: 'INV-2024-003',
      description: 'Premium Business Listing Subscription',
      amount: 'RM 199.00',
      status: 'Pending',
      date: '2024-12-01',
      dueDate: '2024-12-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001236',
      nextBilling: '2024-12-01'
    },
    {
      id: '4',
      invoiceNumber: 'INV-2024-004',
      description: 'Job Posting Package',
      amount: 'RM 49.00',
      status: 'Paid',
      date: '2024-11-10',
      dueDate: '2024-11-10',
      plan: 'Job Posting Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001237',
      nextBilling: '2024-12-10'
    },
    {
      id: '5',
      invoiceNumber: 'INV-2024-005',
      description: 'Event Promotion Package',
      amount: 'RM 129.00',
      status: 'Paid',
      date: '2024-11-20',
      dueDate: '2024-11-20',
      plan: 'Event Plan',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-001238',
      nextBilling: '2024-12-20'
    },
    {
      id: '6',
      invoiceNumber: 'INV-2024-006',
      description: 'Basic Business Listing',
      amount: 'RM 49.00',
      status: 'Overdue',
      date: '2024-11-15',
      dueDate: '2024-11-15',
      plan: 'Basic Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001239',
      nextBilling: '2024-12-15'
    },
    {
      id: '7',
      invoiceNumber: 'INV-2024-007',
      description: 'Premium Business Listing Subscription',
      amount: 'RM 199.00',
      status: 'Paid',
      date: '2024-10-01',
      dueDate: '2024-11-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001240',
      nextBilling: '2024-11-01'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Beginner Business Plan',
      price: 'RM 99/month',
      features: ['3 catalog items', 'Basic listing', 'Email support'],
      current: false
    },
    {
      name: 'Intermediate Business Plan',
      price: 'RM 199/month',
      features: ['9 catalog items', 'Enhanced listing', 'Priority support', 'Analytics'],
      current: true
    },
    {
      name: 'Professional Business Plan',
      price: 'RM 299/month',
      features: ['15 catalog items', 'Premium listing', '24/7 support', 'Advanced analytics', 'Featured badge'],
      current: false
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your business listings and services</p>
      </div>

      {/* Compact Modules Nav removed in favor of global navbar */}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Business Listings</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalListings}</div>
            <p className="text-xs text-muted-foreground">
              Active listings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Postings</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalJobs}</div>
            <p className="text-xs text-muted-foreground">
              Active jobs
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
            <Image className="h-4 w-4 text-muted-foreground" />
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

      {/* Modules Grid */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Modules</TabsTrigger>
          <TabsTrigger value="listings">Listings</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
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
                  <a href={module.href} className="inline-flex w-full">
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="listings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(0, 2).map((module) => (
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
                  <a href={module.href} className="inline-flex w-full">
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
            {modules.slice(2, 4).map((module) => (
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
                  <a href={module.href} className="inline-flex w-full">
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
            {modules.slice(4).map((module) => (
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
                  <a href={module.href} className="inline-flex w-full">
                    <Button className="w-full" variant="outline">
                      Manage
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Invoices</CardTitle>
              <CardDescription>View your billing history and manage payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border bg-background">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left">Invoice #</th>
                      <th className="px-4 py-2 text-left">Description</th>
                      <th className="px-4 py-2 text-left">Plan</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Due Date</th>
                      <th className="px-4 py-2 text-left">Next Billing</th>
                      <th className="px-4 py-2 text-left">Payment Method</th>
                      <th className="px-4 py-2 text-left">Transaction ID</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBillingData.map((invoice) => (
                      <tr key={invoice.id} className="border-t">
                        <td className="px-4 py-3 font-medium">{invoice.invoiceNumber}</td>
                        <td className="px-4 py-3">{invoice.description}</td>
                        <td className="px-4 py-3">
                          <Badge variant="outline">{invoice.plan}</Badge>
                        </td>
                        <td className="px-4 py-3 font-semibold">{invoice.amount}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                            invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            invoice.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{invoice.date}</td>
                        <td className="px-4 py-3">{invoice.dueDate}</td>
                        <td className="px-4 py-3 text-xs">{invoice.nextBilling}</td>
                        <td className="px-4 py-3">{invoice.paymentMethod}</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">{invoice.transactionId}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Invoice
                            </Button>
                            {invoice.status === 'Pending' && (
                              <Button size="sm" variant="default">
                                Pay Now
                              </Button>
                            )}
                            {invoice.status === 'Overdue' && (
                              <Button size="sm" variant="default">
                                Renew
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
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
