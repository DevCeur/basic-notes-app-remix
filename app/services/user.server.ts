import { json } from "@remix-run/node";

import { createSupabaseServerClient } from "~/lib/supabase.server";

interface CreateUserOptions {
  request: Request;
  data: { email: string; password: string };
}

export const createUser = async ({ request, data }: CreateUserOptions) => {
  const { supabase, headers } = createSupabaseServerClient({ request });

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({ ...data });

  if (error) {
    if (error.code === "user_already_exists") {
      return json({
        errors: { email: { _errors: ["This email is already registered"] } },
      });
    }

    return json({ errors: { server: { _errors: ["Error creating user"] } } });
  }

  return json({ user }, { headers });
};

interface SignInUserOptions {
  request: Request;
  data: { email: string; password: string };
}

export const signInUser = async ({ request, data }: SignInUserOptions) => {
  const { supabase, headers } = createSupabaseServerClient({ request });

  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({ ...data });

  if (error) {
    console.error(error);

    return json(
      { errors: { server: "Error login user, check console" } },
      { headers }
    );
  }

  return json({ user }, { headers });
};

interface SignOutUserOptions {
  request: Request;
}

export const signOutUser = async ({ request }: SignOutUserOptions) => {
  const { supabase, headers } = createSupabaseServerClient({ request });

  await supabase.auth.signOut();

  return json({ success: true }, { headers });
};
