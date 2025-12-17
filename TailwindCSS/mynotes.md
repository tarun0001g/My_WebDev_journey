
to couninously apply realtime changes run this command:
 npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


Instead of typing that long command every time 👇
👉 Put it in package.json scripts

  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
    
  }

  Now every time, just run:
    npm run dev

  that's it!!

🔥 Much cleaner
🔥 Professional workflow
🔥 Used in real projects  


🚀 EVEN BETTER (Industry way):

If you later use Vite / React / Next.js:
Tailwind runs automatically
No manual watch command needed

--->  npm run dev
Vite handles live reload + Tailwind together.


md:block show the element
