export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
