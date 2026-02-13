'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignUp = async () => {
const supabase = createClient();
const {error} = await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
   redirectTo: "http://localhost:3000/auth/callback", 
  }
});
if(error){
  console.log(error);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow dark:bg-purple-700"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000 dark:bg-indigo-700"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000 dark:bg-pink-700"></div>
      </div>

      {/* Main login card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header section with gradient */}
          <div className="gradient-bg-primary p-8 text-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Smart Bookmark</h1>
            <p className="text-indigo-100">Save and organize your favorite links</p>
          </div>

          {/* Login form section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 text-center">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">Sign in to access your bookmarks</p>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="w-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Signing in...</span>
                </div>
              ) : (
                <>
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white">
                    Continue with Google
                  </span>
                </>
              )}
            </button>

            {/* Footer text */}
    
          </div>
        </div>

        {/* Additional feature highlights */}

      </div>
    </div>
  );
}
