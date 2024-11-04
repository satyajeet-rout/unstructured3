import React, { useState } from 'react';
import {
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import FinancialReport from './Finalresults';
import SimplePDFViewer from './PdfViewer';
import { NavLink } from 'react-router-dom';

const ProcessingSteps = ({ currentStep }) => {
  const steps = ['Upload', 'Extract and Review', 'Process'];
  
  return (
    <div className="flex items-center gap-4 mb-6">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <Button
            variant={currentStep >= index ? "default" : "outline"}
            className={`gap-2 ${currentStep >= index ? 'bg-blue-600 text-white' : ''}`}
          >
            {index + 1}. {step}
          </Button>
          {index < steps.length - 1 && (
            <ChevronRight className="text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const InvoiceProcessor = () => {
  const [currentStep] = useState(1);
//   const [activeTab, setActiveTab] = useState('finalResult');

  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Processing Steps */}
      <ProcessingSteps currentStep={currentStep} />

      {/* Main Content */}
      <div className="flex gap-6">
        {/* PDF Viewer */}
              <SimplePDFViewer/>

              {/* Extraction Results */}
              <FinancialReport />
          </div>
          <div className='flex justify-end mt-[20px]'>
              <NavLink to='/workflow-import'>
                  <Button>Approve</Button>
               </NavLink>
          </div>
         
    </div>
  );
};

export default InvoiceProcessor;