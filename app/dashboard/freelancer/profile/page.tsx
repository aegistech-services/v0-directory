'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FreelancerProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="FREELANCER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Freelancer Profile</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: manage your freelancer profile.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
