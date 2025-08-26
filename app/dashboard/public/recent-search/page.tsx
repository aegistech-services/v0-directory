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
  Clock, 
  MapPin, 
  Building2,
  Briefcase,
  Wrench,
  Calendar,
  Megaphone,
  Trash2,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

interface RecentSearchItem {
  id: number;
  searchTerm: string;
  category: string;
  timestamp: string;
  resultCount: number;
  location?: string;
  filters?: string[];
  isSaved: boolean;
}

export default function RecentSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const [recentSearchItems, setRecentSearchItems] = useState<RecentSearchItem[]>([
    {
      id: 1,
      searchTerm: 'Hotels in Pantai Cenang',
      category: 'Accommodation',
      timestamp: '2024-11-15 14:30',
      resultCount: 12,
      location: 'Pantai Cenang',
      filters: ['Price: RM 100-300', 'Rating: 4+ stars'],
      isSaved: true
    },
    {
      id: 2,
      searchTerm: 'Island tours',
      category: 'Tourism',
      timestamp: '2024-11-14 16:45',
      resultCount: 8,
      location: 'Langkawi',
      filters: ['Duration: Half day', 'Group size: 2-6 people'],
      isSaved: false
    },
    {
      id: 3,
      searchTerm: 'Restaurants near Eagle Square',
      category: 'Food & Beverage',
      timestamp: '2024-11-13 12:20',
      resultCount: 15,
      location: 'Eagle Square',
      filters: ['Cuisine: Local', 'Price: RM 20-80'],
      isSaved: true
    },
    {
      id: 4,
      searchTerm: 'Car rental services',
      category: 'Transportation',
      timestamp: '2024-11-12 09:15',
      resultCount: 6,
      location: 'Langkawi Airport',
      filters: ['Type: Sedan', 'Duration: 3 days'],
      isSaved: false
    },
    {
      id: 5,
      searchTerm: 'Water sports activities',
      category: 'Recreation',
      timestamp: '2024-11-11 11:30',
      resultCount: 10,
      location: 'Pantai Cenang',
      filters: ['Activity: Jet skiing', 'Age: 18+'],
      isSaved: true
    },
    {
      id: 6,
      searchTerm: 'Langkawi Cable Car tickets',
      category: 'Attractions',
      timestamp: '2024-11-10 15:20',
      resultCount: 3,
      location: 'Gunung Mat Cincang',
      filters: ['Type: Adult ticket', 'Time: Morning'],
      isSaved: false
    },
    {
      id: 7,
      searchTerm: 'Spa and massage services',
      category: 'Wellness',
      timestamp: '2024-11-09 13:45',
      resultCount: 7,
      location: 'Langkawi',
      filters: ['Service: Traditional massage', 'Price: RM 80-150'],
      isSaved: true
    },
    {
      id: 8,
      searchTerm: 'Langkawi International Airport',
      category: 'Transportation',
      timestamp: '2024-11-08 08:30',
      resultCount: 1,
      location: 'Langkawi',
      filters: ['Facility: Parking', 'Service: Car rental'],
      isSaved: false
    }
  ]);

  const filteredItems = recentSearchItems.filter(item => {
    const matchesSearch = item.searchTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    let matchesTimeframe = true;
    if (selectedTimeframe !== 'all') {
      const searchDate = new Date(item.timestamp);
      const now = new Date();
      const diffInHours = (now.getTime() - searchDate.getTime()) / (1000 * 60 * 60);
      
      switch (selectedTimeframe) {
        case 'today':
          matchesTimeframe = diffInHours < 24;
          break;
        case 'week':
          matchesTimeframe = diffInHours < 168; // 7 days
          break;
        case 'month':
          matchesTimeframe = diffInHours < 720; // 30 days
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesTimeframe;
  });

  const categories = ['all', ...Array.from(new Set(recentSearchItems.map(item => item.category)))];
  const timeframes = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Accommodation': return <Building2 className="h-4 w-4" />;
      case 'Tourism': return <Wrench className="h-4 w-4" />;
      case 'Food & Beverage': return <Building2 className="h-4 w-4" />;
      case 'Transportation': return <Wrench className="h-4 w-4" />;
      case 'Recreation': return <Calendar className="h-4 w-4" />;
      case 'Attractions': return <Building2 className="h-4 w-4" />;
      case 'Wellness': return <Wrench className="h-4 w-4" />;
      default: return <Building2 className="h-4 w-4" />;
    }
  };

  const removeSearch = (id: number) => {
    setRecentSearchItems(prev => prev.filter(item => item.id !== id));
  };

  const searchAgain = (item: RecentSearchItem) => {
    // Mock search again functionality
    setSearchTerm(item.searchTerm);
    alert(`Searching for: ${item.searchTerm}`);
  };

  const clearAllSearches = () => {
    if (confirm('Are you sure you want to clear all search history?')) {
      setRecentSearchItems([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recent Searches</h1>
          <p className="text-gray-600 mt-2">Track your search history and quickly access previous searches</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search in history..."
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
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Time" />
              </SelectTrigger>
              <SelectContent>
                {timeframes.map(timeframe => (
                  <SelectItem key={timeframe.value} value={timeframe.value}>
                    {timeframe.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>{filteredItems.length} searches found</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Total: {recentSearchItems.length} searches
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllSearches}
                className="text-red-600 hover:text-red-700"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>

        {/* Search History List */}
        <div className="space-y-4">
          {filteredItems.map((search) => (
            <Card key={search.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getCategoryIcon(search.category)}
                          {search.category}
                        </Badge>
                        {search.isSaved && (
                          <Badge variant="default" className="bg-blue-500">Saved</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{search.timestamp}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{search.searchTerm}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{search.resultCount} results found</span>
                      </div>
                      {search.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{search.location}</span>
                        </div>
                      )}
                    </div>
                    
                    {search.filters && search.filters.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Applied filters:</p>
                        <div className="flex flex-wrap gap-1">
                          {search.filters.map((filter, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {filter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => searchAgain(search)}
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Search Again
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => searchAgain(search)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      variant="destructive"
                      onClick={() => removeSearch(search.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No searches found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
