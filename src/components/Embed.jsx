import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, X, ExternalLink } from 'lucide-react';

const EmbedPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const STREAMLIT_URL = "https://hdfcfuturance-s9epygfkujjaznrxplgjk2.streamlit.app/";

  const handleClose = () => {
    window.location.href = '/';
  };

  const handleOpenNewTab = () => {
    window.open(STREAMLIT_URL, '_blank', 'noopener,noreferrer');
  };

  // Clean up when component unmounts
  React.useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <h2 className="text-lg font-semibold">Streamlit Application</h2>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleOpenNewTab}
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Open in New Tab
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Close
          </Button>
        </div>
      </div>

      {/* Iframe container */}
      <div className="relative flex-1">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
              <p className="text-sm text-gray-500">Loading application...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={STREAMLIT_URL}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone"
        />
      </div>
    </div>
  );
};

export default EmbedPage;