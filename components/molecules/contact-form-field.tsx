import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactFormFieldProps {
  id: string
  label: string
  placeholder: string
  type?: string
}

export function ContactFormField({ id, label, placeholder, type = "text" }: ContactFormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}
