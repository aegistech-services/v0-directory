# Langkawi Directory Project

A Wunderlust tag board style directory platform for Langkawi.  
Main categories: Jobs, Events, Advertisements, Tour Guide (accommodation, interesting places, rental).

---

## Tech Stack
- Frontend: Next.js, TailwindCSS, Shadcn UI  
- Backend: Next.js API routes (Node.js)  
- Database: MySQL (via Prisma ORM)  
- Payment: Stripe  
- Push & Notifications: PWA + OneSignal  
- APIs: WhatsApp API, Weather API  

---

## Project Structure

project-root/
│── frontend/              # Next.js app (public pages + dashboards)
│   │── components/        # Shared UI components (Shadcn)
│   │── modules/           # Business, Jobs, Services, Events, Ads
│   │── pages/             # Next.js pages
│   │── api/               # API routes
│── backend/               # API helpers (auth, payments, analytics)
│── database/              # Prisma schema, migrations, seeds
│── public/                # Static assets (logo, favicon, robots.txt, sitemap)
│── docs/                  # Project documentation (todo.md, roadmap.md, readme.md)
│── scripts/               # Deployment, testing, utilities

---

## User Roles & Dashboards

1. Admin
- Business Listing CRUD (enable/disable)
- Job Posting CRUD
- Service Posting CRUD
- Event Listing CRUD
- Inquiry Management
- Promotion Management
- Subscription Management
- Ads Listing CRUD
- Analytics (bookmarks, inquiries)
- Website SEO (logo, favicon, sitemap, robots)
- Google Analytics / Console integration
- Subscription Payment Setting (Stripe)
- Disclaimer Page
- Website Logs

2. Business Owner
- Manage Business Listing
  - Company info: name, address, contact, email, phone, map, remark
  - Business catalog/gallery (images, PDFs)
- Job Posting (vacancy with time limits)
- Inquiry List (from public)
- Business Profile + Owner Profile
- Promotion (banner, details, inquiry button)
- Subscription Plans:
  - Beginner: 3 catalog items
  - Intermediate: 9 catalog items
  - Professional: 15 catalog items

3. Freelancer
- Service Listing
  - Title, rate, category, remark
  - Appointment form (submit to WhatsApp/email)
- Inquiry List
- Freelancer Profile
- Promotion
- Subscription Plans:
  - Beginner: 3 catalog items
  - Intermediate: 9 catalog items
  - Professional: 15 catalog items

4. Advertiser
- Ads Listing Submission
- Inquiry List
- Advertiser Profile
- Promotion
- Subscription Plans:
  - Beginner: 3 slots (1 month)
  - Intermediate: 3 slots (3 months)
  - Professional: 3 slots (6 months) + featured badge

5. Public User
- Bookmark Listings
- Inquiry List
- User Profile
- View Site Promotions (ads from business owners, freelancers, advertisers)

---

## Module Development

- Business Listing
- Travel Listing
- Job Posting
- Service Posting
- Event Listing
- Inquiry System
- Advertisement Listing
- Subscription Plans
- Analytics
- Website Management
  - SEO (meta, sitemap, robots.txt)
  - Logo & favicon upload
  - Google Adsense + AdMob
  - PWA & OneSignal
  - Stripe Payment Setting
- Templates
  - Invoice Template
- APIs
  - WhatsApp API (appointments, inquiries)
  - Weather API (travel listings)

---

## Development Workflow

Phase 1 – Core Setup
- Initialize Next.js project with Tailwind & Shadcn
- Configure Prisma + MySQL
- Setup user roles & auth (JWT/session)
- Create empty dashboards for all roles
- Admin: CRUD for Business Listings
- Public homepage with sample categories

Phase 2 – Core Modules
- Business Listings (full CRUD, claim function)
- Travel Listings
- Job Postings
- Service Listings
- Event Listings
- Inquiry System
- Subscription Plans (Business/Freelancer/Advertiser)
- Promotion Management
- Ads Listing

Phase 3 – Website Management
- SEO (meta, sitemap, robots.txt)
- Logo & favicon upload
- Google Analytics, Google Web Console
- Stripe integration (subscription + webhook)
- Analytics dashboard (bookmarks, inquiries)
- Disclaimer Page
- Website Logs

Phase 4 – Enhancements
- PWA + OneSignal notifications
- Google Adsense / AdMob integration
- Weather API integration
- WhatsApp API for inquiries/appointments

Phase 5 – Future
- Mobile App (React Native / Flutter)
- Multi-language support (EN/MY)
- AI-powered recommendations

---

## Database (Prisma Schema Outline)

model User {
  id          Int      @id @default(autoincrement())
  role        String   // admin, business, freelancer, advertiser, public
  name        String
  email       String   @unique
  password    String
  inquiries   Inquiry[]
  bookmarks   Bookmark[]
}

model BusinessListing {
  id        Int      @id @default(autoincrement())
  ownerId   Int
  company   String
  address   String
  contact   String
  email     String
  phone     String
  mapUrl    String?
  remark    String?
  catalogs  Catalog[]
  owner     User     @relation(fields: [ownerId], references: [id])
}

model JobPosting {
  id        Int      @id @default(autoincrement())
  title     String
  companyId Int
  expiresAt DateTime?
  company   BusinessListing @relation(fields: [companyId], references: [id])
}

model ServiceListing {
  id        Int      @id @default(autoincrement())
  title     String
  rate      Float
  category  String
  remark    String?
  ownerId   Int
  owner     User     @relation(fields: [ownerId], references: [id])
}

model Inquiry {
  id        Int      @id @default(autoincrement())
  fromId    Int
  toId      Int
  message   String
  createdAt DateTime @default(now())
  from      User     @relation("InquiryFrom", fields: [fromId], references: [id])
  to        User     @relation("InquiryTo", fields: [toId], references: [id])
}

model Subscription {
  id        Int      @id @default(autoincrement())
  userId    Int
  plan      String
  startDate DateTime
  endDate   DateTime
  user      User @relation(fields: [userId], references: [id])
}

---

## Guidelines for Cursor AI

- Use TypeScript in all Next.js files.  
- Follow role-based access strictly.  
- Generate Shadcn UI components for all CRUD operations.  
- APIs must live under /api/ in Next.js.  
- Protect sensitive APIs with JWT-based auth middleware.  
- Use Prisma ORM for all DB operations.  
- Always update todo.md when a module is implemented.

## Completed Features

### Card Listing Modal ✅
- **Feature**: Click on card to expand and show more details in a modal
- **Components Created**:
  - `Modal` - Reusable modal component with backdrop and close functionality
  - `ListingDetailModal` - Detailed view component for expanded listing information
- **Functionality**:
  - Cards are now clickable with cursor pointer
  - Modal displays full listing details including larger image
  - Shows all available information: title, description, category, tags, location, date, time, rating, price
  - Action buttons based on category (Apply Now, Get Tickets, Book Now, Contact Now)
  - Responsive design with proper spacing and layout
  - Close button and backdrop click to dismiss  

---

## Commands

npm install                # install dependencies
npm run dev                # run dev
npm run build              # run build
npm start                  # start server
npx prisma migrate dev     # prisma migration
npx prisma generate        # generate prisma client
npm test                   # run tests
  