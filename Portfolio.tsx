//
// Main container with consistent height and overflow
const Portfolio: React.FC = () => {
  return (
    //
    // Wrapper with fixed height
    <div className="min-h-screen bg-gray-50 py-12">
      //
      // Tab container with consistent height
      <div className="container mx-auto px-4">
        <Tabs defaultValue="web" className="w-full">
          //
          // Tab list styling
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="web">Web Projects</TabsTrigger>
            <TabsTrigger value="android">Android Projects</TabsTrigger>
          </TabsList>

          //
          // Content panels with consistent height and overflow
          <TabsContent 
            value="web" 
            className="h-[calc(100vh-200px)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {web_projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent 
            value="android"
            className="h-[calc(100vh-200px)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {android_projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}; 