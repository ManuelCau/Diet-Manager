import { Button } from "../components/UI/Button";

interface Persona {
  id: number;
  nome: string;
}

interface PersonSelectorProps {
  selectedId: number;
  onSelect: (id: number) => void;
  persone: Persona[];
}

export function SelectPersona({
  selectedId,
  onSelect,
  persone,
}: PersonSelectorProps) {
  return (
    <div className="flex gap-2 mb-5">
      {persone.map((persona) => (
        <Button
          key={persona.id}
          variant={persona.id === selectedId ? "primary" : "default"}
          onClick={() => onSelect(persona.id)}
        >
          {persona.nome}
        </Button>
      ))}
    </div>
  );
}
