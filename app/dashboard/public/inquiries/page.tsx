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
  MessageSquare, 
  Clock, 
  MapPin, 
  Building2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Reply
} from 'lucide-react';

interface InquiryItem {
  id: number;
  to: string;
  subject: string;
  status: 'Pending' | 'Replied' | 'Closed' | 'Cancelled';
  date: string;
  category: string;
  message: string;
  response?: string;
  responseDate?: string;
  priority: 'low' | 'medium' | 'high';
}

export default function InquiriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [inquiries, setInquiries] = useState<InquiryItem[]>([
    {
      id: 1,
      to: 'Langkawi Beach Resort',
      subject: 'Room Availability',
      status: 'Replied',
      date: '2024-11-15',
      category: 'Accommodation',
      message: 'Hi, I would like to inquire about room availability for December 20-25, 2024. Do you have any rooms available?',
      response: 'Thank you for your inquiry. We have several room types available for your dates. Please check our website for current rates.',
      responseDate: '2024-11-16',
      priority: 'medium'
    },
    {
      id: 2,
      to: 'Island Adventure Tours',
      subject: 'Package Pricing',
      status: 'Pending',
      date: '2024-11-14',
      category: 'Tourism',
      message: 'I am interested in your island hopping tour. Could you please provide pricing for a group of 4 people?',
      priority: 'high'
    },
    {
      id: 3,
      to: 'Local Restaurant',
      subject: 'Reservation Request',
      status: 'Replied',
      date: '2024-11-13',
      category: 'Food & Beverage',
      message: 'I would like to make a reservation for 6 people on November 20th at 7 PM. Is this possible?',
      response: 'Yes, we can accommodate your group. Your reservation is confirmed for 6 people on November 20th at 7 PM.',
      responseDate: '2024-11-14',
      priority: 'medium'
    },
    {
      id: 4,
      to: 'Car Rental Service',
      subject: 'Vehicle Availability',
      status: 'Closed',
      date: '2024-11-12',
      category: 'Transportation',
      message: 'Do you have any 4WD vehicles available for rent this weekend?',
      response: 'Unfortunately, all 4WD vehicles are booked for this weekend. We recommend booking in advance.',
      responseDate: '2024-11-13',
      priority: 'low'
    },
    {
      id: 5,
      to: 'Langkawi Wildlife Park',
      subject: 'Group Booking',
      status: 'Pending',
      date: '2024-11-11',
      category: 'Attractions',
      message: 'We are a school group of 25 students visiting next week. Do you offer group discounts?',
      priority: 'high'
    },
    {
      id: 6,
      to: 'Spa & Wellness Center',
      subject: 'Service Inquiry',
      status: 'Cancelled',
      date: '2024-11-10',
      category: 'Wellness',
      message: 'I am interested in your massage services. What types of massages do you offer?',
      priority: 'low'
    }
  ]);

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || inquiry.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || inquiry.category === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const statuses = ['all', 'Pending', 'Replied', 'Closed', 'Cancelled'];
  const categories = ['all', ...Array.from(new Set(inquiries.map(inquiry => inquiry.category)))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Replied': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <Clock className="h-4 w-4" />;
      case 'Replied': return <CheckCircle className="h-4 w-4" />;
      case 'Closed': return <CheckCircle className="h-4 w-4" />;
      case 'Cancelled': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Inquiries</h1>
          <p className="text-gray-600 mt-2">Track your inquiries and responses from businesses</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Inquiry
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>{filteredInquiries.length} inquiries found</span>
            </div>
            <div className="text-sm text-gray-600">
              Total: {inquiries.length} inquiries
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {filteredInquiries.map((inquiry) => (
            <Card key={inquiry.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{inquiry.category}</Badge>
                        <Badge className={`px-2 py-1 ${getPriorityColor(inquiry.priority)}`}>
                          {inquiry.priority} Priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{inquiry.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{inquiry.subject}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>To:</strong> {inquiry.to}
                    </p>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{inquiry.message}</p>
                    
                    {inquiry.response && (
                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Reply className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Response</span>
                          <span className="text-xs text-blue-600">({inquiry.responseDate})</span>
                        </div>
                        <p className="text-sm text-blue-700">{inquiry.response}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end gap-3 ml-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(inquiry.status)}
                      <Badge className={`px-2 py-1 ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      {inquiry.status === 'Pending' && (
                        <Button size="sm" variant="destructive">
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInquiries.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MessageSquare className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No inquiries found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
