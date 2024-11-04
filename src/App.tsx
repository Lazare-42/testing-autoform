import React from "react";
import { z } from "zod";
import { AutoForm } from "./components/ui/auto-form";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

function App() {
  console.log("React Version:", React.version);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <AutoForm
        schema={userSchema}
        onSubmit={(data) => {
          console.log(data);
          alert("Form submitted! Check console for data");
        }}
      />
    </div>
  );
}

export default App;
