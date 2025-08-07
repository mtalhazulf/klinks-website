"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { companyInfo } from '@/data/company'

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .regex(/^[\d\s+-]*$/, { message: 'Please enter a valid phone number.' })
    .optional(),
  company: z.string().optional(),
  message: z
    .string()
    .min(20, { message: 'Please provide a few details (at least 20 characters).' })
    .max(1500, { message: 'Message cannot exceed 1500 characters.' }),
  honeypot: z.string().optional(), // Anti-spam honeypot field
})

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      honeypot: '',
    },
  })

  const { isSubmitting, isValid } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.honeypot) {
      // Bot detected
      return
    }

    setSubmissionError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      setSubmissionError(
        `Something went wrong. Please try again or email ${companyInfo.email}`,
      )
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center text-green-800">
        <CheckCircle className="mb-4 h-12 w-12" />
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p className="mt-2">We’ll get back to you within one business day.</p>
      </div>
    )
  }

  if (submissionError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-red-50 p-8 text-center text-red-800">
        <AlertCircle className="mb-4 h-12 w-12" />
        <h3 className="text-xl font-semibold">Submission Failed</h3>
        <p className="mt-2" aria-live="polite">{submissionError}</p>
        <Button onClick={() => setSubmissionError(null)} className="mt-6">Try Again</Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field for spam prevention */}
        <div className="hidden">
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Don't fill this out</FormLabel>
                <FormControl>
                  <Input {...field} tabIndex={-1} autoComplete="off" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="+92 300 1234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="ABC Corporation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  className="min-h-[120px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting || !isValid}>
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
            ) : (
              'Send Message'
            )}
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-primary">
              privacy policy
            </a>
            .
          </p>
        </div>
      </form>
    </Form>
  )
}
