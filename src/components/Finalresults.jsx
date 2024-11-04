import { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FinancialReport = () => {
  const [activeTab, setActiveTab] = useState('finalResult');
  const [editMode, setEditMode] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  
  const [data, setData] = useState([
  {
    "Sr.No.": "1",
    "Particulars": "Income",
    "31.03.2024\nAudited\n(Refer Note 5)": "659.90",
    "31.12.2023\nUnaudited": "136.15",
    "31.03.2023\nAudited\n(Refer Note 5)": "610.22",
    "31.03.2024\nAudited": "1,330.61",
    "31.03.2023\nAudited": "1,155.05"
  },
  {
    "Sr.No.": "",
    "Particulars": "Revenue from Operations",
    "31.03.2024\nAudited\n(Refer Note 5)": "346.32",
    "31.12.2023\nUnaudited": "316.46",
    "31.03.2023\nAudited\n(Refer Note 5)": "233.61",
    "31.03.2024\nAudited": "1,195.00",
    "31.03.2023\nAudited": "945.00"
  },
  {
    "Sr.No.": "",
    "Particulars": "Other Income",
    "31.03.2024\nAudited\n(Refer Note 5)": "1,006.22",
    "31.12.2023\nUnaudited": "452.61",
    "31.03.2023\nAudited\n(Refer Note 5)": "843.83",
    "31.03.2024\nAudited": "2,525.61",
    "31.03.2023\nAudited": "2,100.05"
  },
  {
    "Sr.No.": "",
    "Particulars": "Total Income",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "2",
    "Particulars": "Expenses",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Cost of Materials Consumed",
    "31.03.2024\nAudited\n(Refer Note 5)": "1,888.19",
    "31.12.2023\nUnaudited": "882.70",
    "31.03.2023\nAudited\n(Refer Note 5)": "1,535.14",
    "31.03.2024\nAudited": "3,952.33",
    "31.03.2023\nAudited": "4,169.76"
  },
  {
    "Sr.No.": "",
    "Particulars": "Changes in inventories of finished goods and construction work-in-progress",
    "31.03.2024\nAudited\n(Refer Note 5)": "(1,553.26)",
    "31.12.2023\nUnaudited": "(852.24)",
    "31.03.2023\nAudited\n(Refer Note 5)": "(1,276.01)",
    "31.03.2024\nAudited": "(3,307.04)",
    "31.03.2023\nAudited": "(3,682.94)"
  },
  {
    "Sr.No.": "",
    "Particulars": "Employee Benefits Expense",
    "31.03.2024\nAudited\n(Refer Note 5)": "77.69",
    "31.12.2023\nUnaudited": "49.07",
    "31.03.2023\nAudited\n(Refer Note 5)": "99.43",
    "31.03.2024\nAudited": "221.37",
    "31.03.2023\nAudited": "178.18"
  },
  {
    "Sr.No.": "",
    "Particulars": "Finance Costs",
    "31.03.2024\nAudited\n(Refer Note 5)": "121.36",
    "31.12.2023\nUnaudited": "118.25",
    "31.03.2023\nAudited\n(Refer Note 5)": "56.75",
    "31.03.2024\nAudited": "380.02",
    "31.03.2023\nAudited": "233.13"
  },
  {
    "Sr.No.": "",
    "Particulars": "Depreciation and Amortisation Expense",
    "31.03.2024\nAudited\n(Refer Note 5)": "7.24",
    "31.12.2023\nUnaudited": "6.39",
    "31.03.2023\nAudited\n(Refer Note 5)": "4.94",
    "31.03.2024\nAudited": "24.34",
    "31.03.2023\nAudited": "18.96"
  },
  {
    "Sr.No.": "",
    "Particulars": "Other Expenses",
    "31.03.2024\nAudited\n(Refer Note 5)": "197.84",
    "31.12.2023\nUnaudited": "110.83",
    "31.03.2023\nAudited\n(Refer Note 5)": "117.33",
    "31.03.2024\nAudited": "540.34",
    "31.03.2023\nAudited": "352.42"
  },
  {
    "Sr.No.": "",
    "Particulars": "Total Expenses",
    "31.03.2024\nAudited\n(Refer Note 5)": "739.06",
    "31.12.2023\nUnaudited": "315.00",
    "31.03.2023\nAudited\n(Refer Note 5)": "537.58",
    "31.03.2024\nAudited": "1,811.36",
    "31.03.2023\nAudited": "1,269.51"
  },
  {
    "Sr.No.": "3",
    "Particulars": "Profit before Tax for the period / year",
    "31.03.2024\nAudited\n(Refer Note 5)": "267.16",
    "31.12.2023\nUnaudited": "137.61",
    "31.03.2023\nAudited\n(Refer Note 5)": "306.25",
    "31.03.2024\nAudited": "714.25",
    "31.03.2023\nAudited": "830.54"
  },
  {
    "Sr.No.": "4",
    "Particulars": "Tax expense",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Current Tax",
    "31.03.2024\nAudited\n(Refer Note 5)": "46.09",
    "31.12.2023\nUnaudited": "10.02",
    "31.03.2023\nAudited\n(Refer Note 5)": "61.68",
    "31.03.2024\nAudited": "118.29",
    "31.03.2023\nAudited": "183.35"
  },
  {
    "Sr.No.": "",
    "Particulars": "Deferred Tax",
    "31.03.2024\nAudited\n(Refer Note 5)": "4.18",
    "31.12.2023\nUnaudited": "24.23",
    "31.03.2023\nAudited\n(Refer Note 5)": "(21.95)",
    "31.03.2024\nAudited": "31.61",
    "31.03.2023\nAudited": "(8.48)"
  },
  {
    "Sr.No.": "5",
    "Particulars": "Profit after Tax for the period / year",
    "31.03.2024\nAudited\n(Refer Note 5)": "216,89",
    "31.12.2023\nUnaudited": "103,36",
    "31.03.2023\nAudited\n(Refer Note 5)": "266.52",
    "31.03.2024\nAudited": "564.35",
    "31.03.2023\nAudited": "655.67"
  },
  {
    "Sr.No.": "6",
    "Particulars": "Other Comprehensive Income / (Loss) for the period/year",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Items that will not be subsequently reclassified to profit or loss",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Tax on Above",
    "31.03.2024\nAudited\n(Refer Note 5)": "(2.44)",
    "31.12.2023\nUnaudited": "0.31",
    "31.03.2023\nAudited\n(Refer Note 5)": "2.41",
    "31.03.2024\nAudited": "(1.50)",
    "31.03.2023\nAudited": "1.25"
  },
  {
    "Sr.No.": "",
    "Particulars": "Remeasurements of the defined benefit plan",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.62",
    "31.12.2023\nUnaudited": "(0.08)",
    "31.03.2023\nAudited\n(Refer Note 5)": "(0.61)",
    "31.03.2024\nAudited": "0.38",
    "31.03.2023\nAudited": "(0.32)"
  },
  {
    "Sr.No.": "",
    "Particulars": "Total Comprehensive Income for the period / year",
    "31.03.2024\nAudited\n(Refer Note 5)": "215.07",
    "31.12.2023\nUnaudited": "103.59",
    "31.03.2023\nAudited\n(Refer Note 5)": "268.32",
    "31.03.2024\nAudited": "563.23",
    "31.03.2023\nAudited": "656.60"
  },
  {
    "Sr.No.": "8",
    "Particulars": "Paid-up Equity Share Capital",
    "31.03.2024\nAudited\n(Refer Note 5)": "139.02",
    "31.12.2023\nUnaudited": "139.02",
    "31.03.2023\nAudited\n(Refer Note 5)": "139.01",
    "31.03.2024\nAudited": "139.02",
    "31.03.2023\nAudited": "139.01"
  },
  {
    "Sr.No.": "",
    "Particulars": "Face Value - INR 5/- per share",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "9",
    "Particulars": "Reserves Excluding Revaluation Reserve and Debenture",
    "31.03.2024\nAudited\n(Refer Note 5)": "10,373.26",
    "31.12.2023\nUnaudited": "10,157.47",
    "31.03.2023\nAudited\n(Refer Note 5)": "9,806.12",
    "31.03.2024\nAudited": "10,373.26",
    "31.03.2023\nAudited": "9,806.12"
  },
  {
    "Sr.No.": "",
    "Particulars": "Redemption Reserve",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "10",
    "Particulars": "Net-Worth",
    "31.03.2024\nAudited\n(Refer Note 5)": "10,512.28",
    "31.12.2023\nUnaudited": "10,296.49",
    "31.03.2023\nAudited\n(Refer Note 5)": "9,945.13",
    "31.03.2024\nAudited": "10,512.28",
    "31.03.2023\nAudited": "9,945.13"
  },
  {
    "Sr.No.": "11",
    "Particulars": "Earning Per Equity Share (EPS) (Amount in INR)",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Basic EPS (*not annualized)",
    "31.03.2024\nAudited\n(Refer Note 5)": "7.80*",
    "31.12.2023\nUnaudited": "3.72*",
    "31.03.2023\nAudited\n(Refer Note 5)": "9.59*",
    "31.03.2024\nAudited": "20.30",
    "31.03.2023\nAudited": "23.58"
  },
  {
    "Sr.No.": "",
    "Particulars": "Diluted EPS (*not annualized)",
    "31.03.2024\nAudited\n(Refer Note 5)": "7.80*",
    "31.12.2023\nUnaudited": "3.72*",
    "31.03.2023\nAudited\n(Refer Note 5)": "9.59*",
    "31.03.2024\nAudited": "20.29",
    "31.03.2023\nAudited": "23.58"
  },
  {
    "Sr.No.": "12",
    "Particulars": "Key Ratios and Financial Indicators (Refer Note 4)",
    "31.03.2024\nAudited\n(Refer Note 5)": null,
    "31.12.2023\nUnaudited": null,
    "31.03.2023\nAudited\n(Refer Note 5)": null,
    "31.03.2024\nAudited": null,
    "31.03.2023\nAudited": null
  },
  {
    "Sr.No.": "",
    "Particulars": "Debt Equity Ratio (Gross)",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.96",
    "31.12.2023\nUnaudited": "1.02",
    "31.03.2023\nAudited\n(Refer Note 5)": "0.64",
    "31.03.2024\nAudited": "0.96",
    "31.03.2023\nAudited": "0.64"
  },
  {
    "Sr.No.": "",
    "Particulars": "Debt Equity Ratio (Net)",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.62",
    "31.12.2023\nUnaudited": "0.69",
    "31.03.2023\nAudited\n(Refer Note 5)": "0.42",
    "31.03.2024\nAudited": "0.62",
    "31.03.2023\nAudited": "0.42"
  },
  {
    "Sr.No.": "",
    "Particulars": "Debt Service Coverage Ratio (DSCR)",
    "31.03.2024\nAudited\n(Refer Note 5)": "1.91",
    "31.12.2023\nUnaudited": "1.30",
    "31.03.2023\nAudited\n(Refer Note 5)": "0.35",
    "31.03.2024\nAudited": "1.59",
    "31.03.2023\nAudited": "0.81"
  },
  {
    "Sr.No.": "",
    "Particulars": "Interest Service Coverage Ratio (ISCR)",
    "31.03.2024\nAudited\n(Refer Note 5)": "1.91",
    "31.12.2023\nUnaudited": "1.30",
    "31.03.2023\nAudited\n(Refer Note 5)": "3.36",
    "31.03.2024\nAudited": "1.59",
    "31.03.2023\nAudited": "2.92"
  },
  {
    "Sr.No.": "",
    "Particulars": "Current Ratio",
    "31.03.2024\nAudited\n(Refer Note 5)": "1.61",
    "31.12.2023\nUnaudited": "1.69",
    "31.03.2023\nAudited\n(Refer Note 5)": "1.62",
    "31.03.2024\nAudited": "1.61",
    "31.03.2023\nAudited": "1.62"
  },
  {
    "Sr.No.": "",
    "Particulars": "Long Term Debt to Working Capital",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.30",
    "31.12.2023\nUnaudited": "0.31",
    "31.03.2023\nAudited\n(Refer Note 5)": "-",
    "31.03.2024\nAudited": "0.30",
    "31.03.2023\nAudited": "-"
  },
  {
    "Sr.No.": "",
    "Particulars": "Bad Debts to Account Receivable Ratio",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.05",
    "31.12.2023\nUnaudited": "-",
    "31.03.2023\nAudited\n(Refer Note 5)": "-",
    "31.03.2024\nAudited": "0.05",
    "31.03.2023\nAudited": "0.03"
  },
  {
    "Sr.No.": "",
    "Particulars": "Current Liability Ratio",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.85",
    "31.12.2023\nUnaudited": "0.82",
    "31.03.2023\nAudited\n(Refer Note 5)": "1.00",
    "31.03.2024\nAudited": "0.85",
    "31.03.2023\nAudited": "1.00"
  },
  {
    "Sr.No.": "",
    "Particulars": "Total Debts to Total Assets",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.36",
    "31.12.2023\nUnaudited": "0.41",
    "31.03.2023\nAudited\n(Refer Note 5)": "0.32",
    "31.03.2024\nAudited": "0.36",
    "31.03.2023\nAudited": "0.32"
  },
  {
    "Sr.No.": "",
    "Particulars": "Debtors Turnover (annualized)",
    "31.03.2024\nAudited\n(Refer Note 5)": "11.30",
    "31.12.2023\nUnaudited": "2.49",
    "31.03.2023\nAudited\n(Refer Note 5)": "9.43",
    "31.03.2024\nAudited": "5.14",
    "31.03.2023\nAudited": "4.61"
  },
  {
    "Sr.No.": "",
    "Particulars": "Inventory Turnover (annualized)",
    "31.03.2024\nAudited\n(Refer Note 5)": "0.16",
    "31.12.2023\nUnaudited": "0.02",
    "31.03.2023\nAudited\n(Refer Note 5)": "0.19",
    "31.03.2024\nAudited": "0.08",
    "31.03.2023\nAudited": "0.12"
  },
  {
    "Sr.No.": "",
    "Particulars": "Operating Margin (%)",
    "31.03.2024\nAudited\n(Refer Note 5)": "10.02%",
    "31.12.2023\nUnaudited": "(38.39%)",
    "31.03.2023\nAudited\n(Refer Note 5)": "25.35%",
    "31.03.2024\nAudited": "(3.16%)",
    "31.03.2023\nAudited": "15.17%"
  },
  {
    "Sr.No.": "",
    "Particulars": "Adjusted EBITDA %",
    "31.03.2024\nAudited\n(Refer Note 5)": "40.99%",
    "31.12.2023\nUnaudited": "58.37%",
    "31.03.2023\nAudited\n(Refer Note 5)": "46.02%",
    "31.03.2024\nAudited": "45.65%",
    "31.03.2023\nAudited": "53.35%"
  },
  {
    "Sr.No.": "",
    "Particulars": "Net Profit Margin (%)",
    "31.03.2024\nAudited\n(Refer Note 5)": "21.55%",
    "31.12.2023\nUnaudited": "22.84%",
    "31.03.2023\nAudited\n(Refer Note 5)": "31.58%",
    "31.03.2024\nAudited": "22.35%",
    "31.03.2023\nAudited": "31.22%"
  }
]);

  const formatColumnHeader = (header) => {
    return header.split('\n').map((line, i) => (
      <span key={i} className="block">
        {line}
      </span>
    ));
  };

  const formatValue = (value) => {
    if (value === null) return '';
    if (typeof value === 'string' && value.includes('%')) return value;
    if (value === '-') return value;
    return isNaN(value) ? value : parseFloat(value).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleEdit = (rowIndex, column, value) => {
    setEditingCell({ rowIndex, column, value: value || '' });
  };

  const handleSave = () => {
    if (!editingCell) return;

    const { rowIndex, column, value } = editingCell;
    const newData = [...data];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [column]: value
    };

    setData(newData);
    setEditingCell(null);
  };

  const handleCancel = () => {
    setEditingCell(null);
  };

  const EditableCell = ({ value, rowIndex, column, isEditing }) => {
    if (isEditing) {
      return (
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={editingCell.value}
            onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })}
            className="h-8 w-full"
            autoFocus
          />
          <Button variant="ghost" size="sm" onClick={handleSave} className="h-8 w-8 p-0">
            <Save className="h-4 w-4 text-green-600" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCancel} className="h-8 w-8 p-0">
            <X className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between group">
        <span>{formatValue(value)}</span>
        {editMode && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(rowIndex, column, value)}
            className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
          >
            <Edit2 className="h-3 w-3" />
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="w-1/2 bg-white h-screen mt-4 rounded-lg shadow overflow-y-scroll overflow-x-scroll">
      {/* Toggle Buttons */}
      <div className="flex justify-between p-4 border-b">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'finalResult' ? "default" : "outline"}
            onClick={() => setActiveTab('finalResult')}
            className="w-32"
          >
            Final Result
          </Button>
          <Button 
            variant={activeTab === 'json' ? "default" : "outline"}
            onClick={() => setActiveTab('json')}
            className="w-32"
          >
            JSON
          </Button>
        </div>
        {activeTab === 'finalResult' && (
          <Button
            variant={editMode ? "default" : "outline"}
            onClick={() => setEditMode(!editMode)}
            className="w-32"
          >
            {editMode ? 'Done Editing' : 'Edit Fields'}
          </Button>
        )}
      </div>

      {activeTab === 'finalResult' ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left font-medium text-sm border sticky left-0 bg-gray-50">
                  Sr.No.
                </th>
                <th className="p-3 text-left font-medium text-sm border sticky left-16 bg-gray-50 min-w-[200px]">
                  Particulars
                </th>
                {Object.keys(data[0]).slice(2).map((header) => (
                  <th key={header} className="p-3 text-right font-medium text-sm border min-w-[120px]">
                    {formatColumnHeader(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border sticky left-0 bg-inherit">
                    {row['Sr.No.']}
                  </td>
                  <td className="p-3 border sticky left-16 bg-inherit font-medium">
                    {row['Particulars']}
                  </td>
                  {Object.keys(row).slice(2).map((key) => (
                    <td key={key} className="p-3 border text-right">
                      <EditableCell
                        value={row[key]}
                        rowIndex={rowIndex}
                        column={key}
                        isEditing={editingCell?.rowIndex === rowIndex && editingCell?.column === key}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-4">
          <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-[600px]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FinancialReport;