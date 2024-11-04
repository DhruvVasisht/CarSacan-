/// <reference types="vite/client" />

declare global {
    type AddTaskFormValues = {
      name: string;
      dateOfBirth: string;
      gender: string;
      city: string;
    }
  
    type AddTaskErrors = {
      gender: boolean;
    }

   
  }