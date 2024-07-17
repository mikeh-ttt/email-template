import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormData } from '@/providers/FormDataProvider';

export function Form() {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    updateFormData(id as keyof FormData, value);
  };

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Email signature generator</CardTitle>
        <CardDescription>
          Fill out the form below to update email signature template
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='Enter your name'
              value={formData.name || ''}
              onChange={handleChange}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='job-position'>Job Position</Label>
            <Input
              id='job-position'
              placeholder='Enter your job position'
              value={formData['job-position'] || ''}
              onChange={handleChange}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='linked-url'>LinkedIn URL</Label>
            <Input
              id='linked-url'
              placeholder='Enter your LinkedIn URL'
              value={formData['linked-url'] || ''}
              onChange={handleChange}
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='linked-display-name'>LinkedIn Display Name</Label>
            <Input
              id='linked-display-name'
              placeholder='Enter your LinkedIn display name'
              value={formData['linked-display-name'] || ''}
              onChange={handleChange}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              placeholder='Enter your phone number'
              value={formData.phone || ''}
              onChange={handleChange}
            />
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className='flex justify-end'>
        <Button type='submit'>Update Profile</Button>
      </CardFooter> */}
    </Card>
  );
}
