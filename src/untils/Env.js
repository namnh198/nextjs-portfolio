// Configuration for generate
export const NODE_ENV = process.env.NODE_ENV || "production";
export const BASE_URL = process.env.BASE_URL || "https://namnh198.com";

// Configuration for notion
export const NOTION_TOKEN = process.env.NOTION_TOKEN || "";
export const MENU_DB_ID = process.env.MENU_DB_ID || "";
export const SETTING_DB_ID = process.env.SETTING_DB_ID || "";
export const PROJECT_DB_ID = process.env.PROJECT_DB_ID || "";
export const NOTE_DB_ID = process.env.NOTE_DB_ID || "";

// Configuration for emailJS
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
