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
  Trash2,
  Bookmark,
  Clock
} from 'lucide-react';

interface BookmarkedItem {
  id: number;
  type: 'Business' | 'Service' | 'Job' | 'Event' | 'Promotion';
  title: string;
  category: string;
  location: string;
  rating: number | null;
  image: string;
  bookmarkedDate: string;
  description: string;
  isActive: boolean;
}

export default function BookmarksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const [bookmarkedItems, setBookmarkedItems] = useState<BookmarkedItem[]>([
    {
      id: 1,
      type: 'Business',
      title: 'Langkawi Beach Resort',
      category: 'Accommodation',
      location: 'Pantai Cenang',
      rating: 4.5,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-15',
      description: 'Luxury beachfront resort with stunning ocean views and world-class amenities.',
      isActive: true
    },
    {
      id: 2,
      type: 'Service',
      title: 'Island Adventure Tours',
      category: 'Tourism',
      location: 'Langkawi',
      rating: 4.8,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-14',
      description: 'Professional tour guides offering exciting island exploration experiences.',
      isActive: true
    },
    {
      id: 3,
      type: 'Job',
      title: 'Hotel Manager Position',
      category: 'Hospitality',
      location: 'Kuah',
      rating: null,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-13',
      description: 'Exciting opportunity to manage a luxury hotel in Langkawi.',
      isActive: true
    },
    {
      id: 4,
      type: 'Business',
      title: 'Langkawi Wildlife Park',
      category: 'Attractions',
      location: 'Kampung Belanga Pecah',
      rating: 4.2,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-12',
      description: 'Home to various wildlife species and interactive animal shows.',
      isActive: true
    },
    {
      id: 5,
      type: 'Event',
      title: 'Langkawi Food Festival',
      category: 'Food & Culture',
      location: 'Kuah Town',
      rating: null,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-11',
      description: 'Annual celebration of local cuisine and cultural heritage.',
      isActive: false
    },
    {
      id: 6,
      type: 'Service',
      title: 'Car Rental Service',
      category: 'Transportation',
      location: 'Langkawi Airport',
      rating: 4.4,
      image: '/api/placeholder/300/200',
      bookmarkedDate: '2024-11-10',
      description: 'Reliable car rental service for exploring the island at your own pace.',
      isActive: true
    }
  ]);

  const filteredItems = bookmarkedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ['all', ...Array.from(new Set(bookmarkedItems.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(bookmarkedItems.map(item => item.type)))];

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

  const removeBookmark = (id: number) => {
    setBookmarkedItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookmarks</h1>
          <p className="text-gray-600 mt-2">Manage your saved listings and keep track of what interests you</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search bookmarks..."
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>{filteredItems.length} bookmarks found</span>
            </div>
            <div className="text-sm text-gray-600">
              Total: {bookmarkedItems.length} items
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
              <div className="relative">
                <div className="aspect-video bg-gray-200 -mt-6 -mx-6"></div>
                {!item.isActive && (
                  <Badge className="absolute top-2 left-2 bg-gray-500">Inactive</Badge>
                )}
                <div className="absolute top-2 right-2">
                  <Button
                    size="sm"
                    variant="destructive"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeBookmark(item.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getTypeIcon(item.type)}
                    {item.type}
                  </Badge>
                  {item.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">Bookmarked: {item.bookmarkedDate}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                                      <Button size="sm" variant="destructive">
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Bookmark className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarks found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
