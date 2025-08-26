'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BusinessSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="BUSINESS_OWNER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: configure your business settings.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
