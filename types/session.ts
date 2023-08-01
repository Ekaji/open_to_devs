export interface Session {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role?: string | null | undefined;
    id?: string | null | undefined;
  } | null | undefined;
} 