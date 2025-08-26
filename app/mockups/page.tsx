export default function Mockups() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Mockups</h1>
      <p className="text-muted-foreground mb-8">Quick links to mock forms and modules.</p>
      <div className="space-y-4">
        <a href="/mockups/listing" className="inline-flex items-center px-4 py-2 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
          Create Listing (Mock Form)
        </a>
      </div>
    </div>
  )
}
