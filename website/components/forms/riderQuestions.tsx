"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserData } from "@/lib/database";
import { Calendar } from "../ui/calendar";
import { DatePicker } from "../ui/date-picker";
import { ChangeEvent } from "react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  isDriver: z.boolean(),
  phoneNumber: z.string(),
  // .regex(RegExp("/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im")),
  // email: z.string().email(),
  dateOfBirth: z.date(),
  onboarded: z.boolean(),
});

export function ProfileForm() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      // email: "",
      dateOfBirth: new Date(),
      isDriver: false,
      onboarded: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    fetch("/api/forms/signup", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status == 200) {
        signIn("jwt", { redirect: false });
        router.push(routes.ride);
      }
    });
  }

  return (
    <Form {...form}>
      <br />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Diocles" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Medicus" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="505-503-4455" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="505-503-4455" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>

                <DatePicker {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Get started!</Button>
      </form>
    </Form>
  );
}

export default function OnboardingForm() {
  return <ProfileForm />;
}
