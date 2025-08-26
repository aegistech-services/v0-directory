======================================================
GUIDE
======================================================
About project - Langkawi Directory :
Wunderlust tag board style for listing directory with category of job, event, advertisement, tour guide (accomodation, interesting places, rental).

Frontend
- nextjs, mysql, shadcn
- claim listing function (only for admin post, need to register as business to claim)

Backend
- dashboard (for each user role)
    - admin
        - Module
            - Business Listing - show listing all listing, can enable or disable, can create new listing
            - Job Posting - show listing all listing, can enable or disable, can create new posting
            - Service Posting - show listing all listing, can enable or disable, can create new services
            - Inquiry - show listing all listing
            - Promotion - show listing all listing, can enable or disable, can create new promotion
            - Subscription - show listing all listing, can enable or disable, can create new subscription plan
            - Ads Listing - show listing all listing, can enable or disable, can create new ads
            - Analytic - Bookmark, Inqury
            - Website SEO, logo and favicon setup, google analytic, google web console, sitemap, robots
            - Subscription Payment Setting - Stripe
            - Website Disclaimer Page
            - Website logs
    - business owner
        - Module
            - Business listing
                - company name, address, contact name, email, no.tel, map location, remark
                - business catalog / gallery
            - Job posting
                - vacancy posting - limited time etc
            - Inquiry list (public user -> business owner)
            - business profile, owner profile
            - Promotion - banner / picture, details, inquiry button
            - Subscription plan (show "Pricing 05")
                - Beginner Business Plan - 3 catalog / image with description / pdf
                - Intermediate Business Plan -  9 catalog / image with description / pdf
                - Professional Business Plan - 15 catalog / image with description / pdf
    - free lancer
        - Module
            - Service listing
                - service title, rate, category, remark
                - appointment form and submission to Whatsapp or email 
            - Inquiry list (public user -> free lancer)
            - Freelancer profile
            - Promotion - banner / picture, details, inquiry button
            - Subscription plan (show "Pricing 05")
                - Beginner Freelancer Plan - 3 catalog / image with description / pdf
                - Intermediate Freelancer Plan -  9 catalog / image with description / pdf
                - Professional Freelancer Plan - 15 catalog / image with description / pdf
    - advertiser
        - Module
            - Ads listing, submission
            - Inquiry list (public user -> advertiser)
            - advertiser profile
            - Promotion - banner / picture, details, inquiry button
            - Subscription plan (show "Pricing 05")
                - Beginner Advertiser Plan - 3 slot (1 month)
                - Intermediate Advertiser Plan -  3 slot (3 month)
                - Professional Advertiser Plan - 3 slot (6 month), featured listing badge               
    - public user
        - Module
            - Listing bookmark list
            - Inquiry list
            - user profile
            - Site Promotion (show ads from advertiser, freelancer and business owner promotion)

======================================================
MODULE DEVELOPMENT
======================================================
- Business Listing
- Travel Listing
- Job Listing / Posting
- Service Listing / Posting
- Event Listing
- Inquiry
- Advertisement Listing (Promotion / Banner / Adsense)
- Subscription
- Analytic
- Website Management
    - SEO, logo, favicon, sitemap, robots
    - Google Adsense, Admobs
    - PWA & Onesignal
    - Payment Setting - Stripe
    - Template
        - Invoice
    - API
        - Whatsapp API
        - Weather

======================================================
USER ROLE
======================================================
- admin
- business owner
- freelancer
- advertiser (only interested to advertise)
- public user