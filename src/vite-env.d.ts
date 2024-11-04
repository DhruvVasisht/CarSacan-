/// <reference types="vite/client" />

declare global {
    type AddTaskFormValues = {
      name: string;
      dateOfBirth: string;
      gender: string;
      city: string;
    }
  
    interface AddTaskErrors {
      gender: boolean;
    }
  }