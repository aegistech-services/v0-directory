# Langkawi Directory - AI Cursor Guide

## Introduction

This document provides guidance for the AI Cursor (or any AI assistant) working on the Langkawi Directory project. It outlines the project's goals, technologies used, coding standards, and important considerations to ensure consistent and high-quality contributions.

## Project Overview

The Langkawi Directory is a platform designed as a "Wunderlust tag board" for listing local businesses, jobs, events, advertisements, tours, accommodations, and interesting places in Langkawi.  It will feature different user roles with tailored dashboards and functionalities.

## Technologies Used

*   **Frontend:** Next.js, Tailwind CSS, Shadcn UI, JavaScript/TypeScript
*   **Backend:** Node.js (likely Express.js or similar), MySQL
*   **Database:** MySQL
*   **Authentication:** NextAuth.js (recommended)
*   **Payment Gateway:** Stripe
*   **Other:** Git, potentially WhatsApp API, Weather API, Google Analytics, Google Web Console, Onesignal (for push notifications)

## Coding Standards & Best Practices

*   **Code Style:**  Follow consistent code style guidelines.  For JavaScript/TypeScript, use Prettier and ESLint with a shared configuration.  For SQL, use consistent indentation and naming conventions.
*   **Comments:**  Write clear and concise comments to explain complex logic or non-obvious code.
*   **Version Control:**  Use Git for version control.  Follow a branching strategy (e.g., Gitflow).  Write meaningful commit messages.
*   **Error Handling:** Implement robust error handling throughout the application.  Log errors appropriately.
*   **Security:**  Prioritize security.  Sanitize user inputs, protect against common web vulnerabilities (e.g., XSS, SQL injection), and follow secure coding practices.
*   **Accessibility:**  Ensure the website is accessible to users with disabilities (WCAG guidelines).
*   **Testing:**  Write unit tests and integration tests to verify the functionality of your code.
*   **API Design:**  Follow RESTful API principles.  Use clear and consistent naming conventions for API endpoints and data structures.
*   **Database Design:**  Follow database normalization principles.  Use appropriate data types and indexes.

## User Roles & Permissions

The application has the following user roles:

*   **Admin:** Full access to all features and data.  Manages all aspects of the platform.
*   **Business Owner:** Can manage their own business listing, job postings, inquiries, promotions, and subscription plan.
*   **Freelancer:** Can manage their service listings, inquiries, promotions, and subscription plan.
*   **Advertiser:** Can manage their ads, inquiries, promotions, and subscription plan.
*   **Public User:** Can browse listings, bookmark items, submit inquiries, and view promotions.

**Important:**  Always respect role-based access control (RBAC) when implementing new features.  Ensure that users only have access to the features and data that they are authorized to access.

## Key Modules & Functionality

*   **Business Listing:**  Creating, updating, enabling/disabling business listings.  Includes company information, catalog/gallery, and map location.
*   **Travel Listing:** Similar to Business Listing, but specifically for travel-related businesses.
*   **Job Listing/Posting:**  Creating, updating, enabling/disabling job postings.
*   **Service Listing/Posting:** Creating, updating, enabling/disabling service postings.
*   **Event Listing:** Creating, updating, enabling/disabling event listings.
*   **Inquiry:** Handling inquiries from public users to listing owners.
*   **Advertisement Listing (Promotion/Banner/Adsense):** Managing advertisements.
*   **Subscription:** Managing subscription plans and payments (Stripe integration).
*   **Analytic:** Tracking bookmarks, inquiries, and other key metrics.
*   **Website Management:** SEO, logo/favicon, sitemap, robots.txt, Google Analytics, Google Web Console, PWA, Onesignal, Stripe settings, invoice templates, API integrations (WhatsApp, Weather).

## Specific Guidance for AI Cursor

*   **Context is Key:**  Always refer to the `todo.md` file for the current tasks and priorities.
*   **Ask Questions:** If you are unsure about any aspect of the project, ask clarifying questions.  Don't make assumptions.
*   **Code Review:**  Be prepared to have your code reviewed by a human developer.  Address any feedback promptly.
*   **Focus on Quality:**  Prioritize code quality, readability, and maintainability.
*   **Follow Instructions:**  Pay close attention to the specific instructions provided for each task.
*   **Testing:**  Always write tests for your code.
*   **Database Interactions:**  Be careful when interacting with the database.  Use parameterized queries to prevent SQL injection vulnerabilities.
*   **Frontend Components:**  Utilize the Shadcn UI components whenever possible to maintain a consistent look and feel.
*   **API Integration:**  When integrating with external APIs (e.g., WhatsApp, Weather), follow the API documentation carefully.

## Resources

*   **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
*   **Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
*   **Shadcn UI:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
*   **MySQL Documentation:** [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)
*   **Stripe Documentation:** [https://stripe.com/docs](https://stripe.com/docs)
*   **NextAuth.js Documentation:** [https://next-auth.js.org/](https://next-auth.js.org/)

## Contact

If you have any questions or need assistance, please contact the project lead.