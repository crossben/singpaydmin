import { useEffect, useState } from 'react';

export function ClientInfoPage() {
    const [clientData, setClientData] = useState<any>(null);

    useEffect(() => {
        setTimeout(() => {
            const clientInfo = {
                nom: "Madu",
                prenom: "Nick Ezekiel",
                sexe: "Masculin",
                codePromo: "Inactif",
                adresse: "NA",
                ville: "Libreville",
                contactEmail: "nickezekiel@ignislab.com",
                contactPhone: "+24174383860",
                compteInfo: {
                    acces: "Airtel Money - Clés des identifiants developer portal",
                    cle: "unoINcfhNu9Okq0QvKLuLMsOABZUi9J",
                    commerceActuel: "Aucun",
                    derniereConnexion: "24/09/2021 à 15h38",
                    derniereActivite: "24/09/2021 à 16h48",
                    nbPortefeuilles: 1,
                    etatCompte: "Active"
                }
            };
            setClientData(clientInfo);
        }, 1000);
    }, []);

    if (!clientData) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="w-full h-full">
            <div className="bg-white rounded-lg">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Informations Client <span className="text-pink-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{clientData.prenom}</span>
                    </h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Modifier</button>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <table className="w-full table-auto">
                        <thead className='py-5'>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="pb-4 py-5">Nom</th>
                                <th className="pb-4 py-5">Prénom</th>
                                <th className="pb-4 py-5">Sexe</th>
                                <th className="pb-4 py-5">Code promo</th>
                            </tr>
                        </thead>
                        <tbody className='py-5'>
                            <tr>
                                <td className="font-semibold py-5">{clientData.nom}</td>
                                <td className="font-semibold py-5">{clientData.prenom}</td>
                                <td className="font-semibold py-5">{clientData.sexe}</td>
                                <td className='py-5'>
                                    <select className="bg-gray-200 px-2 py-2 rounded-md inline-block ">
                                        <option value="actif">Actif</option>
                                        <option value="inactif">Inactif</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                        <thead className='py-5'>
                            <tr>
                                <td className="text-gray-500 font-semibold py-5">Adresse</td>
                                <td className="text-gray-500 font-semibold py-5">Ville</td>
                                <td className="text-gray-500 font-semibold py-5">Contact</td>
                                <td className="text-gray-500 font-semibold py-5">Contact</td>
                            </tr>
                        </thead>
                        <tbody className='py-5'>
                            <tr>
                                <td>{clientData.adresse}</td>
                                <td>{clientData.ville}</td>
                                <td>{clientData.contactEmail}</td>
                                <td>{clientData.contactPhone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mt-6 border-b pb-2">Informations compte</h3>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
                    <div>
                        <p className="text-sm font-semibold">Accès</p>
                        <p>{clientData.compteInfo.acces}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Clé</p>
                        <p>{clientData.compteInfo.cle}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Commerce Actuel</p>
                        <p>{clientData.compteInfo.commerceActuel}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Utilisation du système</p>
                        <p>Dernière connexion le {clientData.compteInfo.derniereConnexion}</p>
                        <p>Dernière activité le {clientData.compteInfo.derniereActivite}</p>
                    </div>
                </div>
                <div className='justify-between items-center grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <p className="text-sm font-semibold">Nombre de portefeuilles : &nbsp;</p>
                            <p>{clientData.compteInfo.nbPortefeuilles}</p>
                        </div>
                        <div className='mt-2 '>
                            <p className="text-sm font-semibold my-5">État du compte</p>
                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md inline-block">{clientData.compteInfo.etatCompte}</span>
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-semibold my-5">Liste des portefeuille lie au client</p>
                        <select className="px-4 py-2">
                            <option value="wallet1">Portefeuille 1</option>
                            <option value="wallet2">Portefeuille 2</option>
                            <option value="wallet3">Portefeuille 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
