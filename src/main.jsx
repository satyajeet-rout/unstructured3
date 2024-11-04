// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import NewWorkflow from './components/NewWorkflow'
import MyWorkflow from './components/MyWorkflow'
import ExternalIntegrations from './components/ExternalIntegrations'
import InvoiceProcessor from './components/Processing'
import WorkflowPage from './components/WorkflowImport'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' element={<Homepage />} /> */}
      <Route path='' element={<MyWorkflow />} />
      <Route path='new-workflow' element={<NewWorkflow />} />
      <Route path='external-integrations' element={<ExternalIntegrations />} />
      <Route path='processing' element={<InvoiceProcessor />} />
      <Route path='workflow-import' element={<WorkflowPage />} />
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
