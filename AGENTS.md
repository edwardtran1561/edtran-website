# Project Overview
- Edward Tran Portfolio, đây là một trang portfolio để tôi show cv cũng như là làm blog cá nhân
- NextJS, Notion

# Tech Stack
- Frontend: Next.js 16 App Router
- Backend: Next.js 
- Database: Notion
- Style: Tailwind CSS

# Coding Conventions
- Tên hàm: camelCase
- Tên component: PascalCase  
- Tên file: kebab-case
- Luôn dùng TypeScript strict mode
- Không xóa comment cũ khi sửa code

# Folder Structure
- /app        → Next.js pages
- /components → React components  
- /features → specific features
- /hooks → custom hooks
- /lib → Utillity, notion client, ....

# Important Rules
- Không dùng `any` trong TypeScript
- Mọi API route phải có error handling
- Component phải có loading + error state
- UI phải đồng nhất, có responsive và poly-fill
- Tối ưu SEO cơ bản cho từng page
