import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";
// import { signOut } from "@/lib/action/auth.action";


const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 shadow-md">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100 text-lg font-semibold">PrepWise</h2>
        </Link>

        {/* Logout Button */}
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;
