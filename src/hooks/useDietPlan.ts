import { useEffect, useState } from "react";
import { supabase } from "../supaBaseClient";

type RigaPiano = {
  giorno_id: number;
  giorno: string;
  persona: string;
  ordine_pasto: number;
  tipo_pasto: string;
  ora_inizio: string;
  ora_fine: string;
  alimento: string | null;
  quantita: number | null;
  unita_misura: string | null;
  note: string | null;
};

export function useDietPlan(personaNome: string, giornoId: number) {
  const [righe, setRighe] = useState<RigaPiano[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPiano() {
      setLoading(true);
      const { data, error } = await supabase
        .from("v_piano_alimentare")
        .select("*")
        .eq("persona", personaNome)
        .eq("giorno_id", giornoId);

      if (error) {
        setError(error.message);
      } else {
        setRighe(data as RigaPiano[]);
      }
      setLoading(false);
    }

    fetchPiano();
  }, [personaNome, giornoId]);

  return { righe, loading, error };
}
