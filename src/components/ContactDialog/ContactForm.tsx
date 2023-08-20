'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../UI/Form';
import { Input } from '../UI/Input';
import { TextArea } from '../UI/TextArea';
import Button from '../UI/Button';
import Alert from './Alert';
import contactFormHandler from '../../pages/api/contactFormHandler';
import { cn } from '../../lib/utils';

interface FormResponseProps {
  type?: string;
  text?: string;
}

interface AlertDetailsProps {
  title: string;
  description: string;
}

const formSchema = z.object({
  email: z.string().email('Invalid email format').min(5, 'Email must be at least 5 characters'),
  message: z.string().min(1, 'Please enter a message'),
});

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertDetails, setAlertDetails] = useState({
    title: '',
    description: '',
  } as AlertDetailsProps);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      let tempRes = await contactFormHandler(values);

      const res: FormResponseProps = tempRes !== undefined ? tempRes : {};

      if (res && res?.type === 'success') {
        // Success alert and reset
        setAlertDetails({
          title: 'Success',
          description: 'Your message was delivered successfully. I will respond to you as soon as I can.',
        });
        setIsAlertOpen(true);
        form.reset();
      } else {
        // Error alert
        setAlertDetails({
          title: 'Error',
          description: res.text ? res.text : 'There was an issue with your submission. Please try again.',
        });
        setIsAlertOpen(true);
      }

      setIsLoading(false);
    } catch {
      // Error alert
      setAlertDetails({
        title: 'Error',
        description: 'There was an issue with your submission. Please try again.',
      });
      setIsAlertOpen(true);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Message</FormLabel>
                <FormControl>
                  <TextArea placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={cn(
              'font-bold text-white mt-5 mx-auto sm:mx-0 sm:ml-0 sm:mr-auto',
              isLoading ? 'bg-primary opacity-50' : 'bg-primary hover:bg-primary-600',
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div
                  className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
                <span className="ml-2">Processing...</span>
              </>
            ) : (
              'Send'
            )}
          </Button>
        </form>
      </Form>
      <Alert
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        title={alertDetails?.title}
        description={alertDetails.description}
      />
    </>
  );
};

export default ContactForm;
