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
  Building2,
  Briefcase,
  Wrench,
  Calendar,
  Megaphone,
  Plus,
  Bookmark,
  Clock,
  Users
} from 'lucide-react';

interface ExploreItem {
  id: number;
  type: 'Business' | 'Service' | 'Job' | 'Event' | 'Promotion';
  title: string;
  category: string;
  location: string;
  rating: number | null;
  image: string;
  isNew: boolean;
  isFeatured: boolean;
  description: string;
  size?: 'small' | 'medium' | 'large';
}

interface WishlistItem {
  id: number;
  title: string;
  category: string;
  location: string;
  priority: 'high' | 'medium' | 'low';
  addedDate: string;
  notes?: string;
}

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const exploreItems: ExploreItem[] = [
    {
      id: 1,
      type: 'Business',
      title: 'Langkawi Cable Car',
      category: 'Attractions',
      location: 'Gunung Mat Cincang',
      rating: 4.7,
      image: '/api/placeholder/300/200',
      isNew: true,
      isFeatured: true,
      description: 'Experience breathtaking views of Langkawi from the highest point on the island.',
      size: 'large'
    },
    {
      id: 2,
      type: 'Service',
      title: 'Island Hopping Tours',
      category: 'Tourism',
      location: 'Langkawi',
      rating: 4.9,
      image: '/api/placeholder/300/200',
      isNew: true,
      isFeatured: false,
      description: 'Explore the beautiful islands around Langkawi with our guided tours.',
      size: 'medium'
    },
    {
      id: 3,
      type: 'Event',
      title: 'Langkawi International Maritime & Aerospace Exhibition',
      category: 'Exhibition',
      location: 'Mahsuri International Exhibition Centre',
      rating: null,
      image: '/api/placeholder/300/200',
      isNew: false,
      isFeatured: true,
      description: 'Annual exhibition showcasing maritime and aerospace innovations.',
      size: 'large'
    },
    {
      id: 4,
      type: 'Business',
      title: 'Eagle Square',
      category: 'Landmarks',
      location: 'Kuah',
      rating: 4.3,
      image: '/api/placeholder/300/200',
      isNew: false,
      isFeatured: false,
      description: 'Iconic landmark featuring a giant eagle statue overlooking the sea.',
      size: 'small'
    },
    {
      id: 5,
      type: 'Service',
      title: 'Water Sports Center',
      category: 'Recreation',
      location: 'Pantai Cenang',
      rating: 4.6,
      image: '/api/placeholder/300/200',
      isNew: true,
      isFeatured: false,
      description: 'Jet skiing, parasailing, and other exciting water activities.',
      size: 'medium'
    },
    {
      id: 6,
      type: 'Business',
      title: 'Langkawi Wildlife Park',
      category: 'Attractions',
      location: 'Kampung Belanga Pecah',
      rating: 4.2,
      image: '/api/placeholder/300/200',
      isNew: false,
      isFeatured: false,
      description: 'Home to various wildlife species and interactive animal shows.',
      size: 'small'
    },
    {
      id: 7,
      type: 'Job',
      title: 'Hotel Manager Position',
      category: 'Hospitality',
      location: 'Kuah',
      rating: null,
      image: '/api/placeholder/300/200',
      isNew: false,
      isFeatured: true,
      description: 'Exciting opportunity to manage a luxury hotel in Langkawi.',
      size: 'medium'
    },
    {
      id: 8,
      type: 'Promotion',
      title: 'Weekend Getaway Special',
      category: 'Travel',
      location: 'Langkawi',
      rating: null,
      image: '/api/placeholder/300/200',
      isNew: true,
      isFeatured: true,
      description: 'Special rates for weekend stays at selected hotels.',
      size: 'small'
    }
  ];

  const wishlistItems: WishlistItem[] = [
    {
      id: 1,
      title: 'Langkawi Cable Car',
      category: 'Attractions',
      location: 'Gunung Mat Cincang',
      priority: 'high',
      addedDate: '2024-11-15',
      notes: 'Must visit for sunset views'
    },
    {
      id: 2,
      title: 'Island Hopping Tour',
      category: 'Tourism',
      location: 'Langkawi',
      priority: 'high',
      addedDate: '2024-11-14',
      notes: 'Book in advance during peak season'
    },
    {
      id: 3,
      title: 'Eagle Square',
      category: 'Landmarks',
      location: 'Kuah',
      priority: 'medium',
      addedDate: '2024-11-13'
    },
    {
      id: 4,
      title: 'Langkawi Wildlife Park',
      category: 'Attractions',
      location: 'Kampung Belanga Pecah',
      priority: 'medium',
      addedDate: '2024-11-12'
    },
    {
      id: 5,
      title: 'Water Sports at Pantai Cenang',
      category: 'Recreation',
      location: 'Pantai Cenang',
      priority: 'low',
      addedDate: '2024-11-11',
      notes: 'Check weather conditions first'
    }
  ];

  const filteredItems = exploreItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ['all', ...Array.from(new Set(exploreItems.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(exploreItems.map(item => item.type)))];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Business': return <Building2 className="h-4 w-4" />;
      case 'Service': return <Wrench className="h-4 w-4" />;
      case 'Job': return <Briefcase className="h-4 w-4" />;
      case 'Event': return <Calendar className="h-4 w-4" />;
      case 'Promotion': return <Megaphone className="h-4 w-4" />;
      default: return <Building2 className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'medium': return 'col-span-1 row-span-2';
      case 'small': return 'col-span-1 row-span-1';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Langkawi</h1>
          <p className="text-gray-600 mt-2">Discover amazing businesses, services, events, and opportunities</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search listings..."
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
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>{filteredItems.length} results found</span>
          </div>
        </div>

        {/* Promotion/Ads Banner */}
        <div className="mb-6">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Megaphone className="h-5 w-5" />
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                      Special Offer
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Langkawi Adventure Package</h3>
                  <p className="text-blue-100 mb-3">
                    Get 20% off on island hopping tours + free hotel pickup. Limited time offer!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <span>Valid until: Dec 31, 2024</span>
                    <span>•</span>
                    <span>Save up to RM 150</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-blue-600">
                    Learn More
                  </Button>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    Book Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="flex gap-6">
          {/* Large Column - Bento Grid (60%) */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
              {/* Promotional Ad Slot - Spans full width */}
              <Card className="col-span-3 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center justify-between h-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Megaphone className="h-6 w-6" />
                        <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                          Featured Promotion
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Langkawi Beach Resort Special</h3>
                      <p className="text-orange-100 mb-4 text-lg">
                        🌴 Weekend Getaway Package: 2 Nights + Breakfast + Free Airport Transfer
                      </p>
                      <div className="flex items-center gap-6 text-sm text-orange-100">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current" />
                          <span>4.8/5 Rating</span>
                        </span>
                        <span>•</span>
                        <span>📍 Pantai Cenang</span>
                        <span>•</span>
                        <span>💰 From RM 299/night</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">20% OFF</div>
                        <div className="text-orange-100">Limited Time</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-orange-600">
                          View Details
                        </Button>
                        <Button className="bg-white text-orange-600 hover:bg-blue-50 font-semibold">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {(() => {
                // Create a random position for the inline ad
                const randomIndex = Math.floor(Math.random() * (filteredItems.length + 1));
                const items = [...filteredItems];
                
                // Insert the inline ad at random position
                const inlineAd = (
                  <Card key="inline-ad" className="col-span-1 row-span-1 bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Megaphone className="h-4 w-4" />
                          <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs">
                            Ad
                          </Badge>
                        </div>
                        <h3 className="font-bold mb-2">Local Food Tour</h3>
                        <p className="text-green-100 text-sm mb-3">
                          🍜 Taste authentic Langkawi cuisine with local guides
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-green-100">
                          <span>📍 Kuah Town</span>
                          <span>•</span>
                          <span>⏰ 3 hours</span>
                        </div>
                        <Button size="sm" className="bg-white text-green-600 hover:bg-green-50 w-full">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
                
                items.splice(randomIndex, 0, inlineAd);
                
                return items.map((item, index) => {
                  if (item.key === 'inline-ad') {
                    return item;
                  }
                  
                  return (
                    <Card 
                      key={item.id} 
                      className={`hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group ${getCardSize(item.size || 'small')}`}
                    >
                      <div className="relative h-full">
                        <div className="bg-gray-200 -mt-6 -mx-6 h-full w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/api/placeholder/300/200)' }}></div>
                        {item.isNew && (
                          <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
                        )}
                        {item.isFeatured && (
                          <Badge className="absolute top-2 right-2 bg-yellow-500">Featured</Badge>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="flex items-center gap-1 bg-white/90">
                              {getTypeIcon(item.type)}
                              {item.type}
                            </Badge>
                            {item.rating && (
                              <div className="flex items-center gap-1 text-white">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium">{item.rating}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-2 line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                                                     <div className="flex gap-2">
                             <Button size="sm" variant="outline" className="flex-1 bg-white/90 hover:bg-white">
                               <Eye className="h-4 w-4 mr-2" />
                               Explore
                             </Button>
                             <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                               <Heart className="h-4 w-4" />
                             </Button>
                           </div>
                        </div>
                      </div>
                    </Card>
                  );
                });
              })()}
            </div>
          </div>

          {/* Small Column - Wishlist/Attractions (40%) */}
          <div className="w-80 space-y-6">
            {/* Wishlist Section */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">My Wishlist</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Places you want to visit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <Badge className={`text-xs px-2 py-1 ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{item.category}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      {item.notes && (
                        <p className="text-xs text-gray-600 mt-1 italic">"{item.notes}"</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">Added: {item.addedDate}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                        <Bookmark className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Wishlist Items</span>
                  <Badge variant="outline">{wishlistItems.length}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">High Priority</span>
                  <Badge variant="outline" className="bg-red-100 text-red-800">
                    {wishlistItems.filter(item => item.priority === 'high').length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Month</span>
                  <Badge variant="outline">
                    {wishlistItems.filter(item => {
                      const addedDate = new Date(item.addedDate);
                      const now = new Date();
                      return addedDate.getMonth() === now.getMonth() && addedDate.getFullYear() === now.getFullYear();
                    }).length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
