'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState, getComments, postComment } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader2, Mail, MessageSquare, Send, Share2, User, Image as ImageIcon, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-gradient-to-r from-primary to-accent text-white">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

function CommentSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessageSquare className="mr-2 h-4 w-4" />}
      Post Comment
    </Button>
  );
}

function Comments() {
  const [comments, setComments] = useState<Awaited<ReturnType<typeof getComments>>>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    getComments().then(setComments);
  }, []);

  async function action(formData: FormData) {
    await postComment(formData);
    // In a real app with a DB, you'd refetch comments.
    // For now, just optimistically update UI.
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    setComments(prev => [...prev, { name, message, avatarUrl: `https://i.pravatar.cc/40?u=${Math.random()}` }]);
    formRef.current?.reset();
  }

  return (
    <Card className="glass-card flex-1 min-w-[350px] w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><MessageCircle /> Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} id="comment-form" action={action} className="space-y-4 mb-6">
            <div className='space-y-2'>
                <Label htmlFor='comment-name'>Name *</Label>
                <Input id='comment-name' name='name' placeholder='Enter your name' required />
            </div>
             <div className='space-y-2'>
                <Label htmlFor='comment-message'>Message *</Label>
                <Textarea id='comment-message' name='message' placeholder='Write your message here...' required rows={3} />
            </div>
            <div className='space-y-2'>
                <Label htmlFor='comment-photo'>Profile Photo (optional)</Label>
                <Button variant="outline" className="w-full justify-start text-left font-normal" asChild>
                    <label htmlFor='photo-upload'>
                        <ImageIcon className="mr-2" /> Choose Profile Photo
                    </label>
                </Button>
                <input id="photo-upload" name="photo" type="file" className="sr-only" />
                <p className='text-xs text-muted-foreground'>Max file size: 5MB</p>
            </div>
            <CommentSubmitButton />
        </form>
        <ScrollArea className="h-48 pr-4">
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatarUrl} />
                  <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{comment.name}</p>
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="text-muted-foreground text-sm">{comment.message}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: '' };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Card className="glass-card flex-1 min-w-[350px] w-full">
            <CardHeader>
               <div className="flex justify-between items-center">
                    <CardTitle className="text-3xl font-bold font-headline">Get in Touch</CardTitle>
                    <Button variant="ghost" size="icon"><Share2 /></Button>
                </div>
              <CardDescription>Have something to discuss? Send me a message and let's talk.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" name="name" placeholder="Your Name" aria-required="true" className="pl-10" />
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" name="email" type="email" placeholder="Your Email" aria-required="true" className="pl-10"/>
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" />
                  <Textarea id="message" name="message" placeholder="Your Message" rows={5} aria-required="true" className="pl-10 pt-2" />
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          
          <Comments />

        </div>
      </div>
    </section>
  );
}
