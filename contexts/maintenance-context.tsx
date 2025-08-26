'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MaintenanceState {
  enabled: boolean;
  message: string;
  estimatedTime: string;
  allowAdmins: boolean;
}

interface MaintenanceContextType {
  maintenance: MaintenanceState;
  setMaintenance: (maintenance: MaintenanceState) => void;
  isMaintenanceMode: () => boolean;
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined);

export function MaintenanceProvider({ children }: { children: ReactNode }) {
  const [maintenance, setMaintenance] = useState<MaintenanceState>({
    enabled: false,
    message: "We're currently performing maintenance. Please check back soon.",
    estimatedTime: "2 hours",
    allowAdmins: true
  });

  const isMaintenanceMode = () => {
    return maintenance.enabled;
  };

  return (
    <MaintenanceContext.Provider value={{ maintenance, setMaintenance, isMaintenanceMode }}>
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance() {
  const context = useContext(MaintenanceContext);
  if (context === undefined) {
    throw new Error('useMaintenance must be used within a MaintenanceProvider');
  }
  return context;
}
