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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Navbar } from "../components/Navbar";

const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company_name: z.string().optional(),
  services: z.enum([
    "Mobile App Development",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  info: z.string().optional(),
  terms: z.boolean().default(false),
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 md:px-40 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-[#5bc0be] text-sm md:text-base">Contact</span>
          </div>
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
              Let's work together
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Tell us about your project and let's create something
              extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-800 space-y-6">
                <div className="pb-6 border-b border-zinc-800">
                  <p className="text-zinc-400">
                    One flexible agency for your entire company to share
                    knowledge, ship projects, and collaborate.
                  </p>
                </div>
                <div className="pb-6 border-b border-zinc-800">
                  <p className="text-zinc-400">
                    Enterprise features to securely manage user access and
                    security.
                  </p>
                </div>
                <div>
                  <p className="text-zinc-400">
                    Dedicated support to work with you on your setup and help
                    you build the best plan for your company.
                  </p>
                </div>
              </div>
            </div>

            <Form {...form}>
              {!submitted ? (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-800"
                >
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-400">
                            First name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0A0A0A] border-zinc-800 text-white h-12 focus:ring-1 focus:ring-[#5bc0be] focus:border-[#5bc0be]"
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
                          <FormLabel className="text-zinc-400">
                            Last name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0A0A0A] border-zinc-800 text-white h-12 focus:ring-1 focus:ring-[#5bc0be] focus:border-[#5bc0be]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-400">
                            Email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-[#0A0A0A] border-zinc-800 text-white h-12 focus:ring-1 focus:ring-[#5bc0be] focus:border-[#5bc0be]"
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
                          <FormLabel className="text-zinc-400">
                            Company name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0A0A0A] border-zinc-800 text-white h-12 focus:ring-1 focus:ring-[#5bc0be] focus:border-[#5bc0be]"
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
                          <FormLabel className="text-zinc-400">
                            Services you are interested in
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[#0A0A0A] border-zinc-800 text-white h-12">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0A0A0A] border-zinc-800">
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
                          <FormLabel className="text-zinc-400">
                            How can we help?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[#0A0A0A] border-zinc-800 text-white h-12">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0A0A0A] border-zinc-800">
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
                          <FormLabel className="text-zinc-400">
                            Anything else?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-[#0A0A0A] border-zinc-800 text-white min-h-[120px] focus:ring-1 focus:ring-[#5bc0be] focus:border-[#5bc0be]"
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
                              className="bg-[#0A0A0A] border-zinc-800 data-[state=checked]:bg-[#5bc0be]"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-zinc-400">
                              I agree to marketing communications related to
                              upcoming services.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-zinc-900 text-white transition-all border border-zinc-800 hover:border-zinc-700 disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                </form>
              ) : (
                <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-zinc-800 text-center">
                  <h2 className="text-2xl font-medium mb-4">
                    Thank you for your inquiry!
                  </h2>
                  <p className="text-zinc-400">
                    We've received your message and will be in touch shortly.
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
