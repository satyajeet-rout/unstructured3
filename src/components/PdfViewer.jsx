const SimplePDFViewer = () => {
  return (
    <div className="h-screen w-1/2 bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Preview PDF</h2>
        </div>
        {/* <div className="h-[calc(100%-60px)]"> */}
        <div className="h-full">
          <iframe
            src="https://emerald-dodi-5.tiiny.site/"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimplePDFViewer;