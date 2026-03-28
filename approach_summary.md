# Vitto Internship Assignment: Approach & Summary

## 1. Summary of Approach
My approach focused on building an **AI-native ecosystem** rather than a traditional CRUD application. 
- **Frontend:** Built with React (Vite) and Tailwind CSS, focusing on an institutional, high-performance aesthetic using a Dark Navy (#1A1A2E) and Red (#D32F2F) palette.
- **Backend Architecture:** A hybrid database approach was used to optimize for different data needs. PostgreSQL (managed via Prisma) serves as the primary system of record for leads, while MongoDB handles ephemeral OTP sessions with an automated 10-minute TTL (Time-To-Live) index for security and performance.
- **Security:** Implemented JWT-based session handling and strict input validation via middleware.

## 2. Design Decisions
- **Typography:** Used 'Inter' to maintain a professional, technical tone suitable for BFSI (Banking, Financial Services, and Insurance) stakeholders.
- **UX:** Prioritized "Decisioning Depth." The UI clearly distinguishes between standard SLMs (Small Language Models) tailored for credit and generic LLMs like ChatGPT.
- **Logic:** The positioning statement "Traditional LOS is a transaction system; Vitto is a decisioning system" guided the feature layout, emphasizing data-driven automation over manual entry.

## 3. Challenges & Solutions
**The Challenge:** Orchestrating a dual-database setup (PostgreSQL + MongoDB) within a tight timeline while ensuring full RESTful compliance.
**The Solution:** I used Prisma as an ORM for PostgreSQL to ensure type-safe database interactions and Mongoose for MongoDB to leverage its native TTL capabilities for OTP management.

## 4. One Thing to Do Differently
Given more time, I would implement **Vector Embeddings** for the lead data to allow for semantic search across various loan book sizes and institution types, further leaning into the "AI-Native" promise of Vitto.

---
### Deliverable 5: Thought Leadership Article
(The "Retrofit AI vs AI-Native" article is included as a separate section in the final PDF submission).
