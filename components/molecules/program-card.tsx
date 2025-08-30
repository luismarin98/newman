import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProgramCardProps {
  id: string
  title: string
  description: string
  duration: string
  modality: string
  category: string
}

export function ProgramCard({ id, title, description, duration, modality, category }: ProgramCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-sm text-primary font-medium mb-2">{category}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        <div className="flex justify-between text-sm">
          <span>
            <strong>Duración:</strong> {duration}
          </span>
          <span>
            <strong>Modalidad:</strong> {modality}
          </span>
        </div>
        <Link href={`/maestria/${id}`}>
          <Button className="w-full">Ver más información</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
