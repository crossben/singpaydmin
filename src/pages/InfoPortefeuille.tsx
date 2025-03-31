interface WalletData {
    details: {
        id: string;
        codeCommercant: string;
        numeroCommercant: string;
    };
    api: {
        callbackUrl: string;
        goLive: string;
        identifiant: string;
        sharing: string;
        status: string;
        categorie: string;
    };
    airtelMoney: {
        codeCommercant: string;
        numeroCommercant: string;
        statusTraitement: string;
    };
    validation: {
        nomProjet: string;
        description: string;
        pourquoi: string;
    };
}

const mockWalletData: WalletData = {
    details: {
        id: "mn742",
        codeCommercant: "TEST283",
        numeroCommercant: "162811598512B",
    },
    api: {
        callbackUrl: "TEST283",
        goLive: "None",
        identifiant: "TEST283",
        sharing: "Startup",
        status: "Activé",
        categorie: "Remboursement",
    },
    airtelMoney: {
        codeCommercant: "NA",
        numeroCommercant: "NA",
        statusTraitement: "Aucun",
    },
    validation: {
        nomProjet: "mn742",
        description: "Ce portefeuille permet d'utiliser les fonctionnalités de l'API sans avoir besoin d'un compte marchand.",
        pourquoi: "Ce portefeuille permet d'utiliser les fonctionnalités de l'API sans avoir besoin d'un compte marchand.",
    },
};

function InfoPortefeuille() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-8xl mx-auto space-y-8">
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="flex justify-between items-center p-6 border-b">
                        <div className="flex items-center gap-4">
                            <h1 className="text-gray-800 font-medium">Details portefeuille</h1>
                            <span className="text-purple-600">{mockWalletData.details.id}</span>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
                            Modifier
                        </button>
                    </div>
                    <div className="p-6">
                        <h2 className="text-lg font-medium mb-6">Informations de paiement</h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <div>
                                <label className="text-sm text-gray-500">Code Marchand</label>
                                <p className="mt-1">{mockWalletData.details.codeCommercant}</p>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Numéro Marchand</label>
                                <p className="mt-1">{mockWalletData.details.numeroCommercant}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-medium mb-6">Utilisation de l'API</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="text-sm text-gray-500">Callback URL</label>
                            <p className="mt-1">{mockWalletData.api.callbackUrl}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Identifiant</label>
                            <p className="mt-1">{mockWalletData.api.identifiant}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Status</label>
                            <p className="mt-1">
                                <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                    {mockWalletData.api.status}
                                </span>
                            </p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Go live</label>
                            <p className="mt-1">{mockWalletData.api.goLive}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Sharing</label>
                            <p className="mt-1">{mockWalletData.api.sharing}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Catégorie</label>
                            <p className="mt-1">{mockWalletData.api.categorie}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-medium mb-6">Airtel Money</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="text-sm text-gray-500">Code Marchand</label>
                            <p className="mt-1">{mockWalletData.airtelMoney.codeCommercant}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Numéro Marchand</label>
                            <p className="mt-1">{mockWalletData.airtelMoney.numeroCommercant}</p>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Status du traitement</label>
                            <p className="mt-1">{mockWalletData.airtelMoney.statusTraitement}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-medium mb-6">Plus de detail pour la validation</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="text-sm text-gray-500">Nom du projet</label>
                            <p className="mt-1">{mockWalletData.validation.nomProjet}</p>
                        </div>
                        <div className="col-span-2">
                            <label className="text-sm text-gray-500">Description du projet</label>
                            <p className="mt-1">{mockWalletData.validation.description}</p>
                        </div>
                        <div className="col-span-3">
                            <label className="text-sm text-gray-500">Pourquoi voulez-vous utiliser l'API?</label>
                            <p className="mt-1">{mockWalletData.validation.pourquoi}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPortefeuille;