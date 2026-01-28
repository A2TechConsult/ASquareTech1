import medtronicLogo from 'figma:asset/e3c0a31cc16458fc7bd53a67b5c7a9cb41da28ec.png';
import officeDepotLogo from 'figma:asset/17a876490970448871e6331ad39dd508943d5a91.png';
import merckLogo from 'figma:asset/b94bdf3058fa32d0591cf6cbabe6def9f8a9b794.png';
import esselLogo from 'figma:asset/48c7d6157a7f96628520185f2034126fa0d42914.png';
import indoramaLogo from 'figma:asset/f4caa8eb37211ab3baa2ff040f55bbb14461b849.png';
import arcelorMittalLogo from 'figma:asset/e7f26c5422b66e66fb341a9ddd5de3dc7e5e3cf6.png';
import vistexLogo from 'figma:asset/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import paloAltoLogo from 'figma:asset/c883d496abdd9049db6833f8fe67a53933877efe.png';
import mohawkLogo from 'figma:asset/0d0273bdcd269ab4651431a5d15db826df51af00.png';

export function ClientLogos() {
  const clients = [
    {
      name: 'Medtronic',
      logo: medtronicLogo,
      url: 'https://www.medtronic.com',
    },
    {
      name: 'Mohawk',
      logo: mohawkLogo,
      url: 'https://www.mohawkind.com',
    },
    {
      name: 'Merck',
      logo: merckLogo,
      url: 'https://www.merck.com',
    },
    {
      name: 'Office Depot',
      logo: officeDepotLogo,
      url: 'https://www.officedepot.com',
    },
    {
      name: 'Essel',
      logo: esselLogo,
      url: 'https://www.esselpropack.com',
    },
    {
      name: 'ArcelorMittal',
      logo: arcelorMittalLogo,
      url: 'https://www.arcelormittal.com',
    },
    {
      name: 'Palo Alto Networks',
      logo: paloAltoLogo,
      url: 'https://www.paloaltonetworks.com',
    },
    {
      name: 'Vistex',
      logo: vistexLogo,
      url: 'https://www.vistex.com',
    },
    {
      name: 'Indo Rama',
      logo: indoramaLogo,
      url: 'https://www.indorama.com',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
      {clients.map((client) => (
        <a
          key={client.name}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 rounded-lg border border-black/5 bg-white hover:border-black/15 transition-all group hover:shadow-md"
        >
          {client.logo ? (
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
              style={{
                maxHeight: '60px',
                width: 'auto',
              }}
            />
          ) : (
            <div className="text-center text-black/40 text-[14px] md:text-[15px] font-medium tracking-tight group-hover:text-black/70 transition-colors">
              {client.name}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}