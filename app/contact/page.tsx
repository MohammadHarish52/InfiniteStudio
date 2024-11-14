"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  job_title: z.string().optional(),
  company_name: z.string().optional(),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Development",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  info: z.string().optional(),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Development",
      info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="md:flex md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Contact our sales team
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Let's talk about how WebCraft can help your team work better.
            </p>
            <div className="bg-gray-800 rounded-xl p-6 space-y-6 hidden md:block">
              <div className="pb-6 border-b border-gray-700">
                <p className="text-gray-300">
                  One flexible agency for your entire company to share
                  knowledge, ship projects, and collaborate.
                </p>
              </div>
              <div className="pb-6 border-b border-gray-700">
                <p className="text-gray-300">
                  Enterprise features to securely manage user access and
                  security.
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  Dedicated support to work with you on your setup and help you
                  build the best plan for your company.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Form {...form}>
              {!submitted ? (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 bg-gray-900 rounded-2xl p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">
                            First name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">
                            Last name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">
                          Company name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">
                          Services you are interested in
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="Mobile App Development">
                              Mobile App Development
                            </SelectItem>
                            <SelectItem value="Social Media Marketing">
                              Social Media Marketing
                            </SelectItem>
                            <SelectItem value="UI/UX Design">
                              UI/UX Design
                            </SelectItem>
                            <SelectItem value="Branding">Branding</SelectItem>
                            <SelectItem value="Website Development">
                              Website Development
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="help"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">
                          How can we help?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="Evaluate Bird for my company">
                              Evaluate for my company
                            </SelectItem>
                            <SelectItem value="Learn More">
                              Learn More
                            </SelectItem>
                            <SelectItem value="Get a Quote">
                              Get a Quote
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="info"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">
                          Anything else?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="bg-gray-800 border-gray-700 text-white h-24"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="bg-gray-800 border-gray-700 text-blue-500"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-300">
                            I agree to marketing communications related to
                            upcoming services.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium py-2 px-4 rounded-md hover:from-blue-600 hover:to-emerald-600 transition-all duration-200"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </form>
              ) : (
                <div className="bg-gray-900 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Thank you for your inquiry!
                  </h2>
                  <p className="text-gray-300">
                    We've received your message and will be contacting you via
                    email shortly.
                  </p>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
