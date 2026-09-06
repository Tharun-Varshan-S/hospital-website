/**
 * Security Utilities
 * 
 * This module provides basic utilities to sanitize and validate input,
 * preventing XSS (Cross-Site Scripting) and preparing for SQL Injection 
 * protection once a database is connected.
 */

/**
 * Strips HTML tags from a string to prevent basic XSS attacks.
 * @param input The raw user input string
 * @returns The sanitized string
 */
export function stripHtml(input: string | null | undefined): string {
  if (!input) return "";
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Validates if an email address is in a standard format.
 * @param email The email address to validate
 * @returns boolean indicating validity
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes input intended for database storage (e.g., Prisma, Supabase, or raw SQL).
 * While modern ORMs handle SQL injection naturally via prepared statements,
 * it is still crucial to sanitize XSS out of text fields.
 * 
 * @param input The raw user input
 * @returns A safe string ready for the ORM/database
 */
export function sanitizeForDb(input: string): string {
  const noHtml = stripHtml(input);
  // Add more aggressive sanitization here if storing plain text that will be rendered later
  return noHtml.trim();
}

/**
 * Example handler wrapper for future API routes to ensure secure headers
 * and rate limiting are checked before processing the request.
 */
export function createSecureHandler(handler: Function) {
  return async (req: Request, ...args: any[]) => {
    // 1. Verify Origin/Referer if necessary
    // 2. Implement Rate Limiting here
    // 3. Process actual request
    return await handler(req, ...args);
  };
}
