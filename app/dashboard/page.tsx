'use client';

import { useState, useEffect } from 'react';
import AdminDashboard from '@/components/dashboard/admin-dashboard';
import BusinessDashboard from '@/components/dashboard/business-dashboard';
import FreelancerDashboard from '@/components/dashboard/freelancer-dashboard';
import AdvertiserDashboard from '@/components/dashboard/advertiser-dashboard';
import PublicDashboard from '@/components/dashboard/public-dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CenteredSpinner } from '@/components/ui/spinner';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { UserRole } from '@prisma/client';

// Mock user data - in real app this would come from authentication context
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'ADMIN' as UserRole, // Change this to test different dashboards
};

export default function DashboardPage() {
  const [user, setUser] = useState(mockUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <CenteredSpinner label="Loading dashboard..." />;
  }

  // Role selector for demo purposes
  const RoleSelector = () => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Demo: Switch User Role</CardTitle>
        <CardDescription>Select a different user role to see different dashboards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {(['ADMIN', 'BUSINESS_OWNER', 'FREELANCER', 'ADVERTISER', 'PUBLIC'] as UserRole[]).map((role) => (
            <Button
              key={role}
              variant={user.role === role ? 'default' : 'outline'}
              size="sm"
              onClick={() => setUser({ ...user, role })}
            >
              {role.replace('_', ' ')}
              {user.role === role && <Badge className="ml-2" variant="secondary">Current</Badge>}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole={user.role} />
      <div className="flex-1 p-6">
        <RoleSelector />
        
        {/* User Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Welcome, {user.name}
              <Badge variant="outline">{user.role.replace('_', ' ')}</Badge>
            </CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
        </Card>

        {/* Render appropriate dashboard based on user role */}
        {user.role === 'ADMIN' && <AdminDashboard />}
        {user.role === 'BUSINESS_OWNER' && <BusinessDashboard />}
        {user.role === 'FREELANCER' && <FreelancerDashboard />}
        {user.role === 'ADVERTISER' && <AdvertiserDashboard />}
        {user.role === 'PUBLIC' && <PublicDashboard />}
      </div>
    </div>
  );
}
