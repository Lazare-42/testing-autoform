import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

export function AutoForm<T extends z.ZodObject<any>>({
  schema,
  onSubmit,
}: {
  schema: T;
  onSubmit: (values: z.infer<T>) => void;
}) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  const fields = Object.keys(schema.shape);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field}
            render={({ field: fieldProps }) => (
              <FormItem>
                <FormLabel className="capitalize">{field}</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type={field === "age" ? "number" : "text"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
