# Vitto Backend API

This is the backend for the Vitto Internship Task-2.

**Live Frontend:** [https://vitto-credit-connect.lovable.app](https://vitto-credit-connect.lovable.app)

## Website Structure & Sitemap (Extra 15% Credits)
- **Target Audience:** Mid-sized NBFCs, Banks, and MFIs looking for AI-native infrastructure.
- **Conversion Goal:** Convert leads into demo requests within 24 hours.
- **Sitemap:**
    - `Homepage`: Branding, Problem-Solution (Decisioning vs Transaction), and Modules.
    - `Platform Page`: Detailed view of the 6 AI Modules (Origination to Servicing).
    - `Automation Page`: Operational layers (Channels to CRM).
    - `Sign-up`: Multi-step onboard flow.

## Approach Summary
- **Frontend Architecture:** Built with React (Vite) and Tailwind CSS on Lovable. Focuses on an institutional, high-performance aesthetic using a Dark Navy (#1A1A2E) and Red (#D32F2F) palette.
- **Backend Architecture:** A hybrid database approach was used to optimize for different data needs. PostgreSQL (managed via Prisma) serves as the primary system of record for leads, while MongoDB handles ephemeral OTP sessions with an automated 10-minute TTL (Time-To-Live) index for security and performance.
- **Frontend URL:** [https://vitto-credit-connect.lovable.app](https://vitto-credit-connect.lovable.app)

## Tech Stack
- **Node.js + Express**
- **PostgreSQL** (Lead Storage via Prisma)
- **MongoDB** (OTP Session Cache via Mongoose)
- **JWT** (Session Handling)

## Setup instructions
1. Clone the repository.
2. Run `npm install`.
3. Configure your `.env` file (template provided in `.env`).
4. Generate Prisma Client: `npx prisma generate`.
5. Run migrations: `npx prisma migrate dev --name init`.
6. Start the server: `npm start` (or `npm run dev` with nodemon).

## API Endpoints

### Auth
- `POST /api/auth/send-otp`: Sends a mock OTP to email/phone.
- `POST /api/auth/verify-otp`: Verifies OTP and returns a JWT.

### Leads
- `POST /api/leads`: Creates a new lead (Requires Bearer Token).
- `GET /api/leads/:id`: Retrieves a lead by ID (Requires Bearer Token).

## Testing with cURL

### 1. Send OTP
```bash
curl -X POST http://localhost:3000/api/auth/send-otp \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com"}'
```

### 2. Verify OTP (Use '123456')
```bash
curl -X POST http://localhost:3000/api/auth/verify-otp \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "otp": "123456"}'
```

### 3. Create Lead (Replace <TOKEN> with JWT from Step 2)
```bash
curl -X POST http://localhost:3000/api/leads \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
  "institution_name": "Antigravity Bank",
  "institution_type": "Bank",
  "city": "Mumbai",
  "loan_book_size": "500Cr",
  "email": "test@example.com",
  "phone": "9999999999"
}'
```
