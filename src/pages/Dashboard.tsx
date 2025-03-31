import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [state] = useState({
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar' as 'bar',
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: "end" as "end"
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "Fca " + val
          }
        }
      }
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold mb-4 md:mb-0">Flux financiers</h2>
        <select className="bg-white border rounded-lg px-4 py-2">
          <option value='an'>Annuel</option>
          <option value='ms'>Mensuel</option>
          <option value='jr'>Journalier</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 mb-4 mt-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm">Portefeuille</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm">Transfert</span>
        </div>
      </div>
      <div className="h-96 flex items-end justify-between space-x-4 overflow-x-auto">
        <div className="w-full">
          <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={500} />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <>
      <Header title="Bienvenue sur la plateforme d'administration de la relation client SingPay" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatCard title="Total des transactions" value="34" />
        <StatCard title="Total des comptes" value="34" />
        <StatCard title="Total portefeuille" value="34" />
        <StatCard title="Total comptes actif" value="34" />
        <StatCard title="Total comptes inactif" value="34" />
        <StatCard title="Integration non acheve" value="34" />
        <StatCard title="Startup ayant atteint 25m" value="34" />
      </div>
      <Chart />
    </>
  );
}
