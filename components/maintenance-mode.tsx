'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, AlertTriangle } from 'lucide-react';

interface MaintenanceModeProps {
  message?: string;
  estimatedTime?: string;
}

export default function MaintenanceMode({ 
  message = "We're currently performing maintenance. Please check back soon.", 
  estimatedTime = "2 hours" 
}: MaintenanceModeProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8 text-yellow-600" />
          </div>
          <CardTitle className="text-2xl text-gray-900">Under Maintenance</CardTitle>
          <CardDescription className="text-lg">
            We're currently performing some maintenance on our site
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">{message}</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Estimated completion: {estimatedTime}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              We apologize for the inconvenience. Please check back soon!
            </p>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
            <Button 
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
