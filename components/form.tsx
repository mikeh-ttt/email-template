import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormData } from '@/providers/FormDataProvider';

export function Form() {
  const { formData, updateFormData } = useFormData();

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
              onChange={(e) => updateFormData('name', e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='job-position'>Job Position</Label>
            <Input
              id='job-position'
              placeholder='Enter your job position'
              value={formData['job-position'] || ''}
              onChange={(e) => updateFormData('job-position', e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='linked-url'>LinkedIn URL</Label>
            <Input
              id='linked-url'
              placeholder='Enter your LinkedIn URL'
              value={formData['linked-url'] || ''}
              onChange={(e) => updateFormData('linked-url', e.target.value)}
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='linked-display-name'>LinkedIn Display Name</Label>
            <Input
              id='linked-display-name'
              placeholder='Enter your LinkedIn display name'
              value={formData['linked-display-name'] || ''}
              onChange={(e) =>
                updateFormData('linked-display-name', e.target.value)
              }
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              placeholder='Enter your phone number'
              value={formData.phone || ''}
              onChange={(e) => updateFormData('phone', e.target.value)}
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
