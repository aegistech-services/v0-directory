'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListingCard } from '@/components/listing-card';
import MaintenanceWrapper from '@/components/maintenance-wrapper';
import { 
  Building2, 
  Briefcase, 
  Wrench, 
  Calendar, 
  MessageSquare, 
  Megaphone, 
  CreditCard, 
  BarChart3,
  Settings,
  FileText,
  Activity,
  Users,
  MapPin,
  Star
} from 'lucide-react';

interface AdminStats {
  totalBusinesses: number;
  totalJobs: number;
  totalServices: number;
  totalEvents: number;
  totalInquiries: number;
  totalPromotions: number;
  totalSubscriptions: number;
  totalAds: number;
  totalBookmarks: number;
}

export default function AdminDashboard() {
  const [stats] = useState<AdminStats>({
    totalBusinesses: 156,
    totalJobs: 89,
    totalServices: 234,
    totalEvents: 45,
    totalInquiries: 567,
    totalPromotions: 78,
    totalSubscriptions: 123,
    totalAds: 34,
    totalBookmarks: 892,
  });

  // Mock billing data for admin dashboard
  const mockBillingData = [
    {
      id: '1',
      invoiceNumber: 'INV-2024-001',
      businessName: 'Langkawi Beach Resort',
      userEmail: 'finance@lbr.com',
      description: 'Premium Business Listing',
      amount: 'RM 199.00',
      status: 'Paid',
      date: '2024-11-01',
      dueDate: '2024-12-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001234'
    },
    {
      id: '2',
      invoiceNumber: 'INV-2024-002',
      businessName: 'Island Adventure Tours',
      userEmail: 'admin@iat.com',
      description: 'Featured Promotion Package',
      amount: 'RM 89.00',
      status: 'Paid',
      date: '2024-10-15',
      dueDate: '2024-11-15',
      plan: 'Featured Plan',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001235'
    },
    {
      id: '3',
      invoiceNumber: 'INV-2024-003',
      businessName: 'Tech Solutions Co.',
      userEmail: 'billing@techsolutions.com',
      description: 'Job Posting Subscription',
      amount: 'RM 149.00',
      status: 'Pending',
      date: '2024-12-01',
      dueDate: '2024-12-01',
      plan: 'Job Posting Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001236'
    },
    {
      id: '4',
      invoiceNumber: 'INV-2024-004',
      businessName: 'Local Restaurant',
      userEmail: 'owner@localrest.com',
      description: 'Basic Business Listing',
      amount: 'RM 49.00',
      status: 'Overdue',
      date: '2024-11-15',
      dueDate: '2024-11-15',
      plan: 'Basic Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001237'
    },
    {
      id: '5',
      invoiceNumber: 'INV-2024-005',
      businessName: 'Event Management Pro',
      userEmail: 'events@emp.com',
      description: 'Event Promotion Package',
      amount: 'RM 129.00',
      status: 'Paid',
      date: '2024-10-20',
      dueDate: '2024-11-20',
      plan: 'Event Plan',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-001238'
    },
    {
      id: '6',
      invoiceNumber: 'INV-2024-006',
      businessName: 'Marine Sports Center',
      userEmail: 'booking@marinesports.com',
      description: 'Premium Business Listing',
      amount: 'RM 199.00',
      status: 'Paid',
      date: '2024-11-05',
      dueDate: '2024-12-05',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001239'
    },
    {
      id: '7',
      invoiceNumber: 'INV-2024-007',
      businessName: 'Craft Market Gallery',
      userEmail: 'sales@craftmarket.com',
      description: 'Featured Promotion Package',
      amount: 'RM 89.00',
      status: 'Pending',
      date: '2024-12-02',
      dueDate: '2024-12-02',
      plan: 'Featured Plan',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001240'
    },
    {
      id: '8',
      invoiceNumber: 'INV-2024-008',
      businessName: 'Langkawi Cable Car',
      userEmail: 'admin@cablecar.com',
      description: 'Premium Business Listing',
      amount: 'RM 199.00',
      status: 'Paid',
      date: '2024-10-25',
      dueDate: '2024-11-25',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001241'
    },
    {
      id: '9',
      invoiceNumber: 'INV-2024-009',
      businessName: 'Spa & Wellness Center',
      userEmail: 'reception@spa.com',
      description: 'Basic Business Listing',
      amount: 'RM 49.00',
      status: 'Overdue',
      date: '2024-11-10',
      dueDate: '2024-11-10',
      plan: 'Basic Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001242'
    },
    {
      id: '10',
      invoiceNumber: 'INV-2024-010',
      businessName: 'Water Sports Paradise',
      userEmail: 'info@watersports.com',
      description: 'Event Promotion Package',
      amount: 'RM 129.00',
      status: 'Paid',
      date: '2024-11-18',
      dueDate: '2024-12-18',
      plan: 'Event Plan',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-001243'
    }
  ];

  // Mock: all listings shown in Admin "All Listings" tab
  const mockListings = [
    {
      id: '1',
      title: 'Bali Adventure Tour',
      description: 'Experience the breathtaking beauty of Bali with our guided adventure tour.',
      category: 'travel',
      tags: ['adventure', 'cultural', 'nature'],
      location: 'Bali, Indonesia',
      rating: 4.8,
      price: '$299',
      image: '/bali-temple-sunset.png',
      claimed: true,
      businessName: 'Langkawi Tours',
      businessPhone: '+60 12-345 6789',
      businessEmail: 'info@lktours.com',
    },
    {
      id: '2',
      title: 'Tech Conference 2024',
      description: 'Join industry leaders and innovators at the biggest tech conference of the year.',
      category: 'events',
      tags: ['tech', 'networking', 'innovation'],
      location: 'San Francisco, CA',
      date: 'March 15-17, 2024',
      endDate: '2024-03-17',
      time: '9:00 AM - 6:00 PM',
      rating: 4.9,
      price: '$599',
      image: '/tech-conference-stage.png',
    },
    {
      id: '3',
      title: 'Senior React Developer',
      description: "We're looking for an experienced React developer to join our team.",
      category: 'jobs',
      tags: ['tech', 'remote', 'react'],
      location: 'Remote / New York, NY',
      price: '$120k - $150k',
      image: '/developer-coding-office.png',
      claimed: true,
      businessName: 'Techify Co.',
      businessPhone: '+1 (212) 555-0101',
      businessEmail: 'hr@techify.co',
    },
    {
      id: '4',
      title: 'Home Cleaning Service',
      description: 'Professional home cleaning services with eco-friendly products.',
      category: 'services',
      tags: ['home', 'cleaning', 'eco-friendly'],
      location: 'Los Angeles, CA',
      rating: 4.7,
      price: '$80/visit',
      image: '/clean-modern-interior.png',
    },
    {
      id: '5',
      title: 'Homepage Banner Promo',
      description: 'Premium banner placement on homepage for 30 days.',
      category: 'promotions',
      tags: ['ads', 'banner'],
      location: 'Site-wide',
      date: 'Runs: May 1-30, 2024',
      endDate: '2024-05-30',
      image: '/placeholder.svg',
    },
    {
      id: '6',
      title: 'Business Pro Subscription',
      description: 'Professional plan with 15 catalog items.',
      category: 'subscriptions',
      tags: ['plan', 'billing'],
      location: 'Account: John Doe',
      date: 'Ends: Dec 31, 2024',
      endDate: '2024-12-31',
      image: '/placeholder.svg',
    },
  ];

  const [allListings, setAllListings] = useState<any[]>(mockListings.map(l => ({ ...l, disabled: false })));

  const adminTableRows = allListings
    .filter(l => ['jobs', 'services', 'events', 'promotions', 'subscriptions'].includes(l.category))
    .map(l => {
      const isPastEvent = l.category === 'events' && l.endDate ? new Date(l.endDate) < new Date() : false;
      return { ...l, isPastEvent };
    });

  const modules = [
    {
      title: 'Business Listing',
      description: 'Manage all business listings',
      icon: Building2,
      count: stats.totalBusinesses,
      color: 'bg-blue-500',
      href: '/dashboard/business/listings'
    },
    {
      title: 'Job Posting',
      description: 'Manage job postings',
      icon: Briefcase,
      count: stats.totalJobs,
      color: 'bg-green-500',
      href: '/admin/jobs'
    },
    {
      title: 'Service Posting',
      description: 'Manage service listings',
      icon: Wrench,
      count: stats.totalServices,
      color: 'bg-purple-500',
      href: '/admin/services'
    },
    {
      title: 'Event Listing',
      description: 'Manage event listings',
      icon: Calendar,
      count: stats.totalEvents,
      color: 'bg-orange-500',
      href: '/admin/events'
    },
    {
      title: 'Inquiry',
      description: 'Manage user inquiries',
      icon: MessageSquare,
      count: stats.totalInquiries,
      color: 'bg-red-500',
      href: '/admin/inquiries'
    },
    {
      title: 'Promotion',
      description: 'Manage promotions',
      icon: Megaphone,
      count: stats.totalPromotions,
      color: 'bg-yellow-500',
      href: '/admin/promotions'
    },
    {
      title: 'Subscription',
      description: 'Manage subscriptions',
      icon: CreditCard,
      count: stats.totalSubscriptions,
      color: 'bg-indigo-500',
      href: '/admin/subscriptions'
    },
    {
      title: 'Ads Listing',
      description: 'Manage advertisements',
      icon: BarChart3,
      count: stats.totalAds,
      color: 'bg-pink-500',
      href: '/admin/ads'
    },
    {
      title: 'Analytics',
      description: 'View analytics and reports',
      icon: Activity,
      count: stats.totalBookmarks,
      color: 'bg-teal-500',
      href: '/admin/analytics'
    },
    {
      title: 'Website Management',
      description: 'SEO, settings, and configuration',
      icon: Settings,
      count: 0,
      color: 'bg-gray-500',
      href: '/admin/settings'
    },
    {
      title: 'Disclaimer Page',
      description: 'Manage website disclaimer',
      icon: FileText,
      count: 0,
      color: 'bg-slate-500',
      href: '/admin/disclaimer'
    },
    {
      title: 'Website Logs',
      description: 'View system logs',
      icon: Activity,
      count: 0,
      color: 'bg-cyan-500',
      href: '/admin/logs'
    }
  ];

  return (
    <MaintenanceWrapper isAdmin={true}>
      <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage all aspects of the Langkawi Directory platform</p>
      </div>

      {/* Compact Modules Nav removed in favor of global navbar */}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Businesses</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBusinesses}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalJobs}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalInquiries}</div>
            <p className="text-xs text-muted-foreground">
              +23% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSubscriptions}</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <Tabs defaultValue="all_listings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all_listings">All Listings</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Removed 'All Modules' tab for a more compact dashboard */}

        <TabsContent value="all_listings" className="space-y-6">
          {/* Search, Filters, and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <input
                type="text"
                placeholder="Search listings..."
                className="px-3 py-2 border border-gray-300 rounded-md text-sm max-w-sm"
              />
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="all">All Categories</option>
                <option value="jobs">Jobs</option>
                <option value="services">Services</option>
                <option value="events">Events</option>
                <option value="promotions">Promotions</option>
                <option value="subscriptions">Subscriptions</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Disable Selected
              </Button>
              <Button size="sm">
                Create Job
              </Button>
            </div>
          </div>

          {/* Listings Table */}
          <div className="overflow-x-auto rounded-md border">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminTableRows.map((row) => (
                  <tr key={row.id} className={`${row.isPastEvent ? 'opacity-60' : ''} border-t`}>
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{row.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{row.description}</div>
                    </td>
                    <td className="px-4 py-3 capitalize">{row.category}</td>
                    <td className="px-4 py-3">{row.date || row.endDate || '-'}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${row.disabled ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {row.disabled ? 'Disabled' : 'Active'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <a href={`/admin/listings/${row.id}`} className="text-primary hover:underline">View</a>
                        <button
                          className="text-muted-foreground hover:text-foreground"
                          onClick={() => setAllListings(prev => prev.map(l => l.id === row.id ? { ...l, disabled: !l.disabled } : l))}
                        >
                          {row.disabled ? 'Enable' : 'Disable'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Invoices</CardTitle>
              <CardDescription>Manage all billing transactions and invoices across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border bg-background">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left">Invoice #</th>
                      <th className="px-4 py-2 text-left">Business</th>
                      <th className="px-4 py-2 text-left">Description</th>
                      <th className="px-4 py-2 text-left">Plan</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Payment Method</th>
                      <th className="px-4 py-2 text-left">Transaction ID</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBillingData.map((invoice) => (
                      <tr key={invoice.id} className="border-t">
                        <td className="px-4 py-3 font-medium">{invoice.invoiceNumber}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium">{invoice.businessName}</div>
                          <div className="text-xs text-muted-foreground">{invoice.userEmail}</div>
                        </td>
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
                        <td className="px-4 py-3">{invoice.paymentMethod}</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">{invoice.transactionId}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Invoice
                            </Button>
                            {invoice.status === 'Pending' && (
                              <Button size="sm" variant="default">
                                Process Payment
                              </Button>
                            )}
                            {invoice.status === 'Overdue' && (
                              <Button size="sm" variant="destructive">
                                Send Reminder
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

        <TabsContent value="management" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.slice(4, 8).map((module) => (
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.slice(8).map((module) => (
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
      </Tabs>
      </div>
    </MaintenanceWrapper>
  );
}
