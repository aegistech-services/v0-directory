'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BusinessAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="BUSINESS_OWNER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: insights about your listings.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
