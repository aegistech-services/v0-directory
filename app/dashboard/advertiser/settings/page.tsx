'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdvertiserSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="ADVERTISER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Advertiser Settings</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: configure your advertising settings.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
