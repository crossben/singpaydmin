import { useState, FormEvent } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Header } from '../components/Header';

export function Portefeuille() {
  type Client = {
    project: string;
    client: string;
    date: string;
    status: string;
  }

  const portefeuilles = [
    { project: 'mn742', client: 'Madu Nick Ezekiel', date: 'Le 04/08/2021 à 23h26', status: 'Active' },
    { project: 'tn3898', client: 'Tout numerique', date: 'Le 02/02/2022 à 10h41', status: 'Active' },
  ];

  const [selectedClients, setSelectedClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const portefeuillesPerPage = 8;

  const handleSelectChange = (event: FormEvent, client: Client) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      setSelectedClients((prev) => [...prev, client]);
    } else {
      setSelectedClients((prev) => prev.filter((selected) => selected.client !== client.client));
    }
  };

  const totalClients = portefeuilles.length;
  const totalPages = Math.ceil(totalClients / portefeuillesPerPage);

  const currentPortefeuille = portefeuilles.slice(
    (currentPage - 1) * portefeuillesPerPage,
    currentPage * portefeuillesPerPage
  );

  const handleExportCSV = () => {
    const header = ['Projet', 'Client', 'Date', 'Status'];
    const rows = selectedClients.map(client => [
      client.project,
      client.client,
      client.date,
      client.status
    ]);

    const csvContent = [
      header.join(','), 
      ...rows.map(row => row.join(',')) 
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'portefeuilles.csv');
    link.click();
  };

  return (
    <>
      <Header title="Portefeuille client" />
      <div className="my-6">
        {selectedClients.length > 0 && (
          <div className="flex gap-4">
            <button className="bg-[#070438] text-white px-4 py-2 rounded-lg flex items-center w-full md:w-auto">
              Contact &nbsp;
            </button>
            <button
              onClick={handleExportCSV}
              className="bg-[#070438] text-white px-4 py-2 rounded-lg flex items-center"
            >
              Exporter CSV &nbsp;
              <i className="fa fa-download" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Liste des portefeuilles</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10 py-2 border rounded-lg w-full"
              />
            </div>
            <select className="px-4 py-2">
              <option>Trier: Client</option>
            </select>
            <select className="px-4 py-2">
              <option>Status: Actif</option>
              <option>Status: Inactif</option>
            </select>
          </div>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-4">Sélectionner</th>
              <th className="pb-4">Projet</th>
              <th className="pb-4">Client</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPortefeuille.map((portefeuille, index) => (
              <tr key={index} className="border-b">
                <td className="py-4">
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelectChange(e, portefeuille)}
                    checked={selectedClients.some((selected) => selected.client === portefeuille.client)}
                    className="mr-2"
                  />
                </td>
                <td className="py-4">
                  <a href="/portefeuille/info" className="hover:underline">
                    {portefeuille.project}
                  </a>
                </td>
                <td>{portefeuille.client}</td>
                <td>{portefeuille.date}</td>
                <td>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-s-sm text-sm">
                    {portefeuille.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-right">
          <span>Showing {((currentPage - 1) * portefeuillesPerPage) + 1} to {Math.min(currentPage * portefeuillesPerPage, totalClients)} of {totalClients} entries</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} className="bg-gray-200 rounded-md">
            <ChevronLeft />
          </button>
          <div className="flex items-center gap-2">
            {currentPage > 3 && (
              <span className="text-gray-500">1</span>
            )}
            {currentPage > 4 && <span className="text-gray-500">...</span>}
            {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
              const page = Math.max(1, Math.min(currentPage - 2 + index, totalPages));
              if (page > totalPages) return null;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-0 rounded-md ${page === currentPage
                    ? 'bg-[#070438] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {page}
                </button>
              );
            })}
            {currentPage < totalPages - 2 && <span className="text-gray-500">...</span>}
            {currentPage < totalPages - 3 && (
              <span className="text-gray-500">{totalPages}</span>
            )}
          </div>
          <button onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))} className="bg-gray-200 rounded-md">
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
