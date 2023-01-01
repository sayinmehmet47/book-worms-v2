import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

type Props = {};

function VerifyYourMail({}: Props) {
  return (
    <Card className="h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Verify your email</h1>
        <p className="text-gray-500">
          We sent you an email with a link to verify your email address. Please
          check your inbox.
        </p>
        <Link href="/api/auth/logout">
          <span className="text-blue-600 hover:text-red-500">Signin</span>
        </Link>
      </div>
    </Card>
  );
}

export default VerifyYourMail;
