import { useState } from 'react';
import { 
  Zap,
  FileText,
  FileSpreadsheet,
  Receipt,
  ClipboardList,
  CreditCard,
  Car,
  Ship,
  File,
  Plus,
  BookOpen,
  FileCheck,
  Upload,
  ArrowLeft,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link, NavLink } from 'react-router-dom';





const FileUploadPage = ({ documentType, onBack }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold">Import Files - {documentType}</h1>
      </div>

      <Card className="w-full">
        <div
          className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-gray-50 rounded-full">
              <Upload size={32} className="text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Drop your files here or click to upload</p>
              <p className="text-sm text-gray-500 mt-1">Supported formats: PDF, PNG, JPG</p>
            </div>
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileSelect}
            />
            <Button
              onClick={() => document.getElementById('file-upload').click()}
              variant="outline"
              className="mt-2"
            >
              Select Files
            </Button>
          </div>
        </div>

        {files.length > 0 && (
          <div className="p-4 border-t">
            <h3 className="font-semibold mb-4">Selected Files ({files.length})</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-gray-500" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-inherit text-black border-2 border-black hover:bg-white hover:text-black ">Processing File ...</Button>
            <NavLink to={`/processing`} >
              <Button className="w-full mt-4">View in new Tab</Button>
            </NavLink>
            
          </div>
        )}
      </Card>
    </div>
  );
};

const DataTransformationPage = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documentCards = [
    { icon: <Zap />, title: 'Zero Training Model', content: 'Build your own zero training extractor' },
    { icon: <FileText />, title: 'Invoices', content: 'Pre-built extractor' },
    { icon: <FileSpreadsheet />, title: 'Tables', content: 'Pre-built extractor' },
    { icon: <Receipt />, title: 'Receipts', content: 'Pre-built extractor' },
    { icon: <ClipboardList />, title: 'Purchase Orders', content: 'Pre-built extractor' },
    { icon: <CreditCard />, title: 'Passports', content: 'Pre-built extractor' },
    { icon: <Car />, title: "Driver's license (USA)", content: 'Pre-built extractor' },
    { icon: <Ship />, title: 'Bill Of Lading', content: 'Pre-built extractor' },
    { icon: <File />, title: 'Custom document', content: 'Pre-built extractor' }
  ];

  const workflowCards = [
    {
      icon: <Plus className="text-purple-600" />,
      title: 'Create your own workflow',
      content: 'Connect any input and output to transform data.',
      bgColor: 'from-purple-50'
    },
    {
      icon: <BookOpen className="text-blue-600" />,
      title: 'Accounts Payable',
      content: 'Automate invoice capture, verification, PO matching and others.',
      bgColor: 'from-blue-50'
    },
    {
      icon: <FileCheck className="text-green-600" />,
      title: 'Document Classification',
      content: 'Build your own document type recognition AI',
      bgColor: 'from-green-50'
    }
  ];

  if (selectedDocument) {
    return (
      <FileUploadPage 
        documentType={selectedDocument} 
        onBack={() => setSelectedDocument(null)} 
      />
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Data Transformation Workflows</h1>
      <p className="text-gray-500 mb-8">Automate document processing workflows</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {documentCards.map((card, index) => (
          
            <Card 
            key={index}
            className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedDocument(card.title)}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.content}</p>
              </div>
            </div>
          </Card>
          
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Pre-built workflows</h2>
      <p className="text-gray-500 mb-6">Browse from popular templates or create your own data transformation</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflowCards.map((card, index) => (
          <Card 
            key={index}
            className={`p-6 hover:shadow-lg transition-all duration-200 cursor-pointer bg-gradient-to-br ${card.bgColor} to-white`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 bg-opacity-20 rounded-lg`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DataTransformationPage;















// import { useState } from 'react';
// import { 
//   Zap,
//   FileText,
//   FileSpreadsheet,
//   Receipt,
//   ClipboardList,
//   CreditCard,
//   Car,
//   Ship,
//   File,
//   Plus,
//   BookOpen,
//   FileCheck,
//   Maximize2,
//   Loader2,
//   X,
//   ExternalLink
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

// // EmbedView Component
// const EmbedView = ({ onClose }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const STREAMLIT_URL = "https://testoshiba.infrahive.io/";

//   const handleOpenNewTab = () => {
//     window.open(STREAMLIT_URL, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div className="fixed inset-0 bg-white z-50 flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-lg font-semibold">Document Processing</h2>
//         <div className="flex items-center gap-2">
//           {/* <Button 
//             variant="outline" 
//             size="sm"
//             onClick={handleOpenNewTab}
//             className="flex items-center gap-2"
//           >
//             <ExternalLink className="h-4 w-4" />
//             Open in New Tab
//           </Button> */}
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={onClose}
//             className="flex items-center gap-2"
//           >
//             <X className="h-4 w-4" />
//             Close
//           </Button>
//         </div>
//       </div>

//       {/* Iframe container */}
//       <div className="relative flex-1">
//         {isLoading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
//             <div className="flex flex-col items-center gap-2">
//               <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
//               <p className="text-sm text-gray-500">Loading application...</p>
//             </div>
//           </div>
//         )}
//         <iframe
//           src={STREAMLIT_URL}
//           className="w-full h-full border-0"
//           onLoad={() => setIsLoading(false)}
//           allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone"
//         />
//       </div>
//     </div>
//   );
// };

// // Main Component
// const DataTransformationPage = () => {
//   const [showEmbed, setShowEmbed] = useState(false);

//   const handleCardClick = (title) => {
//     setShowEmbed(true);
//     // Update URL without page reload
//     window.history.pushState({}, '', '/embed');
//   };

//   // Handle browser back button
//   window.onpopstate = () => {
//     setShowEmbed(false);
//   };

//   const handleClose = () => {
//     setShowEmbed(false);
//     window.history.back();
//   };

//   const documentCards = [
//     { icon: <Zap />, title: 'Zero Training Model', content: 'Build your own zero training extractor' },
//     { icon: <FileText />, title: 'Invoices', content: 'Pre-built extractor' },
//     { icon: <FileSpreadsheet />, title: 'Tables', content: 'Pre-built extractor' },
//     { icon: <Receipt />, title: 'Receipts', content: 'Pre-built extractor' },
//     { icon: <ClipboardList />, title: 'Purchase Orders', content: 'Pre-built extractor' },
//     { icon: <CreditCard />, title: 'Passports', content: 'Pre-built extractor' },
//     { icon: <Car />, title: "Driver's license (USA)", content: 'Pre-built extractor' },
//     { icon: <Ship />, title: 'Bill Of Lading', content: 'Pre-built extractor' },
//     { icon: <File />, title: 'Custom document', content: 'Pre-built extractor' }
//   ];

//   const workflowCards = [
//     {
//       icon: <Plus className="text-purple-600" />,
//       title: 'Create your own workflow',
//       content: 'Connect any input and output to transform data.',
//       bgColor: 'from-purple-50'
//     },
//     {
//       icon: <BookOpen className="text-blue-600" />,
//       title: 'Accounts Payable',
//       content: 'Automate invoice capture, verification, PO matching and others.',
//       bgColor: 'from-blue-50'
//     },
//     {
//       icon: <FileCheck className="text-green-600" />,
//       title: 'Document Classification',
//       content: 'Build your own document type recognition AI',
//       bgColor: 'from-green-50'
//     }
//   ];

//   return (
//     <>
//       {showEmbed ? (
//         <EmbedView onClose={handleClose} />
//       ) : (
//         <div className="p-4 md:p-6 max-w-6xl mx-auto">
//           <h1 className="text-2xl md:text-3xl font-bold mb-2">Data Transformation Workflows</h1>
//           <p className="text-gray-500 mb-8">Automate document processing workflows</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
//             {documentCards.map((card, index) => (
//               <Card 
//                 key={index}
//                 className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
//                 onClick={() => handleCardClick(card.title)}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 bg-gray-50 rounded-lg">
//                     {card.icon}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-semibold mb-1">{card.title}</h3>
//                       <Maximize2 className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                     <p className="text-sm text-gray-500">{card.content}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           <h2 className="text-xl font-bold mb-2">Pre-built workflows</h2>
//           <p className="text-gray-500 mb-6">Browse from popular templates or create your own data transformation</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {workflowCards.map((card, index) => (
//               <Card 
//                 key={index}
//                 className={`p-6 hover:shadow-lg transition-all duration-200 cursor-pointer bg-gradient-to-br ${card.bgColor} to-white group`}
//                 onClick={() => handleCardClick(card.title)}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className={`p-3 bg-opacity-20 rounded-lg`}>
//                     {card.icon}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-bold text-lg mb-2">{card.title}</h3>
//                       <Maximize2 className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                     <p className="text-gray-600 text-sm">{card.content}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DataTransformationPage;