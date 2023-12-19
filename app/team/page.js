import Image from 'next/image';
import ALISHAN from '../../public/all.png';
import NASIR from '../../public/nasir.png';
import FASIH from '../../public/fasih.png';
// import SIDRA from '../../public/sidra.png';
import SIDRA from '../../public/sid1.png';
import FARZEEN from '../../public/farzeen.png';
import Aneeq from '../../public/aneeq.png';
import ZEESHAN from '../../public/zeeshan.png';
import SERENA from '../../public/serena.png';
import ALI from '../../public/ali.png';
import PERVEZ from '../../public/pervez.png';
import Mutahar from '../../public/Mutahar.png';
import Maria from '../../public/maria.png';
import Rehmat from '../../public/rehmat.png';
import Shehriyar from '../../public/shehriyar.png';

// Define an array of team members with their information
const teamMembers = [
  {
    name: 'Fasih Uddin',
    role: 'Founder and CEO',
    imageSrc: FASIH,
  },
  {
    name: 'Sidra Rehman',
    role: 'CoFounder - Team Media IT LEAD',
    imageSrc: SIDRA,
  },
  {
    name: 'Zeeshan Ali',
    role: 'CoFounder - Team Planning Lead',
    imageSrc: ZEESHAN,
  },
  {
    name: 'Farzeen Saleem',
    role: 'CoFounder - Team Communication Lead',
    imageSrc: FARZEEN,
  },
  {
    name: 'Ali Mohammad',
    role: 'CoFounder - Team Finance Lead',
    imageSrc: ALI,
  },
];

const otherTeamMembers = [
  {
    name: 'Ali Shan',
    role: 'Team Media and IT',
    imageSrc: ALISHAN,
  },
  {
    name: 'Nasir Ullah Baig',
    role: 'Team Media and IT',
    imageSrc: NASIR,
  },
  {
    name: 'Serena Akbar',
    role: 'Team Finance',
    imageSrc: SERENA,
  },
  {
    name: 'Pervez Uddin',
    role: 'Team Media and IT',
    imageSrc: PERVEZ,
  },
  {
    name: 'Maria Kousar',
    role: 'Team Finance',
    imageSrc: Maria,
  },
  {
    name: 'Mutahar Hussain',
    role: 'Team Communication',
    imageSrc: Mutahar,
  },
  {
    name: 'Rehmat Karim',
    role: 'Team Communication',
    imageSrc: Rehmat,
  },
  {
    name: 'Shehriyar Ali',
    role: 'Team Planning',
    imageSrc: Shehriyar,
  },
  {
    name: 'Aneeq Ahmad',
    role: 'Team Communication',
    imageSrc: Aneeq,
  },
];

function TeamMember({ name, role, imageSrc }) {
  return (
    <div>
      <div className="hover:shadow-2xl relative rounded-full shadow bg-[#135858] overflow-hidden">
        <Image
          className="relative w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
          src={imageSrc}
          alt={name}
        />
      </div>
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold font-pop">{name}</p>
        <p className="mb-5 text-xs text-gray-800">{role}</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <span className="fa-brands fa-linkedin text-xl"></span>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <span className="fa-brands fa-twitter text-xl"></span>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <span className="fa-regular fa-envelope text-xl"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Leads() {
  return (
    <div className="grid w-[100%] gap-5 mx-auto pb-10 grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
}

function OtherTeam() {
  return (
    <div className="grid grid-cols-2 md:gap-4 sm:grid-cols-5 lg:grid-cols-5 lg:max-w-screen-lg mx-auto text-center">
      {otherTeamMembers.map((member, index) => (
        <div key={index} className="flex flex-col px-2 md:px-0 items-center py-4 mt-10 sm:mt-0">
          <div className="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
            <Image
              className="relative w-[160px] h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
              src={member.imageSrc}
              alt={member.name}
            />
          </div>
          <p className="text-lg font-bold mt-3 font-pop">{member.name}</p>
          <p className="text-xs text-gray-800">{member.role}</p>
        </div>
      ))}
    </div>
  );
}


export default function TEAM() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-6xl md:px-8 lg:px-2">
      <div className="mx-auto lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
          Sharar Organization Leads
        </p>
      </div>
      <Leads />
      <hr />
      <div className="mx-auto pt-4 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px  text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
          Our Team
        </p>
      </div>
      <OtherTeam />
    </div>
  );
}
