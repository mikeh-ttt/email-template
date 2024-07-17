'use client';
import EmailSignature from '@/components/emailSignature';

import { Form } from '@/components/form';
import { Button } from '@/components/ui/button';
import { FormDataProvider } from '@/providers/FormDataProvider';
import Image from 'next/image';

export default function Home() {
  return (
    <FormDataProvider>
      <main className='flex min-h-screen flex-row items-center justify-between p-24 space-x-4 max-w-[1000px] mx-auto'>
        <Form />

        <div className='bg-white rounded-lg p-6 flex flex-col gap-4'>
          <div className='flex flex-col items-center justify-start'>
            <div className='max-w-[450px]'>
              <EmailSignature />
            </div>
          </div>
        </div>
      </main>
    </FormDataProvider>
  );
}
