import { getUserById } from "@/actions/user";
import { auth } from "@/auth";
import Profil from "@/components/modules/website/account/Profil";
import { Metadata } from "next";
import React from "react";

export default async function page() {
  const session = await auth();
  const user = await getUserById(session?.user?.id);

  return (
    <div className="p-4 h-screen">
      <div className="p-4 border-2 border-gray border-dashed rounded-lg">
        <div className="flex justify-center mb-4 rounded bg-gray-50">
          <Profil user={user} />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Profil - Account",
  description: "Become a full stack Nextjs with this project",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
