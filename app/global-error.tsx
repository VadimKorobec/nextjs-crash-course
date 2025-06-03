"use client";

interface GlobalErrorProps {
  error: Error & { digest?: string };
}

const GlobalError = ({ error }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
};

export default GlobalError;
