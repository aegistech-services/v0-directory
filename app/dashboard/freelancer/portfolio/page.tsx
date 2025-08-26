'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FreelancerPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="FREELANCER" />
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            Coming soon: showcase your work here.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
