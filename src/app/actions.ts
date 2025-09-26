'use server';

import { z } from 'zod';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would save this to a database like Firestore.
  console.log('New contact form submission:', validatedFields.data);

  return { message: 'Your message has been sent successfully!' };
}

export async function getAIGeneratedDescription(
  projectDetails: {
    title: string;
    description: string;
    technologies: string;
    keyFeatures: string;
  }
) {
  try {
    const result = await generateProjectDescription(projectDetails);
    return { success: true, description: result.generatedDescription };
  } catch (error) {
    console.error('AI description generation failed:', error);
    return { success: false, error: 'Failed to generate description.' };
  }
}
