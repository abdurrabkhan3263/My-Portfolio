import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
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
import Button from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schema/form.schama";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Textarea } from "../ui/textarea";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactHeading = useRef<HTMLHeadingElement>(null);
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  useGSAP(() => {
    gsap.to(contactHeading.current, {
      translateX: 0,
      opacity: 1,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: contactHeading.current,
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
  }, []);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen text-white">
      <div className="overflow-hidden">
        <h1
          className="-translate-x-full text-5xl font-bold"
          ref={contactHeading}
        >
          Contact Us
        </h1>
      </div>
      <div className="mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="text-gray-800"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter your full name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="text-gray-800"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please enter your email address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="text-gray-800"
                      placeholder="Enter message"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter your message</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
