# Learnorama
The website is deployed on Vercel at https://learnorama.vercel.app/

This is a Portfolio project for ALX Engineering SE Program, developped with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started
To get started, first clone the repository, then inside your terminal run:

```bash
npm install
```

After that run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features:

- Browse and filter available courses
- Enable course purchases using Stripe payment integration
- Allow users to mark chapters as completed or uncompleted
- Calculate and display progress for each course
- Provide a student dashboard for tracking progress and managing courses
- Implement a teacher mode for creating new courses and chapters
- Support easy reordering of chapter positions through drag and drop
- Enable file uploads for thumbnails, attachments, and videos using UploadThing
- Process videos using Mux video processing service
- Utilize Mux HLS video player for video playback
- Include a rich text editor for chapter descriptions
- Implement authentication using Clerk
- Use Prisma as the ORM (Object-Relational Mapping) tool
- Store data in a PostgreSQL database using Neon

