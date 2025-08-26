'use client';

import { useState } from 'react';
import MaintenanceMode from './maintenance-mode';

interface MaintenanceWrapperProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

export default function MaintenanceWrapper({ children, isAdmin = false }: MaintenanceWrapperProps) {
  // For now, we'll use a simple state. In a real app, this would come from a database or API
  const [maintenanceEnabled] = useState(false);

  // If maintenance mode is enabled and user is not admin, show maintenance page
  if (maintenanceEnabled && !isAdmin) {
    return (
      <MaintenanceMode 
        message="We're currently performing maintenance. Please check back soon."
        estimatedTime="2 hours"
      />
    );
  }

  // Otherwise, show normal content
  return <>{children}</>;
}
