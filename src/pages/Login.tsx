import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { z } from 'zod';
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginSchema = z.object({
        email: z.string().email('Veuillez entrer un email valide').min(1, 'L\'email est requis'),
        password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').min(1, 'Le mot de passe est requis'),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
            const errorMessages = result.error.errors.map((err) => err.message).join('\n');
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: errorMessages,
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Connexion réussie!',
            });
        }
        if (email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Veuillez remplir tous les champs.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Connexion réussie!',
            });
            window.location.href = '/dashboard';
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-image bg-cover bg-center" />
            <div className="bg-[#07043880] p-10 rounded-lg shadow-xl backdrop-blur-sm w-full max-w-md relative z-10">
                <div className="flex justify-center mb-8">
                    <h1 className="text-3xl font-bold text-white ml-2">Connexion</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                        />
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-white/70 hover:text-white text-sm">
                            Mot de passe oublié?
                        </a>
                    </div>
                    <div className="flex gap-4 pt-2">
                        <button
                            type="submit"
                            className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                        >
                            Se connecter
                        </button>
                        <button
                            type="button"
                            className="flex-1 bg-white/10 text-white py-2 px-4 rounded hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Créer un compte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
