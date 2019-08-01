import { User } from './user';

export interface UsersPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}


