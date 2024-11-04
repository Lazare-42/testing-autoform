import { AutoForm } from "@autoform/mui";
import { ZodProvider } from "@autoform/zod";
import React from "react";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

const schemaProvider = new ZodProvider(userSchema);

function App() {
  console.log("React Version:", React.version);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <AutoForm
        schema={schemaProvider}
        onSubmit={(data) => {
          console.log(data);
          alert("Form submitted! Check console for data");
        }}
        withSubmit
      />
    </div>
  );
}

export default App;
