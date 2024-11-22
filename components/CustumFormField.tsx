"use client";

import React from "react";
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
import { FormFieldType } from "./forms/PatientForm";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: String;
  placeholder?: String;
  iconSrc?: String;
  iconAlt?: String;
  disabled?: String;
  dataFormat?: String;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const CustumFormField = ({ control, fieldType, name, label }: CustomProps) => {
  return (
    <div>
      {/* Username Field */}
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldType !== FormFieldType.CHECKBOX &&
              label(<FormLabel>{label}</FormLabel>)}
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustumFormField;
