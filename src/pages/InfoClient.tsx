export function ClientInfoPage () {
    return (
        <div className="w-full h-full">
            <div className="bg-white rounded-lg ">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Informations Client <span className="text-pink-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nick Ezekiel</span></h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Modifier</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
                    <div>
                        <p className="text-sm font-semibold">Nom</p>
                        <p>Madu</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Prénom</p>
                        <p>Nick Ezekiel</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Sexe</p>
                        <p>Masculin</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Code promo</p>
                        <p className="bg-gray-200 px-2 py-1 rounded-md inline-block">Inactif</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Adresse</p>
                        <p>NA</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Ville</p>
                        <p>Libreville</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Contact</p>
                        <p>nickezekiel@ignislab.com</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Contact</p>
                        <p>+24174383860</p>
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mt-6 border-b pb-2">Informations compte</h3>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
                    <div>
                        <p className="text-sm font-semibold">Accès</p>
                        <p>Airtel Money - Clés des identifiants developer portal</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Clé</p>
                        <p>unoINcfhNu9Okq0QvKLuLMsOABZUi9J</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Commerce Actuel</p>
                        <p>Aucun</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Utilisation du système</p>
                        <p>Dernière connexion le 24/09/2021 à 15h38</p>
                        <p>Dernière activité le 24/09/2021 à 16h48</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Nombre de portefeuilles</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">État du compte</p>
                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md inline-block">Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
};