export interface ReviewRequest {
  business: string;
  tone: 'formal' | 'friendly' | 'neutral' | 'professional' | 'warm';
  review_text: string;
  language: 'en' | 'cs';
}

export interface ReviewResponse {
  reply: string;
}

export interface ApiError {
  message: string;
  status?: number;
}

const API_TIMEOUT = 30000; // 30 seconds

export const generateReply = async (request: ReviewRequest): Promise<ReviewResponse> => {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK || 'https://n8n.reingotravel.com/webhook/review-draft';
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new ApiError(`HTTP ${response.status}: ${response.statusText}`, response.status);
    }
    
    const data = await response.json();
    
    if (!data.reply) {
      throw new ApiError('Invalid response format: missing reply field');
    }
    
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new ApiError('Request timeout - please try again');
      }
      if (error.message.includes('Failed to fetch')) {
        throw new ApiError('Network error - please check your connection');
      }
    }
    
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError('An unexpected error occurred');
  }
};

export class ApiError extends Error {
  status?: number;
  
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}