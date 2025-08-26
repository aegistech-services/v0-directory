'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { 
  Search, 
  Filter, 
  Eye, 
  Heart, 
  Star, 
  MapPin, 
  Calendar,
  Megaphone,
  Clock,
  Tag,
  Percent,
  Users,
  TrendingUp
} from 'lucide-react';

interface PromotionItem {
  id: number;
  title: string;
  business: string;
  category: string;
  description: string;
  discount: string;
  validFrom: string;
  validUntil: string;
  image: string;
  isActive: boolean;
  isFeatured: boolean;
  terms: string[];
  location: string;
  rating?: number;
  savedCount: number;
}

export default function PromotionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [promotions, setPromotions] = useState<PromotionItem[]>([
    {
      id: 1,
      title: 'Weekend Getaway Special',
      business: 'Langkawi Beach Resort',
      category: 'Accommodation',
      description: 'Book 2 nights and get 1 night free! Perfect for weekend escapes with complimentary breakfast and airport transfer.',
      discount: '33% OFF',
      validFrom: '2024-11-01',
      validUntil: '2024-12-31',
      image: '/api/placeholder/400/250',
      isActive: true,
      isFeatured: true,
      terms: ['Valid for weekend stays only', 'Minimum 2 nights', 'Subject to availability', 'Cannot be combined with other offers'],
      location: 'Pantai Cenang',
      rating: 4.8,
      savedCount: 156
    },
    {
      id: 2,
      title: 'Island Hopping Package',
      business: 'Island Adventure Tours',
      category: 'Tourism',
      description: 'Explore 4 islands in one day with lunch included. Group discounts available for 4+ people.',
      discount: '20% OFF',
      validFrom: '2024-11-15',
      validUntil: '2024-12-15',
      image: '/api/placeholder/400/250',
      isActive: true,
      isFeatured: false,
      terms: ['Valid for bookings made in advance', 'Weather dependent', 'Group size minimum 2 people', 'Lunch included'],
      location: 'Langkawi',
      rating: 4.9,
      savedCount: 89
    },
    {
      id: 3,
      title: 'Early Bird Dining',
      business: 'Seaside Restaurant',
      category: 'Food & Beverage',
      description: 'Enjoy our signature seafood dishes at special early bird prices. Available for dinner reservations before 6 PM.',
      discount: '25% OFF',
      validFrom: '2024-11-01',
      validUntil: '2024-11-30',
      image: '/api/placeholder/400/250',
      isActive: true,
      isFeatured: false,
      terms: ['Valid for dinner only', 'Reservation required', 'Before 6 PM', 'Cannot be combined with other offers'],
      location: 'Kuah Town',
      rating: 4.5,
      savedCount: 67
    },
    {
      id: 4,
      title: 'Car Rental Weekend Special',
      business: 'Langkawi Car Rentals',
      category: 'Transportation',
      description: 'Rent any car for the weekend and get 50% off on the second day. Insurance included.',
      discount: '50% OFF Day 2',
      validFrom: '2024-11-10',
      validUntil: '2024-12-10',
      image: '/api/placeholder/400/250',
      isActive: true,
      isFeatured: false,
      terms: ['Weekend rentals only', 'Minimum 2 days', 'Insurance included', 'Valid ID required'],
      location: 'Langkawi Airport',
      rating: 4.3,
      savedCount: 45
    },
    {
      id: 5,
      title: 'Spa & Wellness Package',
      business: 'Tropical Spa Center',
      category: 'Wellness',
      description: 'Relaxing massage + facial treatment + hot stone therapy. Perfect for couples with shared session discount.',
      discount: '30% OFF',
      validFrom: '2024-11-20',
      validUntil: '2024-12-20',
      image: '/api/placeholder/400/250',
      isActive: true,
      isFeatured: true,
      terms: ['Advance booking required', 'Couples discount available', 'Duration: 2 hours', 'Includes refreshments'],
      location: 'Pantai Cenang',
      rating: 4.7,
      savedCount: 78
    },
    {
      id: 6,
      title: 'Water Sports Combo',
      business: 'Aqua Sports Center',
      category: 'Recreation',
      description: 'Try 3 water activities in one day: Jet skiing, parasailing, and banana boat ride.',
      discount: '40% OFF',
      validFrom: '2024-11-05',
      validUntil: '2024-12-05',
      image: '/api/placeholder/400/250',
      isActive: false,
      isFeatured: false,
      terms: ['Weather dependent', 'Age 18+ for jet skiing', 'Safety equipment provided', 'Professional guides'],
      location: 'Pantai Cenang',
      rating: 4.6,
      savedCount: 34
    }
  ]);

  const filteredPromotions = promotions.filter(promotion => {
    const matchesSearch = promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promotion.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promotion.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || promotion.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || 
                         (selectedStatus === 'active' && promotion.isActive) ||
                         (selectedStatus === 'expired' && !promotion.isActive);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['all', ...Array.from(new Set(promotions.map(promotion => promotion.category)))];
  const statuses = ['all', 'active', 'expired'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Accommodation': return 'bg-blue-100 text-blue-800';
      case 'Tourism': return 'bg-green-100 text-green-800';
      case 'Food & Beverage': return 'bg-orange-100 text-orange-800';
      case 'Transportation': return 'bg-purple-100 text-purple-800';
      case 'Wellness': return 'bg-pink-100 text-pink-800';
      case 'Recreation': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isExpired = (validUntil: string) => {
    return new Date(validUntil) < new Date();
  };

  const getDaysLeft = (validUntil: string) => {
    const today = new Date();
    const endDate = new Date(validUntil);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Current Promotions</h1>
          <p className="text-gray-600 mt-2">Discover amazing deals and special offers from Langkawi businesses</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search promotions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status === 'active' ? 'Active' : 'Expired'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>{filteredPromotions.length} promotions found</span>
            </div>
            <div className="text-sm text-gray-600">
              Total: {promotions.length} promotions
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromotions.map((promotion) => (
            <Card key={promotion.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
              <div className="relative">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                {promotion.isFeatured && (
                  <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>
                )}
                {!promotion.isActive && (
                  <Badge className="absolute top-2 right-2 bg-gray-500">Expired</Badge>
                )}
                <div className="absolute top-2 right-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`px-2 py-1 ${getCategoryColor(promotion.category)}`}>
                    {promotion.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{promotion.savedCount}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                  {promotion.title}
                </CardTitle>
                <CardDescription className="font-medium">{promotion.business}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{promotion.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{promotion.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 font-bold">
                      <Percent className="h-3 w-3 mr-1" />
                      {promotion.discount}
                    </Badge>
                    {promotion.rating && (
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{promotion.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Valid until</div>
                    <div className="text-sm font-medium">{promotion.validUntil}</div>
                  </div>
                </div>
                
                {promotion.isActive && (
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <Clock className="h-3 w-3" />
                      <span>{getDaysLeft(promotion.validUntil)} days left</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${Math.max(0, Math.min(100, (getDaysLeft(promotion.validUntil) / 30) * 100))}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPromotions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Megaphone className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No promotions found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
