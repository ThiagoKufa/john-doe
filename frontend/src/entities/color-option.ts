import { z } from "zod";
export const ColorOption = z.object({
  value: z.string(),
  background: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  textColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  nome: z.string(),
});

export type ColorOptionData = z.infer<typeof ColorOption>;
