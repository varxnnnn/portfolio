# Portfolio Website with Admin Panel

A modern, responsive portfolio website built with Next.js, featuring smooth scrolling animations and a comprehensive admin panel for content management.

## Features

### Portfolio Website
- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Optimized scrolling with overlapping card animations
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Performance Optimized**: Uses requestAnimationFrame for smooth scrolling

### Admin Panel
- **Secure Authentication**: JWT-based authentication system
- **Content Management**: Add, edit, and delete portfolio sections
- **MongoDB Integration**: Persistent data storage
- **Real-time Updates**: Instant content updates across the site

## Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- npm or pnpm

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Create a MongoDB Atlas cluster
   - Get your connection string
   - Update the connection string in `lib/mongodb.ts`

4. **Initialize the database**
   ```bash
   npm run init-db
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## Usage

### Accessing the Admin Panel

1. **Navigate to the login page**
   - Click on the "VK" logo in the navigation bar
   - Or go directly to `/login`

2. **Login credentials**
   - User ID: `615768`
   - Password: `Varun@540`

3. **Admin Dashboard**
   - View all portfolio sections
   - Select sections to edit
   - Add new sections
   - Delete existing sections

### Managing Portfolio Content

#### Adding a New Section
1. Click "Add New Section" in the admin dashboard
2. Select the section type (hero, skills, projects, etc.)
3. Enter a title
4. Provide JSON content (templates are provided)
5. Click "Create Section"

#### Editing a Section
1. Select a section from the sidebar
2. Click "Edit Section"
3. Modify the title and content
4. Click "Save Changes"

#### Deleting a Section
1. Select a section from the sidebar
2. Click "Delete" button
3. Confirm the deletion

### Content Structure

Each section follows a specific JSON structure:

#### Hero Section
```json
{
  "name": "Varun Kumar",
  "title": "Full Stack Developer",
  "description": "Your description here",
  "image": "/images/profile.png"
}
```

#### Skills Section
```json
{
  "programming": ["Java", "Python", "JavaScript"],
  "frameworks": ["Flutter", "React", "Node.js"],
  "backend": ["MongoDB", "Express", "Firebase"],
  "tools": ["Git", "Figma", "Docker"]
}
```

#### Projects Section
```json
{
  "items": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Project description",
      "technologies": ["Tech1", "Tech2"],
      "githubUrl": "https://github.com/username/project"
    }
  ]
}
```

## Technical Details

### Performance Optimizations

#### Smooth Scrolling
- Uses `requestAnimationFrame` for scroll event handling
- Implements scroll throttling to prevent lag
- Passive event listeners for better performance

#### Animation System
- CSS transforms for hardware acceleration
- `will-change` property for optimized animations
- Efficient z-index management for card stacking

### Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization

### Database Schema

#### User Model
```typescript
interface User {
  userId: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Portfolio Section Model
```typescript
interface PortfolioSection {
  sectionName: string;
  title: string;
  content: any;
  lastUpdated: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Portfolio Sections
- `GET /api/sections` - Get all sections
- `POST /api/sections` - Create new section
- `GET /api/sections/[id]` - Get specific section
- `PUT /api/sections/[id]` - Update section
- `DELETE /api/sections/[id]` - Delete section

## Customization

### Styling
- Modify `tailwind.config.ts` for theme changes
- Update component styles in the `components/` directory
- Customize animations in `components/overlapping-cards.tsx`

### Content
- Add new section types in the admin panel
- Modify content templates in `app/admin/add/page.tsx`
- Update default data in `scripts/init-db.js`

## Deployment

### Environment Variables
Create a `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Build and Deploy
```bash
npm run build
npm start
```

## Troubleshooting

### Common Issues

1. **Scrolling Lag**
   - Ensure you're using the latest version
   - Check browser performance tools
   - Verify CSS transforms are hardware accelerated

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network connectivity
   - Ensure MongoDB Atlas IP whitelist includes your IP

3. **Authentication Problems**
   - Clear browser localStorage
   - Verify JWT secret is consistent
   - Check token expiration

### Performance Tips

- Use production build for testing
- Monitor scroll performance in DevTools
- Optimize images and assets
- Consider CDN for static content

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Contact: varunkumar615768@gmail.com
