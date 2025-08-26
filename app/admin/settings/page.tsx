"use client"

import { useState, useEffect } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MaintenanceWrapper from "@/components/maintenance-wrapper"

export default function AdminSettingsPage() {
  const [general, setGeneral] = useState({ siteName: "Wanderlust", tagline: "Explore. Discover. Share.", language: "en", timezone: "UTC" })
  const [branding, setBranding] = useState({ logoUrl: "/logo.png", faviconUrl: "/favicon.ico", primaryColor: "#0ea5e9" })
  const [seo, setSeo] = useState({ metaTitle: "Wanderlust Directory", metaDescription: "Find tours, jobs, services, and events.", robots: true, sitemap: true })
  const [contact, setContact] = useState({ email: "support@example.com", phone: "+60 12-345 6789", address: "123 Beach Rd, Langkawi" })
  const [maintenance, setMaintenance] = useState({ 
    enabled: false, 
    message: "We're currently performing maintenance. Please check back soon.", 
    estimatedTime: "2 hours",
    allowAdmins: true 
  })
  
  // Subscription Plans state
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    { id: "1", name: "Basic Plan", price: "RM 29", duration: "monthly", features: ["Basic listing", "Email support"], status: "active" },
    { id: "2", name: "Pro Plan", price: "RM 79", duration: "monthly", features: ["Premium listing", "Priority support", "Analytics"], status: "active" },
    { id: "3", name: "Enterprise", price: "RM 199", duration: "monthly", features: ["Unlimited listings", "24/7 support", "Custom features"], status: "active" }
  ])
  const [editingPlan, setEditingPlan] = useState<any>(null)
  const [planForm, setPlanForm] = useState({ name: "", price: "", duration: "monthly", features: [""], status: "active" })
  
  // Tags and Categories state
  const [tags, setTags] = useState([
    "adventure", "cultural", "nature", "tech", "networking", "innovation", "home", "cleaning", "eco-friendly",
    "train", "europe", "fast", "music", "jazz", "outdoor", "food", "festival", "family", "island", "boat",
    "snorkeling", "hiking", "retreat", "marketing", "leadership", "creative", "design", "uiux", "remote",
    "cleaning", "eco", "heritage", "walking", "street-food", "water-sports", "sightseeing", "wellness"
  ])
  const [newTag, setNewTag] = useState("")
  
  const [categories, setCategories] = useState({
    business: ["Travel & Tourism", "Technology", "Home Services", "Events & Entertainment", "Food & Beverage", "Sports & Recreation", "Healthcare", "Education", "Finance"],
    jobs: ["Technology", "Marketing", "Sales", "Design", "Engineering", "Healthcare", "Education", "Finance", "Operations", "Customer Service"],
    services: ["Home Services", "Professional Services", "Health & Wellness", "Education & Training", "Technology Services", "Creative Services", "Financial Services", "Legal Services", "Transportation"],
    events: ["Technology", "Music", "Food & Dining", "Sports", "Arts & Culture", "Business", "Education", "Health & Wellness", "Family", "Networking"],
    travel: ["Adventure", "Cultural", "Nature", "Food & Dining", "Transportation", "Accommodation", "Water Sports", "Sightseeing", "Wellness"]
  })
  const [newCategory, setNewCategory] = useState({ type: "business", name: "" })

  return (
    <MaintenanceWrapper isAdmin={true}>
      <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="subscription_plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="tags_categories">Tags & Categories</TabsTrigger>
            <TabsTrigger value="weblogs">Web Logs</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Basic site configuration, branding, SEO, and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => { e.preventDefault(); console.log({ general, branding, seo, contact }) }}
                >
                  {/* Basic Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Basic Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Site Name</label>
                        <Input value={general.siteName} onChange={(e) => setGeneral({ ...general, siteName: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Tagline</label>
                        <Input value={general.tagline} onChange={(e) => setGeneral({ ...general, tagline: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Default Language</label>
                        <select className="w-full h-9 rounded-md border px-2 text-sm" value={general.language} onChange={(e) => setGeneral({ ...general, language: e.target.value })}>
                          <option value="en">English</option>
                          <option value="ms">Bahasa Melayu</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Timezone</label>
                        <select className="w-full h-9 rounded-md border px-2 text-sm" value={general.timezone} onChange={(e) => setGeneral({ ...general, timezone: e.target.value })}>
                          <option value="UTC">UTC</option>
                          <option value="GMT+8">GMT+8 (Malaysia)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Branding */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Branding</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Logo URL</label>
                        <Input value={branding.logoUrl} onChange={(e) => setBranding({ ...branding, logoUrl: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Favicon URL</label>
                        <Input value={branding.faviconUrl} onChange={(e) => setBranding({ ...branding, faviconUrl: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Primary Color</label>
                        <Input type="color" value={branding.primaryColor} onChange={(e) => setBranding({ ...branding, primaryColor: e.target.value })} />
                      </div>
                    </div>
                  </div>

                  {/* SEO */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">SEO Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Meta Title</label>
                        <Input value={seo.metaTitle} onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Meta Description</label>
                        <Input value={seo.metaDescription} onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Robots Indexing</label>
                        <select className="w-full h-9 rounded-md border px-2 text-sm" value={seo.robots ? "true" : "false"} onChange={(e) => setSeo({ ...seo, robots: e.target.value === "true" })}>
                          <option value="true">Allow</option>
                          <option value="false">Disallow</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Sitemap</label>
                        <select className="w-full h-9 rounded-md border px-2 text-sm" value={seo.sitemap ? "true" : "false"} onChange={(e) => setSeo({ ...seo, sitemap: e.target.value === "true" })}>
                          <option value="true">Enabled</option>
                          <option value="false">Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Support Email</label>
                        <Input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Input value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })} />
                      </div>
                    </div>
                  </div>

                  {/* Maintenance Mode */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Maintenance Mode</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="maintenance-enabled"
                          checked={maintenance.enabled}
                          onChange={(e) => setMaintenance({ ...maintenance, enabled: e.target.checked })}
                          className="rounded"
                        />
                        <label htmlFor="maintenance-enabled" className="text-sm font-medium">
                          Enable Maintenance Mode
                        </label>
                      </div>
                      
                      {maintenance.enabled && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Maintenance Message</label>
                            <Input 
                              value={maintenance.message} 
                              onChange={(e) => setMaintenance({ ...maintenance, message: e.target.value })}
                              placeholder="Enter maintenance message for users"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Estimated Duration</label>
                            <Input 
                              value={maintenance.estimatedTime} 
                              onChange={(e) => setMaintenance({ ...maintenance, estimatedTime: e.target.value })}
                              placeholder="e.g., 2 hours, 1 day"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="allow-admins"
                              checked={maintenance.allowAdmins}
                              onChange={(e) => setMaintenance({ ...maintenance, allowAdmins: e.target.checked })}
                              className="rounded"
                            />
                            <label htmlFor="allow-admins" className="text-sm font-medium">
                              Allow Admin Access
                            </label>
                          </div>
                        </div>
                      )}
                      
                      <div className="text-sm text-muted-foreground">
                        When maintenance mode is enabled, the frontpage will show a maintenance message to regular users.
                        {maintenance.allowAdmins && " Administrators will still be able to access the site normally."}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit">Save All Settings</Button>
                    <Button type="button" variant="outline" onClick={() => console.log("reset all settings")}>Reset All</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>







          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Third-party services (read-only placeholders)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-semibold mb-2">Google Analytics</div>
                    <div className="text-xs text-muted-foreground mb-1">Measurement ID</div>
                    <Input value="G-XXXXXXXXXX" readOnly />
                    <div className="text-xs text-muted-foreground mt-2">Google Search Console</div>
                    <Input value="site-verification-xxxxxxxxxxxxxxxx" readOnly />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2">Stripe</div>
                    <div className="text-xs text-muted-foreground mb-1">Publishable Key</div>
                    <Input value="pk_live_********************************" readOnly />
                    <div className="text-xs text-muted-foreground mt-2">Secret Key</div>
                    <Input value="sk_live_********************************" readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm font-semibold mb-2">OneSignal</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">App ID</div>
                        <Input value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">REST API Key</div>
                        <Input value="OS_REST_KEY_********************************" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm font-semibold mb-2">PWA</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Manifest Name</div>
                        <Input value="Wanderlust Directory" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Short Name</div>
                        <Input value="Wanderlust" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Theme Color</div>
                        <Input value="#0ea5e9" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Background Color</div>
                        <Input value="#ffffff" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Start URL</div>
                        <Input value="/" readOnly />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Display</div>
                        <Input value="standalone" readOnly />
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-xs text-muted-foreground mb-1">Service Worker</div>
                        <Input value="Registered (mock)" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        {/* Subscription Plans */}
        <TabsContent value="subscription_plans">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Manage subscription plans and pricing</CardDescription>
            </CardHeader>
            <CardContent>
              {/* CRUD Form */}
              <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{editingPlan ? "Edit Plan" : "Create New Plan"}</h3>
                  {editingPlan && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => { 
                        setEditingPlan(null); 
                        setPlanForm({ name: "", price: "", duration: "monthly", features: [""], status: "active" }) 
                      }}
                    >
                      Cancel Edit
                    </Button>
                  )}
                </div>
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (editingPlan) {
                      setSubscriptionPlans(prev => prev.map(p => p.id === editingPlan.id ? { ...editingPlan, ...planForm, id: editingPlan.id } : p))
                      setEditingPlan(null)
                    } else {
                      const id = `plan_${Date.now()}`
                      setSubscriptionPlans(prev => [{ ...planForm, id }, ...prev])
                    }
                    setPlanForm({ name: "", price: "", duration: "monthly", features: [""], status: "active" })
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium mb-1">Plan Name *</label>
                    <Input 
                      placeholder="e.g., Basic Plan" 
                      value={planForm.name} 
                      onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })} 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price *</label>
                    <Input 
                      placeholder="e.g., RM 29" 
                      value={planForm.price} 
                      onChange={(e) => setPlanForm({ ...planForm, price: e.target.value })} 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={planForm.duration}
                      onChange={(e) => setPlanForm({ ...planForm, duration: e.target.value })}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="3months">3 Months</option>
                      <option value="6months">6 Months</option>
                      <option value="yearly">Yearly</option>
                      <option value="lifetime">Lifetime</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={planForm.status}
                      onChange={(e) => setPlanForm({ ...planForm, status: e.target.value })}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Features</label>
                    <div className="space-y-2">
                      {planForm.features.map((feature, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Feature description"
                            value={feature}
                            onChange={(e) => {
                              const newFeatures = [...planForm.features]
                              newFeatures[index] = e.target.value
                              setPlanForm({ ...planForm, features: newFeatures })
                            }}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newFeatures = planForm.features.filter((_, i) => i !== index)
                              setPlanForm({ ...planForm, features: newFeatures.length ? newFeatures : [""] })
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setPlanForm({ ...planForm, features: [...planForm.features, ""] })}
                      >
                        Add Feature
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex gap-2">
                    <Button type="submit">{editingPlan ? "Save Changes" : "Create Plan"}</Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setPlanForm({ name: "", price: "", duration: "monthly", features: [""], status: "active" })}
                    >
                      Reset Form
                    </Button>
                  </div>
                </form>
              </div>

              {/* Plans Table */}
              <div className="overflow-x-auto rounded-md border bg-background">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left">Plan Name</th>
                      <th className="px-4 py-2 text-left">Price</th>
                      <th className="px-4 py-2 text-left">Duration</th>
                      <th className="px-4 py-2 text-left">Features</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionPlans.map((plan) => (
                      <tr key={plan.id} className="border-t">
                        <td className="px-4 py-3 font-medium">{plan.name}</td>
                        <td className="px-4 py-3">{plan.price}</td>
                        <td className="px-4 py-3 capitalize">{plan.duration}</td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="text-xs bg-muted px-2 py-1 rounded">
                                {feature}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            plan.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}>
                            {plan.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingPlan(plan)
                                setPlanForm(plan)
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSubscriptionPlans(prev => prev.filter(p => p.id !== plan.id))}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tags & Categories */}
        <TabsContent value="tags_categories">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tags Management */}
            <Card>
              <CardHeader>
                <CardTitle>Tags Management</CardTitle>
                <CardDescription>Add, edit, or remove tags used across the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter new tag name"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => {
                      if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
                        setTags([...tags, newTag.trim().toLowerCase()])
                        setNewTag("")
                      }
                    }}
                    disabled={!newTag.trim() || tags.includes(newTag.trim().toLowerCase())}
                  >
                    Add Tag
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {tags.map((tag, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm capitalize">{tag}</span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setTags(tags.filter((_, i) => i !== index))}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories Management */}
            <Card>
              <CardHeader>
                <CardTitle>Categories Management</CardTitle>
                <CardDescription>Manage categories for different listing types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <select
                    value={newCategory.type}
                    onChange={(e) => setNewCategory({ ...newCategory, type: e.target.value })}
                    className="px-3 py-2 border rounded-md text-sm"
                  >
                    <option value="business">Business</option>
                    <option value="jobs">Jobs</option>
                    <option value="services">Services</option>
                    <option value="events">Events</option>
                    <option value="travel">Travel</option>
                  </select>
                  <Input
                    placeholder="Enter new category name"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => {
                      if (newCategory.name.trim() && !categories[newCategory.type as keyof typeof categories].includes(newCategory.name.trim())) {
                        setCategories({
                          ...categories,
                          [newCategory.type]: [...categories[newCategory.type as keyof typeof categories], newCategory.name.trim()]
                        })
                        setNewCategory({ type: "business", name: "" })
                      }
                    }}
                    disabled={!newCategory.name.trim() || categories[newCategory.type as keyof typeof categories].includes(newCategory.name.trim())}
                  >
                    Add Category
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(categories).map(([type, categoryList]) => (
                    <div key={type} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 capitalize">{type} Categories</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {categoryList.map((category, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm">{category}</span>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => {
                                const updatedCategories = { ...categories }
                                updatedCategories[type as keyof typeof categories] = categoryList.filter((_, i) => i !== index)
                                setCategories(updatedCategories)
                              }}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Web Logs */}
        <TabsContent value="weblogs">
          <Card>
            <CardHeader>
              <CardTitle>Web Logs</CardTitle>
              <CardDescription>Recent application events (mock data)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border bg-background">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left">Timestamp</th>
                      <th className="px-4 py-2 text-left">Level</th>
                      <th className="px-4 py-2 text-left">Message</th>
                      <th className="px-4 py-2 text-left">Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { ts: '2025-05-01 10:15:23', level: 'info', msg: 'User login success', ctx: 'user: john.doe@example.com' },
                      { ts: '2025-05-01 10:18:02', level: 'warn', msg: 'Rate limit nearing threshold', ctx: 'ip: 203.0.113.5' },
                      { ts: '2025-05-01 10:20:44', level: 'error', msg: 'Failed to fetch ads feed', ctx: 'module: ads' },
                    ].map((row) => (
                      <tr key={row.ts} className="border-t">
                        <td className="px-4 py-2 whitespace-nowrap">{row.ts}</td>
                        <td className="px-4 py-2 capitalize">{row.level}</td>
                        <td className="px-4 py-2">{row.msg}</td>
                        <td className="px-4 py-2">{row.ctx}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Terms & Conditions */}
        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
              <CardDescription>Public-facing terms and conditions (mock)</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log('Saved terms (mock)')
                }}
              >
                <textarea
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm min-h-[240px]"
                  defaultValue={`Last updated: May 1, 2025\n\nWelcome to Wanderlust. By accessing or using our services, you agree to the following terms...\n\n1. Use of Service\n2. User Content\n3. Payments & Subscriptions\n4. Disclaimers\n5. Limitation of Liability\n6. Changes to Terms\n\nFor support, contact support@example.com`}
                />
                <div className="flex gap-2">
                  <Button type="submit">Save</Button>
                  <Button type="button" variant="outline" onClick={() => console.log('Preview terms (mock)')}>Preview</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Policy */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
              <CardDescription>Public-facing privacy policy (mock)</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log('Saved privacy policy (mock)')
                }}
              >
                <textarea
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm min-h-[240px]"
                  defaultValue={`Last updated: May 1, 2025\n\nWe value your privacy. This policy explains what data we collect and how we use it.\n\n1. Information We Collect\n2. How We Use Information\n3. Cookies and Tracking\n4. Data Sharing\n5. Data Retention\n6. Your Rights\n7. Contact Us: support@example.com`}
                />
                <div className="flex gap-2">
                  <Button type="submit">Save</Button>
                  <Button type="button" variant="outline" onClick={() => console.log('Preview privacy policy (mock)')}>Preview</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        </Tabs>
      </div>
      </div>
    </MaintenanceWrapper>
  )
}
