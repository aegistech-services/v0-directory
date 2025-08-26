'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bookmark, 
  MessageSquare, 
  User,
  Megaphone,
  Building2,
  Briefcase,
  Wrench,
  Calendar,
  Star,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Search
} from 'lucide-react';

interface PublicUserStats {
  totalBookmarks: number;
  totalInquiries: number;
  recentSearches: number;
  favoriteCategories: string[];
}

export default function PublicDashboard() {
  const [stats] = useState<PublicUserStats>({
    totalBookmarks: 12,
    totalInquiries: 5,
    recentSearches: 8,
    favoriteCategories: ['Restaurants', 'Hotels', 'Tourism', 'Services'],
  });

  const modules = [
    {
      title: 'Explore',
      description: 'Discover new listings',
      icon: Eye,
      count: 4,
      color: 'bg-purple-500',
      href: '/dashboard/public/explore'
    },
    {
      title: 'Favourites',
      description: 'Your favorite listings',
      icon: Heart,
      count: 4,
      color: 'bg-pink-500',
      href: '/dashboard/public/favourites'
    },
    {
      title: 'Recent Search',
      description: 'Your search history',
      icon: Building2,
      count: 5,
      color: 'bg-indigo-500',
      href: '/dashboard/public/recent-search'
    },
    {
      title: 'Bookmark Listings',
      description: 'View your saved listings',
      icon: Bookmark,
      count: stats.totalBookmarks,
      color: 'bg-red-500',
      href: '/dashboard/public/bookmarks'
    },
    {
      title: 'Inquiry List',
      description: 'View your inquiries',
      icon: MessageSquare,
      count: stats.totalInquiries,
      color: 'bg-blue-500',
      href: '/dashboard/public/inquiries'
    },
    {
      title: 'User Profile',
      description: 'Manage your profile',
      icon: User,
      count: 0,
      color: 'bg-green-500',
      href: '/dashboard/public/profile'
    },
    {
      title: 'Site Promotions',
      description: 'View current promotions',
      icon: Megaphone,
      count: 0,
      color: 'bg-yellow-500',
      href: '/dashboard/public/promotions'
    }
  ];

  const bookmarkedItems = [
    {
      id: 1,
      type: 'Business',
      title: 'Langkawi Beach Resort',
      category: 'Accommodation',
      location: 'Pantai Cenang',
      rating: 4.5,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      type: 'Service',
      title: 'Island Adventure Tours',
      category: 'Tourism',
      location: 'Langkawi',
      rating: 4.8,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      type: 'Job',
      title: 'Hotel Manager Position',
      category: 'Hospitality',
      location: 'Kuah',
      rating: null,
      image: '/api/placeholder/300/200'
    }
  ];

  const recentInquiries = [
    {
      id: 1,
      to: 'Langkawi Beach Resort',
      subject: 'Room Availability',
      status: 'Replied',
      date: '2024-11-15'
    },
    {
      id: 2,
      to: 'Island Adventure Tours',
      subject: 'Package Pricing',
      status: 'Pending',
      date: '2024-11-14'
    },
    {
      id: 3,
      to: 'Local Restaurant',
      subject: 'Reservation Request',
      status: 'Replied',
      date: '2024-11-13'
    }
  ];

  const currentPromotions = [
    {
      id: 1,
      title: 'Langkawi Beach Resort - 20% Off',
      description: 'Special discount for weekend stays',
      image: '/api/placeholder/400/200',
      validUntil: '2024-12-31'
    },
    {
      id: 2,
      title: 'Island Adventure Tours - Free Pickup',
      description: 'Complimentary hotel pickup for all tours',
      image: '/api/placeholder/400/200',
      validUntil: '2024-12-15'
    }
  ];

  const billingHistory = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      description: 'Premium Listing Subscription',
      amount: 'RM 79.00',
      status: 'Paid',
      date: '2024-11-01',
      dueDate: '2024-12-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001234',
      nextBilling: '2024-12-01'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-002',
      description: 'Featured Business Promotion',
      amount: 'RM 29.00',
      status: 'Paid',
      date: '2024-10-15',
      dueDate: '2024-11-15',
      plan: 'Basic Plan',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-001235',
      nextBilling: '2024-11-15'
    },
    {
      id: 3,
      invoiceNumber: 'INV-2024-003',
      description: 'Premium Listing Subscription',
      amount: 'RM 79.00',
      status: 'Pending',
      date: '2024-12-01',
      dueDate: '2024-12-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001236',
      nextBilling: '2024-12-01'
    },
    {
      id: 4,
      invoiceNumber: 'INV-2024-004',
      description: 'Featured Business Promotion',
      amount: 'RM 29.00',
      status: 'Overdue',
      date: '2024-11-15',
      dueDate: '2024-11-15',
      plan: 'Basic Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001237',
      nextBilling: '2024-11-15'
    },
    {
      id: 5,
      invoiceNumber: 'INV-2024-005',
      description: 'Event Promotion Package',
      amount: 'RM 49.00',
      status: 'Paid',
      date: '2024-11-20',
      dueDate: '2024-11-20',
      plan: 'Event Plan',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001238',
      nextBilling: '2024-12-20'
    },
    {
      id: 6,
      invoiceNumber: 'INV-2024-006',
      description: 'Premium Listing Subscription',
      amount: 'RM 79.00',
      status: 'Paid',
      date: '2024-10-01',
      dueDate: '2024-11-01',
      plan: 'Premium Plan',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001239',
      nextBilling: '2024-11-01'
    }
  ];

  const exploreItems = [
    {
      id: 1,
      type: 'Business',
      title: 'Langkawi Cable Car',
      category: 'Attractions',
      location: 'Gunung Mat Cincang',
      rating: 4.7,
      image: '/api/placeholder/300/200',
      isNew: true
    },
    {
      id: 2,
      type: 'Service',
      title: 'Island Hopping Tours',
      category: 'Tourism',
      location: 'Langkawi',
      rating: 4.9,
      image: '/api/placeholder/300/200',
      isNew: true
    },
    {
      id: 3,
      type: 'Event',
      title: 'Langkawi International Maritime & Aerospace Exhibition',
      category: 'Exhibition',
      location: 'Mahsuri International Exhibition Centre',
      rating: null,
      image: '/api/placeholder/300/200',
      isNew: false
    },
    {
      id: 4,
      type: 'Business',
      title: 'Eagle Square',
      category: 'Landmarks',
      location: 'Kuah',
      rating: 4.3,
      image: '/api/placeholder/300/200',
      isNew: false
    }
  ];

  const favouriteItems = [
    {
      id: 1,
      type: 'Business',
      title: 'Langkawi Beach Resort',
      category: 'Accommodation',
      location: 'Pantai Cenang',
      rating: 4.5,
      image: '/api/placeholder/300/200',
      addedDate: '2024-11-10'
    },
    {
      id: 2,
      type: 'Service',
      title: 'Island Adventure Tours',
      category: 'Tourism',
      location: 'Langkawi',
      rating: 4.8,
      image: '/api/placeholder/300/200',
      addedDate: '2024-11-08'
    },
    {
      id: 3,
      type: 'Job',
      title: 'Hotel Manager Position',
      category: 'Hospitality',
      location: 'Kuah',
      rating: null,
      image: '/api/placeholder/300/200',
      addedDate: '2024-11-05'
    },
    {
      id: 4,
      type: 'Business',
      title: 'Langkawi Wildlife Park',
      category: 'Attractions',
      location: 'Kampung Belanga Pecah',
      rating: 4.2,
      image: '/api/placeholder/300/200',
      addedDate: '2024-11-03'
    }
  ];

  const recentSearchItems = [
    {
      id: 1,
      searchTerm: 'Hotels in Pantai Cenang',
      category: 'Accommodation',
      timestamp: '2024-11-15 14:30',
      resultCount: 12
    },
    {
      id: 2,
      searchTerm: 'Island tours',
      category: 'Tourism',
      timestamp: '2024-11-14 16:45',
      resultCount: 8
    },
    {
      id: 3,
      searchTerm: 'Restaurants near Eagle Square',
      category: 'Food & Beverage',
      timestamp: '2024-11-13 12:20',
      resultCount: 15
    },
    {
      id: 4,
      searchTerm: 'Car rental services',
      category: 'Transportation',
      timestamp: '2024-11-12 09:15',
      resultCount: 6
    },
    {
      id: 5,
      searchTerm: 'Water sports activities',
      category: 'Recreation',
      timestamp: '2024-11-11 11:30',
      resultCount: 10
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Langkawi Directory</h1>
        <p className="text-gray-600 mt-2">Discover the best of Langkawi - businesses, services, and opportunities</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Explore Items</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{exploreItems.length}</div>
            <p className="text-xs text-muted-foreground">
              New listings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favourites</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{favouriteItems.length}</div>
            <p className="text-xs text-muted-foreground">
              Saved items
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Searches</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentSearches}</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookmarked Items</CardTitle>
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBookmarks}</div>
            <p className="text-xs text-muted-foreground">
              Saved listings
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Button className="h-20 flex flex-col items-center justify-center gap-2" variant="outline">
          <Building2 className="h-6 w-6" />
          <span>Find Businesses</span>
        </Button>
        <Button className="h-20 flex flex-col items-center justify-center gap-2" variant="outline">
          <Briefcase className="h-6 w-6" />
          <span>Browse Jobs</span>
        </Button>
        <Button className="h-20 flex flex-col items-center justify-center gap-2" variant="outline">
          <Wrench className="h-6 w-6" />
          <span>Find Services</span>
        </Button>
        <Button className="h-20 flex flex-col items-center justify-center gap-2" variant="outline">
          <Calendar className="h-6 w-6" />
          <span>Events</span>
        </Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="explore" className="space-y-6">
        <TabsList>
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="favourites">Favourites</TabsTrigger>
          <TabsTrigger value="recent-search">Recent Search</TabsTrigger>
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.type}</Badge>
                    <div className="flex items-center gap-2">
                      {item.isNew && (
                        <Badge variant="default" className="bg-green-500">New</Badge>
                      )}
                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Explore
                    </Button>
                    <Button size="sm" variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favourites" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favouriteItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.type}</Badge>
                    {item.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Added: {item.addedDate}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" variant="destructive">
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent-search" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Search History</CardTitle>
              <CardDescription>Your recent searches and results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSearchItems.map((search) => (
                  <div key={search.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-blue-600">{search.searchTerm}</h4>
                        <Badge variant="outline">{search.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {search.resultCount} results found • {search.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Results
                      </Button>
                      <Button size="sm" variant="outline">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookmarks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.type}</Badge>
                    {item.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inquiries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{inquiry.to}</h4>
                      <p className="text-sm text-gray-600">{inquiry.subject}</p>
                      <p className="text-xs text-gray-500">{inquiry.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={inquiry.status === 'Replied' ? 'default' : 'secondary'}>
                        {inquiry.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="promotions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPromotions.map((promotion) => (
              <Card key={promotion.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                <CardHeader>
                  <CardTitle>{promotion.title}</CardTitle>
                  <CardDescription>{promotion.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Valid until: {promotion.validUntil}</p>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your invoices and subscription details</CardDescription>
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
                    {billingHistory.map((invoice) => (
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

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-gray-600">john.doe@example.com</p>
                    <p className="text-sm text-gray-500">Member since November 2024</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <p className="text-sm text-gray-600">+60 12-345 6789</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <p className="text-sm text-gray-600">Langkawi, Malaysia</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Favorite Categories</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {stats.favoriteCategories.map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Featured Categories */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Restaurants', 'Hotels', 'Tourism', 'Services', 'Jobs', 'Events'].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">{category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
