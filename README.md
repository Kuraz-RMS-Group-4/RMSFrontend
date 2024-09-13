Follow these steps to set up your local development environment for this project.

1. Clone the Repository
Start by cloning the repository to your local machine:

bash
git clone https://github.com/Kuraz-RMS-Group-4/RMSFrontend.git
cd RMSFrontend
2. Install Node.js and npm
Ensure you have Node.js and npm (Node Package Manager) installed. You can download Node.js from nodejs.org. npm comes bundled with Node.js.

To verify the installation, run:

bash
node -v
npm -v

3. Install Project Dependencies
Navigate to the project directory and install the necessary dependencies using npm:

bash
npm install
This command will read the package.json file and install all the required dependencies for the project.


4. Configure Tailwind CSS
Ensure Tailwind CSS is correctly set up. If you encounter any issues, verify the following:

tailwind.config.js file includes the correct paths in the content property:

js
Copy code
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
postcss.config.js is properly configured:

js
Copy code
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
6. Start the Development Server
Run the development server to preview the application:

bash
Copy code
npm run dev
Open your web browser and navigate to http://localhost:3000 (or the port specified in the output) to see the application.

7. Create a Production Build
When you are ready to create a production-ready build of the application, use:

bash
Copy code
npm run build
The build files will be generated in the dist/ directory, ready for deployment.

8. Running Tests
If the project includes tests, you can run them with:

bash
Copy code
npm test
Check the test configuration in package.json or the test directory for specific instructions.

10. Updating Dependencies
Keep your dependencies up to date. To check for outdated packages, use:

bash
Copy code
npm outdated
Update them with:

bash
Copy code
npm update
Troubleshooting
Ensure all dependencies are installed: If you encounter issues with missing packages, re-run npm install.

