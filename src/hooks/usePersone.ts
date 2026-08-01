import { useEffect, useState } from "react";
import { supabase } from "../supaBaseClient";

type Persona = {
  id: number;
  nome: string;
};

export function usePersone() {
  const [persone, setPersone] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPersone() {
      const { data, error } = await supabase
        .from("persona")
        .select("id, nome")
        .order("id");

      if (error) {
        console.error("Errore nel caricare le persone:", error);
      } else {
        setPersone(data);
      }
      setLoading(false);
    }
    fetchPersone();
  }, []);

  return { persone, loading };
}
