import { FormEvent, useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { MailIcon } from 'lucide-react';

export function Clients() {
  
  type Client = {
    name: string;
    phone: string;
    email: string;
    lastActivity: string;
  };

  const [selectedClients, setSelectedClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 8;

  const clients = [
    {
      name: 'Nick Ezekiel Madu',
      phone: '+24174383850',
      email: 'nickezekiel@igislab.com',
      lastActivity: 'Le 24/09/2021 à 16h48',
    },
    {
      name: 'Numerique Tout',
      phone: '074817033',
      email: 'info@tn-gabon.com',
      lastActivity: 'Le 04/02/2022 à 17h25',
    },
    {
      name: 'John Doe',
      phone: '+123456789',
      email: 'johndoe@example.com',
      lastActivity: 'Le 10/02/2023 à 12h00',
    },
    {
      name: 'Jane Doe',
      phone: '+987654321',
      email: 'janedoe@example.com',
      lastActivity: 'Le 12/03/2024 à 15h00',
    },
    // Add more clients for testing pagination
  ];

  const handleSelectChange = (event: FormEvent, client: Client) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      setSelectedClients((prev) => [...prev, client]);
    } else {
      setSelectedClients((prev) => prev.filter((selected) => selected.name !== client.name));
    }
  };

  const totalClients = clients.length;
  const totalPages = Math.ceil(totalClients / clientsPerPage);

  const currentClients = clients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black">Compte Client</h1>
        <div className='flex items-center gap-4'>
          <h1 className="text-1xl font-semibold text-black">Integration</h1>
          <select name="" id="">
            <option value="nt">Non terminer</option>
            <option value="ec">En cour</option>
            <option value="te">Terminer</option>
          </select>
        </div>
      </div>

      <div className="my-6">
        {selectedClients.length > 0 && (
          <button className="bg-[#070438] text-white px-4 py-2 rounded-lg flex items-center w-full md:w-auto">
            Contact &nbsp;
            <MailIcon size={20} />
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Liste des clients</h2>
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
              <option>Sort by: Nom</option>
            </select>
          </div>
        </div>

        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-4">Sélectionner</th>
              <th className="pb-4">Nom et Prenom</th>
              <th className="pb-4">Telephone</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Derniere activite</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client, index) => (
              <tr key={index} className="border-b cursor-pointer">
                <td className="py-4">
                  <input
                    type="checkbox"
                    checked={selectedClients.some((selected) => selected.name === client.name)}
                    onChange={(e) => handleSelectChange(e, client)}
                    className="mr-2"
                  />
                </td>
                <td className="py-4">{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-right">
          <span>Showing {((currentPage - 1) * clientsPerPage) + 1} to {Math.min(currentPage * clientsPerPage, totalClients)} of {totalClients} entries</span>
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
