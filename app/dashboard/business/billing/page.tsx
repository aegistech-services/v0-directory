'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DashboardSidebar } from '@/components/dashboard/sidebar';

// Mock billing data for business owner
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

export default function BusinessBillingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredInvoices = mockBillingData.filter(invoice => {
    const matchesSearch = 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userRole="BUSINESS_OWNER" />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Billing & Payments</h1>
          <p className="text-gray-600 mt-2">Manage your invoices and subscription payments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">RM 913.00</div>
              <p className="text-xs text-muted-foreground">
                This year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Premium, Featured, Job Posting
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">RM 199.00</div>
              <p className="text-xs text-muted-foreground">
                Due Dec 1, 2024
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">RM 49.00</div>
              <p className="text-xs text-muted-foreground">
                Basic Listing
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Input
                placeholder="Search invoices or descriptions..."
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
          </CardContent>
        </Card>

        {/* Billing Table */}
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Your complete invoice and payment history</CardDescription>
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
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-t hover:bg-muted/50">
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
      </div>
    </div>
  );
}
