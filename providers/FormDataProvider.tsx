import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the FormData type
type FormData = {
  name: string;
  'job-position': string;
  'linked-url': string;
  'linked-display-name': string;
  phone: string;
};

// Define the context type
type FormDataContextType = {
  formData: FormData;
  updateFormData: (newFormData: Partial<FormData>) => void;
};

// Create the context with a default value
const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    'job-position': '',
    'linked-url': '',
    'linked-display-name': '',
    phone: '',
  });

  const updateFormData = (newFormData: Partial<FormData>) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataProvider, useFormData };
