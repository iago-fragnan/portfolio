import Image from "next/image";
import pfp from "../../public/assets/imgs/pfp.png";
import informations from "../../public/assets/content/information.json";

import linkedinIcon from "../../public/assets/svg/linkedin.svg";
import instagramIcon from "../../public/assets/svg/instagram.svg";
import youtubeIcon from "../../public/assets/svg/youtube.svg";
import githubIcon from "../../public/assets/svg/github.svg";
import emailIcon from "../../public/assets/svg/email.svg";

const socials = [
  {
    name: "LinkedIn",
    href: informations.social_medias.linkedin,
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    href: informations.social_medias.instagram,
    icon: instagramIcon,
  },
  {
    name: "YouTube",
    href: informations.social_medias.youtube,
    icon: youtubeIcon,
  },
  {
    name: "GitHub",
    href: informations.social_medias.github,
    icon: githubIcon,
  },
  {
    name: "E-mail",
    href: "mailto:" + informations.social_medias.email,
    icon: emailIcon,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#202020] px-6 text-white">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="group relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            src={pfp}
            alt="Me"
            width={144}
            height={144}
            priority
            className="relative rounded-full ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          {informations.name}
        </h1>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/50">
          {informations["pt-BR"].role}
        </p>

        <div className="mt-8 flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.25)]"
            >
              <Image src={s.icon} alt={s.name} width={20} height={20} className="h-5 w-5 invert" />
            </a>
          ))}
        </div>


      </div>
    </main >
  );
}