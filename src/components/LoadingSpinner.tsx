export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
