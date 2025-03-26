import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-center">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Email Classifier</h1>
            <div className="flex space-x-6">
              <a href="/upload" className="text-gray-600 hover:text-blue-500 font-medium">
                Upload CSV
              </a>
              <a href="/dashboard" className="text-gray-600 hover:text-blue-500 font-medium">
                Dashboard
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
