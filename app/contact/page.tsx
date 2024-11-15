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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Contact our sales team
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's talk about how WebCraft can help your team work better.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-[#0A1019] rounded-2xl p-8 space-y-6 border border-gray-800">
                <div className="pb-6 border-b border-gray-800">
                  <p className="text-gray-300">
                    One flexible agency for your entire company to share
                    knowledge, ship projects, and collaborate.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-800">
                  <p className="text-gray-300">
                    Enterprise features to securely manage user access and
                    security.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300">
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
                  className="bg-[#0A1019] rounded-2xl p-8 border border-gray-800"
                >
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">
                            First name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0F1729] border-gray-800 text-white h-12 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                          <FormLabel className="text-gray-400">
                            Last name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0F1729] border-gray-800 text-white h-12 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                          <FormLabel className="text-gray-400">
                            Email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-[#0F1729] border-gray-800 text-white h-12 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                          <FormLabel className="text-gray-400">
                            Company name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#0F1729] border-gray-800 text-white h-12 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                          <FormLabel className="text-gray-400">
                            Services you are interested in
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[#0F1729] border-gray-800 text-white h-12">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0F1729] border-gray-800">
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
                          <FormLabel className="text-gray-400">
                            How can we help?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[#0F1729] border-gray-800 text-white h-12">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0F1729] border-gray-800">
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
                          <FormLabel className="text-gray-400">
                            Anything else?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-[#0F1729] border-gray-800 text-white min-h-[120px] focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                              className="bg-[#0F1729] border-gray-800 data-[state=checked]:bg-blue-500"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-400">
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
                      className="w-full h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>

                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>
                </form>
              ) : (
                <div className="bg-[#0A1019] rounded-2xl p-8 text-center border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Thank you for your inquiry!
                  </h2>
                  <p className="text-gray-400">
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
