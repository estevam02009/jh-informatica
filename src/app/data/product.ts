import type { Product } from '../types/Product';

export const products: Product[] = [
    {
        id: '1',
        name: 'Microsoft Office 365',
        price: 99.99,
        description: 'Suite completa de produtividade com Word, Excel, PowerPoint e mais. Inclui atualizações contínuas.',
        image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Produtividade',
        licenseTypes: ['Pessoal', 'Familiar', 'Empresarial'],
        platforms: ['Windows', 'macOS', 'iOS', 'Android'],
        featured: true,
        developer: 'Microsoft',
        releaseDate: '2023-01-15'
    },
    {
        id: '2',
        name: 'Adobe Photoshop 2023',
        price: 249.99,
        description: 'Software profissional de edição de imagens com recursos avançados para designers e fotógrafos.',
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Design',
        licenseTypes: ['Individual', 'Estudante', 'Empresarial'],
        platforms: ['Windows', 'macOS'],
        featured: true,
        developer: 'Adobe',
        releaseDate: '2023-03-22'
    },
    {
        id: '3',
        name: 'Antivírus Premium',
        price: 59.99,
        description: 'Proteção completa contra vírus, malware e ransomware. Inclui firewall e proteção de identidade.',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Segurança',
        licenseTypes: ['1 Dispositivo', '3 Dispositivos', '5 Dispositivos'],
        platforms: ['Windows', 'macOS', 'Android'],
        featured: false,
        developer: 'Norton',
        releaseDate: '2023-05-10'
    },
    {
        id: '4',
        name: 'Windows 11 Pro',
        price: 199.99,
        description: 'Sistema operacional mais recente da Microsoft com interface moderna e recursos avançados de segurança.',
        image: 'https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Sistema Operacional',
        licenseTypes: ['OEM', 'Retail', 'Volume'],
        platforms: ['PC'],
        featured: true,
        developer: 'Microsoft',
        releaseDate: '2021-10-05'
    },
    {
        id: '5',
        name: 'AutoCAD 2023',
        price: 1299.99,
        description: 'Software profissional para design e documentação 2D/3D com ferramentas avançadas de modelagem.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Engenharia',
        licenseTypes: ['Anual', 'Perpétua', 'Rede'],
        platforms: ['Windows', 'macOS'],
        featured: false,
        developer: 'Autodesk',
        releaseDate: '2023-04-15'
    },
    {
        id: '6',
        name: 'QuickBooks Pro',
        price: 349.99,
        description: 'Software de contabilidade e gestão financeira para pequenas e médias empresas.',
        image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Finanças',
        licenseTypes: ['Básico', 'Pro', 'Enterprise'],
        platforms: ['Windows', 'macOS', 'Web'],
        featured: true,
        developer: 'Intuit',
        releaseDate: '2023-02-28'
    }
];