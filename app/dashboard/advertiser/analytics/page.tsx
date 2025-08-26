'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdvertiserAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="ADVERTISER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Ad Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: performance analytics for your ads.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
