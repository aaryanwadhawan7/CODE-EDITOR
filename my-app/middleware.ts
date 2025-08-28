import  NextAuth  from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  protectedRoutes,
  authRoutes,
} from './routes';

import authConfig from './app/auth.config';



