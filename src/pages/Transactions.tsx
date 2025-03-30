import { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import { StatCard } from '../components/StatCard';

export function Transactions() {
  const [statusOpen, setStatusOpen] = useState(false);
  const statuses = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-2xl font-semibold text-black">Transactions</h1>
        <div className='flex items-center gap-4'>
          <h1 className="text-1xl font-semibold text-black">Afficher Par :</h1>
          <div className='flex items-center gap-4'>
            <select name="" id="">
              <option value="nt">Portefeuille</option>
              <option value="ec">En cour</option>
              <option value="te">Terminer</option>
            </select>
          </div>
          <div className='flex items-center gap-4'>
            <select name="" id="">
              <option value="nt">Liste Portefeuille</option>
              <option value="ec">En cour</option>
              <option value="te">Terminer</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mb-8">
        <StatCard title="Flux Financier" value="240000 XAF" />
        <StatCard title="Total benefice" value="6000 XAF" />
        <StatCard title="Total echec" value="0" />
        <StatCard title="Total reussite" value="2" />
        <StatCard title="Total transaction" value="2" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Liste des transactions</h2>
          <div className="relative w-full max-w-xs">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search" className="pl-4 pr-10 py-2 border rounded-lg w-full" />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-black">Type de client :</h1>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-4'>
                <select name="" id="">
                  <option value="nt">Starup</option>
                  <option value="ec">Organisation</option>
                  <option value="te">ONU</option>
                </select>
              </div>
                <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <span className='font-bold'>25 million atteint</span>
                  <input type="checkbox" className="rounded" />
                </label>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded-lg px-4 py-2 bg-white w-full sm:w-auto">
            <option>Client</option>
          </select>
          <div className="relative w-full sm:w-auto">
            <button
              className="border rounded-lg px-4 py-2 bg-white flex items-center gap-2 w-full sm:w-auto"
              onClick={() => setStatusOpen(!statusOpen)}
            >
              Status
            </button>
            {statusOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2">
                <div className="text-sm text-gray-600 px-2 py-1">Select Status</div>
                {statuses.map((status) => (
                  <label key={status} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>{status}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <select className="border rounded-lg px-4 py-2 bg-white w-full sm:w-auto">
            <option>Tranche</option>
          </select>
          <select className="border rounded-lg px-4 py-2 bg-white w-full sm:w-auto">
            <option>Resultat</option>
          </select>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <span className="text-gray-500">Debut</span>
            <div className="relative w-full">
              <input type="text" placeholder="Choisir une date" className="border rounded-lg px-4 py-2 w-full pl-10" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Calendar size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <span className="text-gray-500">Fin</span>
            <div className="relative w-full">
              <input type="text" placeholder="Date de fin" className="border rounded-lg px-3 py-2 w-full pl-10" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Calendar size={20} />
              </div>
            </div>
          </div>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg ml-auto mt-4 sm:mt-0">
            Application
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-4">Ref</th>
              <th className="pb-4">Client</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Montant</th>
              <th className="pb-4">Benefice</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {
              // ajoute des utilisateur ici
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
