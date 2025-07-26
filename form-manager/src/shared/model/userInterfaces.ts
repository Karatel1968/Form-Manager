export interface User {
  id: string;
  name: string;
  surName: string;
  email: string;
  fullName: string;
  birthDate?: string;
  telephone?: string;
  employment?: string;
}

export interface CreateUserDto {
  name: string;
  surName: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  email: string;
  birthDate?: string;
  telephone?: string;
  employment?: string;
  userAgreement?: boolean;
}

export interface UpdateUserDto {
  name?: string;
  surName?: string;
  fullName?: string;
  birthDate?: string;
  telephone?: string;
  employment?: string;
}