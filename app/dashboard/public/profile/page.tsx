'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  X,
  Camera,
  Shield,
  Bell,
  Globe,
  Heart
} from 'lucide-react';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  birthDate: string;
  gender: string;
  bio: string;
  interests: string[];
  preferences: {
    notifications: boolean;
    marketing: boolean;
    language: string;
    currency: string;
  };
  joinDate: string;
  lastActive: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+60 12-345 6789',
    location: 'Kuala Lumpur, Malaysia',
    birthDate: '1990-05-15',
    gender: 'Male',
    bio: 'Travel enthusiast who loves exploring new destinations. Always looking for unique experiences and local recommendations.',
    interests: ['Travel', 'Photography', 'Food', 'Adventure', 'Culture'],
    preferences: {
      notifications: true,
      marketing: false,
      language: 'English',
      currency: 'MYR'
    },
    joinDate: '2024-01-15',
    lastActive: '2024-11-15'
  });

  const [editForm, setEditForm] = useState<UserProfile>(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const addInterest = (interest: string) => {
    if (interest && !editForm.interests.includes(interest)) {
      setEditForm(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    }
  };

  const removeInterest = (interest: string) => {
    setEditForm(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar userRole="PUBLIC" />
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Your personal details and contact information</CardDescription>
                </div>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={editForm.name}
                        onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={editForm.phone}
                        onChange={(e) => setEditForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.phone}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={editForm.location}
                        onChange={(e) => setEditForm(prev => ({ ...prev, location: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.location}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Birth Date</Label>
                    {isEditing ? (
                      <Input
                        id="birthDate"
                        type="date"
                        value={editForm.birthDate}
                        onChange={(e) => setEditForm(prev => ({ ...prev, birthDate: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.birthDate}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    {isEditing ? (
                      <Select value={editForm.gender} onValueChange={(value) => setEditForm(prev => ({ ...prev, gender: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-sm text-gray-900 mt-1">{profile.gender}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={editForm.bio}
                      onChange={(e) => setEditForm(prev => ({ ...prev, bio: e.target.value }))}
                      className="mt-1"
                      rows={3}
                    />
                  ) : (
                    <p className="text-sm text-gray-900 mt-1">{profile.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>Your areas of interest and hobbies</CardDescription>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add new interest..."
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addInterest((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                        className="flex-1"
                      />
                      <Button size="sm" variant="outline">Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {editForm.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {interest}
                          <button
                            onClick={() => removeInterest(interest)}
                            className="ml-1 hover:text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={profile.preferences.notifications}
                    onChange={(e) => setProfile(prev => ({
                      ...prev,
                      preferences: { ...prev.preferences, notifications: e.target.checked }
                    }))}
                    className="rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">Marketing Emails</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={profile.preferences.marketing}
                    onChange={(e) => setProfile(prev => ({
                      ...prev,
                      preferences: { ...prev.preferences, marketing: e.target.checked }
                    }))}
                    className="rounded"
                  />
                </div>
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={profile.preferences.language} onValueChange={(value) => setProfile(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, language: value }
                  }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Bahasa Malaysia">Bahasa Malaysia</SelectItem>
                      <SelectItem value="Chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={profile.preferences.currency} onValueChange={(value) => setProfile(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, currency: value }
                  }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MYR">MYR (Malaysian Ringgit)</SelectItem>
                      <SelectItem value="USD">USD (US Dollar)</SelectItem>
                      <SelectItem value="SGD">SGD (Singapore Dollar)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium">{profile.joinDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last active</span>
                  <span className="font-medium">{profile.lastActive}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Account type</span>
                  <Badge variant="outline">Public User</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
