import sapLogo from 'figma:asset/c9abc9544e6f5a5b70e5eec942b60f8010decd05.png';
import vistexLogo from 'figma:asset/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import plexLogo from 'figma:asset/7de126a42128b3415fbb82c656b7d3d3e3e932bd.png';
import siebelLogo from 'figma:asset/b90c03a57ba77a183f10ad49c663a6b123f7f0e0.png';

export function TechnologyLogos() {
  const technologies = [
    { name: 'SAP', logo: sapLogo, hasWhiteBg: false },
    { name: 'Vistex', logo: vistexLogo, hasWhiteBg: false },
    { name: 'Plex', logo: plexLogo, hasWhiteBg: true },
    { name: 'Siebel', logo: siebelLogo, hasWhiteBg: false },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center justify-center transition-all duration-300 group"
        >
          {tech.logo ? (
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="h-[32px] md:h-[40px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{
                maxWidth: '140px',
              }}
            />
          ) : (
            <div className="text-black/60 text-[20px] md:text-[24px] font-medium tracking-tight group-hover:text-black transition-colors">
              {tech.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}