'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/authcontext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Download, FileType, File, LogOut } from 'lucide-react';

interface DownloadItem {
  id: string;
  name: string;
  description: string;
  fileSize: string;
  fileType: string;
  icon: React.ReactNode;
  downloadUrl: string;
}

export default function Downloads() {
  const router = useRouter();
  const { user, logout } = useAuth();

  // Sample download items
  const downloadItems: DownloadItem[] = [
    {
      id: '1',
      name: 'Manual do Usuário - Office Pro',
      description: 'Guia completo para utilização do Office Pro com dicas e tutoriais.',
      fileSize: '2.5 MB',
      fileType: 'PDF',
      icon: <FileType className="h-8 w-8 text-red-500" />,
      downloadUrl: '#'
    },
    {
      id: '2',
      name: 'Atualização de Segurança - Antivírus Premium',
      description: 'Pacote de atualização para a versão mais recente do Antivírus Premium.',
      fileSize: '15 MB',
      fileType: 'EXE',
      icon: <File className="h-8 w-8 text-blue-500" />,
      downloadUrl: '#'
    },
    {
      id: '3',
      name: 'Planilha de Controle Financeiro',
      description: 'Template para controle financeiro pessoal e empresarial.',
      fileSize: '1.2 MB',
      fileType: 'XLSX',
      icon: <FileType className="h-8 w-8 text-green-500" />,
      downloadUrl: '#'
    },
    {
      id: '4',
      name: 'Drivers de Impressora HP',
      description: 'Pacote de drivers atualizados para impressoras HP.',
      fileSize: '45 MB',
      fileType: 'ZIP',
      icon: <File className="h-8 w-8 text-purple-500" />,
      downloadUrl: '#'
    },
  ];

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-white flex flex-col">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Área de Downloads</h1>
              <p className="mt-2 text-gray-600">Bem-vindo, {user?.name}! Aqui você encontra todos os arquivos exclusivos para clientes.</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Voltar para Home
              </button>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                <LogOut className="-ml-1 mr-2 h-4 w-4" />
                Sair
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloadItems.map((item) => (
              <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.fileType} • {item.fileSize}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="-ml-1 mr-2 h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
    </ProtectedRoute>
  );
}