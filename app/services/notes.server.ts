import { json } from "react-router";

import { createSupabaseServerClient } from "~/lib/supabase.server";

interface FetchAllNotesOptions {
  request: Request;
}

export const fetchAllNotes = async ({ request }: FetchAllNotesOptions) => {
  const { supabase } = createSupabaseServerClient({ request });

  const { data: notes } = await supabase.from("notes").select("*");

  return json({ notes });
};

interface FetchNoteByIdOptions {
  request: Request;
  id: string;
}

export const fetchNoteById = async ({ request, id }: FetchNoteByIdOptions) => {
  const { supabase } = createSupabaseServerClient({ request });

  const { data: note } = await supabase.from("notes").select("*").eq("id", id);

  return json({ note });
};

interface CreateNoteOptions {
  request: Request;
  data: { title: string; content: string };
}

export const createNote = async ({ request, data }: CreateNoteOptions) => {
  const { supabase } = createSupabaseServerClient({ request });

  const { data: note, error } = await supabase
    .from("notes")
    .insert({ ...data });

  if (error) {
    return json({ errors: { server: "Error creating note" } });
  }

  return json({ note });
};

interface UpdateNoteOptions {
  request: Request;
  data: { title?: string; content?: string };
}

export const updateNote = async ({ request, data }: UpdateNoteOptions) => {
  const { supabase } = createSupabaseServerClient({ request });

  const { data: updatedNote, error } = await supabase
    .from("notes")
    .update({ ...data });

  if (error) {
    return json({ errors: { server: "Error creating note" } });
  }

  return json({ note: updatedNote });
};

interface DeleteNoteOptions {
  request: Request;
  id: string;
}

export const deleteNote = async ({ request, id }: DeleteNoteOptions) => {
  const { supabase } = createSupabaseServerClient({ request });

  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    return json({ success: false, errors: { server: "Error creating note" } });
  }

  return json({ success: true });
};
