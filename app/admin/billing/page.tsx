'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DashboardSidebar } from '@/components/dashboard/sidebar';

// Mock billing data for admin
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

export default function AdminBillingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const filteredInvoices = mockBillingData.filter(invoice => {
    const matchesSearch = 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleSelectAll = () => {
    if (selectedInvoices.length === filteredInvoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(filteredInvoices.map(invoice => invoice.id));
    }
  };

  const handleSelectInvoice = (invoiceId: string) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId) 
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  const handleBulkAction = (action: string) => {
    console.log(`${action} selected invoices:`, selectedInvoices);
    setSelectedInvoices([]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userRole="ADMIN" />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Billing Management</h1>
          <p className="text-gray-600 mt-2">Manage all billing and payment records</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">RM 1,247.00</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paid Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                RM 238.00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2</div>
              <p className="text-xs text-muted-foreground">
                RM 98.00
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <Input
                  placeholder="Search invoices, businesses, or emails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              
              {selectedInvoices.length > 0 && (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => handleBulkAction('send-reminder')}
                  >
                    Send Reminder ({selectedInvoices.length})
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleBulkAction('export')}
                  >
                    Export ({selectedInvoices.length})
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Billing Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Billing Records</CardTitle>
            <CardDescription>Complete list of all invoices and payment records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border bg-background">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 text-left">
                      <input
                        type="checkbox"
                        checked={selectedInvoices.length === filteredInvoices.length && filteredInvoices.length > 0}
                        onChange={handleSelectAll}
                        className="rounded"
                      />
                    </th>
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
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-t hover:bg-muted/50">
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(invoice.id)}
                          onChange={() => handleSelectInvoice(invoice.id)}
                          className="rounded"
                        />
                      </td>
                      <td className="px-4 py-3 font-medium">{invoice.invoiceNumber}</td>
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">{invoice.businessName}</div>
                          <div className="text-xs text-muted-foreground">{invoice.userEmail}</div>
                        </div>
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
                            View
                          </Button>
                          {invoice.status === 'Pending' && (
                            <Button size="sm" variant="default">
                              Process Payment
                            </Button>
                          )}
                          {invoice.status === 'Overdue' && (
                            <Button size="sm" variant="outline">
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
      </div>
    </div>
  );
}
