

export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick: () => void;
    children: React.ReactNode;
  }

  export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  export interface UserProps {
    userId: number;
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }