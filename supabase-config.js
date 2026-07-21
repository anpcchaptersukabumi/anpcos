// ============================================
// KONFIGURASI SUPABASE
// ============================================
// Ganti 2 nilai di bawah ini dengan punya project Supabase kamu sendiri.
// Cara dapetinnya ada di PANDUAN-SETUP.md langkah 2.

const SUPABASE_URL = "https://sqebcwfaundkayyomkog.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZWJjd2ZhdW5ka2F5eW9ta29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNjkwODYsImV4cCI6MjA5ODY0NTA4Nn0.PtsebGTLfj-slOBRe4U1ujGkEwjflJDTVkPtSiFxyf8";

// Jangan diubah di bawah sini
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
