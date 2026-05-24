// 🔒 Güvenlik Fonksiyonları

// XSS Koruması - HTML karakterlerini temizle
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// SQL Injection Koruması - Tehlikeli karakterleri temizle
export function sanitizeSQL(input: string): string {
  if (!input) return '';
  
  // SQL injection karakterlerini temizle
  return input
    .replace(/['";\\]/g, '')
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '')
    .replace(/xp_/gi, '')
    .replace(/sp_/gi, '')
    .replace(/exec/gi, '')
    .replace(/execute/gi, '')
    .replace(/select/gi, '')
    .replace(/insert/gi, '')
    .replace(/update/gi, '')
    .replace(/delete/gi, '')
    .replace(/drop/gi, '')
    .replace(/create/gi, '')
    .replace(/alter/gi, '')
    .replace(/union/gi, '');
}

// URL Validation - Open Redirect Koruması
export function isValidURL(url: string): boolean {
  if (!url) return false;
  
  try {
    const urlObj = new URL(url);
    // Sadece http ve https protokollerine izin ver
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false;
    }
    // javascript:, data:, vbscript: gibi tehlikeli protokolleri engelle
    return true;
  } catch {
    return false;
  }
}

// Rate Limiting - Brute Force Koruması
interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  blocked: boolean;
  blockUntil?: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export function checkRateLimit(
  identifier: string,
  maxAttempts: number = 5,
  windowMs: number = 15 * 60 * 1000, // 15 dakika
  blockDurationMs: number = 30 * 60 * 1000 // 30 dakika
): { allowed: boolean; remainingAttempts: number; blockUntil?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Eğer bloklanmışsa
  if (entry?.blocked && entry.blockUntil) {
    if (now < entry.blockUntil) {
      return {
        allowed: false,
        remainingAttempts: 0,
        blockUntil: entry.blockUntil
      };
    } else {
      // Blok süresi dolmuş, sıfırla
      rateLimitStore.delete(identifier);
    }
  }

  // İlk deneme veya süre dolmuş
  if (!entry || now - entry.firstAttempt > windowMs) {
    rateLimitStore.set(identifier, {
      count: 1,
      firstAttempt: now,
      blocked: false
    });
    return { allowed: true, remainingAttempts: maxAttempts - 1 };
  }

  // Deneme sayısını artır
  entry.count++;

  // Limit aşıldı mı?
  if (entry.count > maxAttempts) {
    entry.blocked = true;
    entry.blockUntil = now + blockDurationMs;
    rateLimitStore.set(identifier, entry);
    
    return {
      allowed: false,
      remainingAttempts: 0,
      blockUntil: entry.blockUntil
    };
  }

  rateLimitStore.set(identifier, entry);
  return {
    allowed: true,
    remainingAttempts: maxAttempts - entry.count
  };
}

// Session Token Oluştur
export function generateSessionToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Session Token Doğrula
export function validateSessionToken(token: string): boolean {
  const storedToken = sessionStorage.getItem('admin_session_token');
  const tokenTimestamp = sessionStorage.getItem('admin_session_timestamp');
  
  if (!storedToken || !tokenTimestamp) return false;
  
  // Token eşleşiyor mu?
  if (token !== storedToken) return false;
  
  // Token süresi dolmuş mu? (1 saat)
  const now = Date.now();
  const timestamp = parseInt(tokenTimestamp);
  const oneHour = 60 * 60 * 1000;
  
  if (now - timestamp > oneHour) {
    // Token süresi dolmuş
    sessionStorage.removeItem('admin_session_token');
    sessionStorage.removeItem('admin_session_timestamp');
    sessionStorage.removeItem('admin_authenticated');
    return false;
  }
  
  return true;
}

// CSRF Token Oluştur
export function generateCSRFToken(): string {
  const token = generateSessionToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
}

// CSRF Token Doğrula
export function validateCSRFToken(token: string): boolean {
  const storedToken = sessionStorage.getItem('csrf_token');
  return token === storedToken;
}

// Input Validation - Genel
export function validateInput(input: string, maxLength: number = 1000): boolean {
  if (!input) return false;
  if (input.length > maxLength) return false;
  
  // Tehlikeli pattern'leri kontrol et
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick, onerror, vb.
    /data:text\/html/i,
    /vbscript:/i,
    /file:/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /eval\(/i,
    /expression\(/i,
    /import\s+/i,
    /document\./i,
    /window\./i,
    /\.innerHTML/i,
    /\.outerHTML/i
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(input));
}

// Email Validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Phone Validation
export function validatePhone(phone: string): boolean {
  // Türkiye telefon formatı
  const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Password Strength Check
export function checkPasswordStrength(password: string): {
  isStrong: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    feedback.push('En az 8 karakter olmalı');
  } else if (password.length < 12) {
    score += 1;
    feedback.push('12+ karakter daha güvenli');
  } else {
    score += 2;
  }
  
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('Küçük harf ekleyin');
  
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('Büyük harf ekleyin');
  
  if (/[0-9]/.test(password)) score += 1;
  else feedback.push('Rakam ekleyin');
  
  if (/[^a-zA-Z0-9]/.test(password)) score += 2;
  else feedback.push('Özel karakter ekleyin (!@#$%^&*)');
  
  // Yaygın şifreleri kontrol et
  const commonPasswords = ['password', '123456', 'qwerty', 'admin', '68riders'];
  if (commonPasswords.some(common => password.toLowerCase().includes(common))) {
    score = 0;
    feedback.push('Çok yaygın bir şifre kullanıyorsunuz!');
  }
  
  return {
    isStrong: score >= 5,
    score,
    feedback
  };
}

// Content Security Policy Headers
export function getSecurityHeaders(): Record<string, string> {
  return {
    'Content-Security-Policy': 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self'; " +
      "frame-ancestors 'none';",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
  };
}

// Log Security Event
export function logSecurityEvent(event: string, details: any) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    details,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
  };
  
  // Console'a log
  console.warn('🔒 Security Event:', logEntry);
  
  // LocalStorage'a kaydet (son 100 event)
  try {
    const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
    logs.unshift(logEntry);
    localStorage.setItem('security_logs', JSON.stringify(logs.slice(0, 100)));
  } catch (e) {
    console.error('Failed to log security event:', e);
  }
}

// Clear Security Logs
export function clearSecurityLogs() {
  localStorage.removeItem('security_logs');
}

// Get Security Logs
export function getSecurityLogs(): any[] {
  try {
    return JSON.parse(localStorage.getItem('security_logs') || '[]');
  } catch {
    return [];
  }
}
