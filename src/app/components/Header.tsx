// import Link from 'next/link'

// export default function Header() {
//   return (
//     <header className="fixed w-full z-10 animate-fadeIn">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="backdrop-blur-md bg-white bg-opacity-5 rounded-full px-6 py-3 flex justify-between items-center">
            
//           <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
//           <img 
//               src="./pulse.png" 
//               alt="Pulse Protocol Logo" 
//               className="h-15 w-10 object-contain rounded-3xl" 
//             />
//             Pulse Protocol
//           </Link>
//           <div className="space-x-6">
//             <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
//             <Link href="#details" className="hover:text-gray-300 transition-colors">Details</Link>
//             <Link href="https://abhays-organization-2.gitbook.io/pulse-protocol-docs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Docs</Link>
//             <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full z-10 animate-fadeIn">
      <nav className="container mx-auto px-6 py-4">
        <div className="backdrop-blur-md bg-white bg-opacity-5 rounded-full px-6 py-3 flex justify-between items-center">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors">
            <img 
              src="./pulse.png" 
              alt="Pulse Protocol Logo" 
              className="h-13 w-10 object-contain rounded-3xl" 
            />
            <span className="text-2xl font-bold">Pulse Protocol</span>
          </Link>

          {/* Navigation Links */}
          <div className="space-x-6">
            <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="#details" className="hover:text-gray-300 transition-colors">Details</Link>
            <Link 
              href="https://abhays-organization-2.gitbook.io/pulse-protocol-docs/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition-colors"
            >
              Docs
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
