# Langkawi Directory - Mockup System

This is a comprehensive mockup system for the Langkawi Directory project, built based on the requirements outlined in `roadmap.md`, `todo.md`, and `readme.md`.

## 🎯 Project Overview

The Langkawi Directory is a "Wunderlust tag board" style directory platform for Langkawi, featuring different user roles with tailored dashboards and functionalities. The system supports businesses, jobs, events, advertisements, and tour guide listings.

## 🏗️ System Architecture

### Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: MySQL (via Prisma)
- **Authentication**: JWT-based authentication
- **Payment**: Stripe integration (planned)
- **UI Components**: Radix UI primitives with Shadcn UI

### Database Schema
The system includes comprehensive database models for:
- **Users** (5 roles: Admin, Business Owner, Freelancer, Advertiser, Public)
- **Business Listings** with catalogs and galleries
- **Job Postings** with expiration dates
- **Service Listings** for freelancers
- **Event Listings** with date ranges
- **Ads Listings** with performance tracking
- **Inquiries** system for user communication
- **Bookmarks** for saved items
- **Subscriptions** with different plans
- **Promotions** for marketing
- **Website Settings** for SEO and configuration

## 👥 User Roles & Dashboards

### 1. Admin Dashboard
**Features:**
- Complete system management
- Business, Job, Service, Event, and Ads listing management
- Inquiry management
- Promotion management
- Subscription management
- Analytics and reporting
- Website SEO and settings
- Payment configuration
- System logs

**Key Modules:**
- Business Listing CRUD (enable/disable)
- Job Posting CRUD
- Service Posting CRUD
- Event Listing CRUD
- Inquiry Management
- Promotion Management
- Subscription Management
- Ads Listing CRUD
- Analytics (bookmarks, inquiries)
- Website Management (SEO, logo, favicon, sitemap)
- Payment Settings (Stripe)
- Disclaimer Page
- Website Logs

### 2. Business Owner Dashboard
**Features:**
- Business listing management
- Job posting capabilities
- Inquiry handling
- Profile management
- Promotion creation
- Subscription plan management

**Subscription Plans:**
- **Beginner**: 3 catalog items
- **Intermediate**: 9 catalog items  
- **Professional**: 15 catalog items

**Key Modules:**
- Business Listing (company info, address, contact, map location)
- Business Catalog/Gallery management
- Job Posting (vacancy with time limits)
- Inquiry List (from public users)
- Business Profile + Owner Profile
- Promotion (banner, details, inquiry button)
- Subscription Plan management

### 3. Freelancer Dashboard
**Features:**
- Service listing management
- Appointment system
- Inquiry handling
- Profile management
- Promotion creation
- Subscription plan management

**Subscription Plans:**
- **Beginner**: 3 catalog items
- **Intermediate**: 9 catalog items
- **Professional**: 15 catalog items

**Key Modules:**
- Service Listing (title, rate, category, remark)
- Appointment form (submit to WhatsApp/email)
- Inquiry List
- Freelancer Profile
- Promotion
- Subscription Plan management

### 4. Advertiser Dashboard
**Features:**
- Advertisement management
- Performance tracking
- Inquiry handling
- Profile management
- Promotion creation
- Subscription plan management

**Subscription Plans:**
- **Beginner**: 3 slots (1 month)
- **Intermediate**: 3 slots (3 months)
- **Professional**: 3 slots (6 months) + featured badge

**Key Modules:**
- Ads Listing submission and management
- Performance analytics (views, clicks, CTR)
- Inquiry List
- Advertiser Profile
- Promotion
- Subscription Plan management

### 5. Public User Dashboard
**Features:**
- Browse listings
- Bookmark items
- Submit inquiries
- View promotions
- Profile management

**Key Modules:**
- Bookmark Listings
- Inquiry List
- User Profile
- Site Promotions (ads from business owners, freelancers, advertisers)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MySQL database
- npm or pnpm

### Installation

1. **Clone and install dependencies:**
```bash
cd xlisting/v0-directory
npm install
```

2. **Set up environment variables:**
Create a `.env` file with:
```env
DATABASE_URL="mysql://username:password@localhost:3306/jebeng_listing"
JWT_SECRET="your-secret-key-here"
```

3. **Set up the database:**
```bash
npx prisma generate
npx prisma db push
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Access the dashboard:**
Navigate to `http://localhost:3000/dashboard`

## 🎨 Mockup Features

### Interactive Role Switching
The dashboard includes a demo role selector that allows you to switch between different user roles to see how each dashboard looks and functions.

### Responsive Design
All dashboards are fully responsive and work on desktop, tablet, and mobile devices.

### Real-time Stats
Each dashboard displays relevant statistics and metrics for the user role:
- **Admin**: System-wide statistics
- **Business Owner**: Business-specific metrics
- **Freelancer**: Service and earnings metrics
- **Advertiser**: Ad performance metrics
- **Public User**: Personal activity metrics

### Module-based Navigation
Each dashboard uses a tabbed interface to organize different modules and functionalities.

## 📊 Key Features Implemented

### Authentication System
- JWT-based authentication
- Role-based access control
- User registration and login APIs
- Password hashing with bcrypt

### Database Integration
- Complete Prisma schema
- Type-safe database operations
- Relationship management
- Enum support for user roles and statuses

### UI Components
- Shadcn UI components
- Radix UI primitives
- Responsive design
- Dark/light theme support
- Loading states and animations

### API Structure
- RESTful API design
- Authentication middleware
- Role-based authorization
- Error handling and validation

## 🔧 Development Workflow

### Phase 1 - Core Setup ✅
- [x] Next.js project with Tailwind & Shadcn
- [x] Prisma + MySQL configuration
- [x] User roles & authentication
- [x] Dashboard components for all roles
- [x] Database schema

### Phase 2 - Core Modules (Next Steps)
- [ ] Business Listings CRUD
- [ ] Travel Listings
- [ ] Job Postings
- [ ] Service Listings
- [ ] Event Listings
- [ ] Inquiry System
- [ ] Subscription Plans
- [ ] Promotion Management
- [ ] Ads Listing

### Phase 3 - Website Management (Future)
- [ ] SEO implementation
- [ ] Logo & favicon upload
- [ ] Google Analytics integration
- [ ] Stripe payment integration
- [ ] Analytics dashboard
- [ ] Disclaimer page
- [ ] Website logs

## 🎯 Next Steps

1. **Implement CRUD operations** for all listing types
2. **Add form components** for creating/editing listings
3. **Implement file upload** for images and documents
4. **Add search and filtering** functionality
5. **Implement real-time notifications**
6. **Add payment integration** with Stripe
7. **Implement analytics** and reporting
8. **Add PWA features** and mobile optimization

## 📁 Project Structure

```
xlisting/v0-directory/
├── app/
│   ├── api/                    # API routes
│   │   └── auth/              # Authentication endpoints
│   ├── dashboard/             # Dashboard pages
│   └── globals.css            # Global styles
├── components/
│   ├── dashboard/             # Dashboard components
│   │   ├── admin-dashboard.tsx
│   │   ├── business-dashboard.tsx
│   │   ├── freelancer-dashboard.tsx
│   │   ├── advertiser-dashboard.tsx
│   │   └── public-dashboard.tsx
│   └── ui/                    # Shadcn UI components
├── lib/
│   ├── auth.ts               # Authentication utilities
│   ├── db.ts                 # Database client
│   └── utils.ts              # Utility functions
├── prisma/
│   └── schema.prisma         # Database schema
└── docs/                     # Project documentation
```

## 🤝 Contributing

This mockup system provides a solid foundation for the Langkawi Directory project. The modular architecture makes it easy to extend and customize based on specific requirements.

## 📄 License

This project is part of the Langkawi Directory system and follows the project's licensing terms.
