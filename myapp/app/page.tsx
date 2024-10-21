import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nectarios from '../assets/nectarios.jpg';
import paissios from '../assets/paissios.jpg';
import porphyreGaza from '../assets/PorphyreGaza.jpg';

export default function Home() {
    return (
        <div>
            <header className="w-full text-center p-4 bg-gray-100 shadow-md mb-4">
                <h1 className="font-semibold text-4xl text-gray-800">Mes Saints favoris</h1>
            </header>

            <div className="max-w-5xl mx-auto">
                <div className="space-y-6">
                  <Link href="/paissios" className="block">
                    <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                        <Image 
                            src={paissios} 
                            alt="Saint Païssios du Mont Athos" 
                            width={100} // Remplace avec la largeur réelle
                            height={133.922} // Remplace avec la hauteur réelle
                            className="rounded-lg object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Saint Païssios du Mont Athos</h2>
                            <p className="text-lg text-gray-500">« Le Christ frappe à la porte du cœur, et le diable à celle de l'esprit. »</p>
                        </div>
                    </div>
                  </Link>
                    <Link href="/gaza" className="block">
                      <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                          <Image 
                              src={porphyreGaza} 
                              alt="Saint Porphyre de Gaza" 
                              width={100} 
                              height={133.922} 
                              className="rounded-lg object-cover"
                          />
                          <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Saint Porphyre de Gaza</h2>
                              <p className="text-lg text-gray-500">« La vérité est dans l'Orthodoxie. Je l'ai vécue et je la connais par la grâce de Dieu. Il y a beaucoup de lumières que l'homme voit et qui l'impressionnent, mais une seule est la vraie lumière. »</p>
                          </div>
                      </div>
                    </Link>
                      <Link href="/nectaire" className="block">
                        <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                            <Image 
                                src={nectarios} 
                                alt="Saint Nectaire d'Égine" 
                                width={100} 
                                height={133.922} 
                                className="rounded-lg object-cover"
                            />
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Saint Nectaire d'Égine</h2>
                                <p className="text-lg text-gray-500">« Malheur à moi si ma foi dépendait des hommes. »</p>
                            </div>
                         </div>
                      </Link>
                    </div>
                </div>
          </div>
        );
    }
