
Routing in React is used to navigate between different pages or components without reloading the page.

->Navigate = to go from one location/page to another

React applications are Single Page Applications (SPA),
 meaning:
- Only one HTML page loads
- Content changes dynamically
- Routing decides which component to show based on the URL

📦 Installation 
npm install react-router-dom (run this command in terminal in your projet)

Wraps the entire app and enables routing.
import { BrowserRouter } from "react-router-dom";

🔹 What is NavLink in React Router?
NavLink is just like Link, but with extra power 👉
it knows which route is currently active and lets you style the active link automatically.
->NavLink is used for navigation and to apply active styles to the current route.

Link cannot tell which page is active but Navlink Automatically adds active state to current route

Explored this all :
useParams Hook
useNavigate Hook 
Nested Routing 