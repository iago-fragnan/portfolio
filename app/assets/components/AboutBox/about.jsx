'use client';
import Image from "next/image";
import { motion } from "framer-motion"; //


import PFP from "/public/assets/imgs/pfp-sem-bg.webp";
import email from "/public/assets/svg/email.svg";
import linkedin from "/public/assets/svg/linkedin.svg";
import telephone from "/public/assets/svg/telephone.svg";
import whatsapp from "/public/assets/svg/whatsapp.svg";

import youtube from "/public/assets/svg/youtube.svg";
import instagram from "/public/assets/svg/instagram.svg";
import discord from "/public/assets/svg/discord.svg";
import github from "/public/assets/svg/github.svg";
import cv from "/public/assets/svg/paper-cv.svg";

import AboutFooterItem from "./aboutFooterItem";
import AboutItem from "./aboutItem";


export default function AboutBox() {
    return (
        <>
            <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }} 
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 31, 
                }}
            >
                <div className="bg-[#202020] drop-shadow-lg border border-[#505050] border-opacity-50 rounded-lg p-2 w-[19rem] h-fit">

                    <div className="py-2 w-1/2 mt-12 mb-2 mx-auto rounded-full justify-items-center bg-[#191919]">
                        <Image className="rounded-full select-none drop-shadow-lg shadow-lg pointer-events-none mx-auto" src={PFP} alt="My Profile Picture" width={128} height={128} />
                    </div>

                    <div className="leading-3">

                        <h1 className="text-white text-2xl leading-2 text-center inter-bold">Iago Fragnan</h1>
                        <h2 className="text-white text-base leading-2 inter-bold mx-auto mt-2 bg-[#191919] text-center w-2/3 rounded-lg p-2 select-none">Backend Developer</h2>

                        <hr className="w-56 mx-auto mt-5 opacity-25 bg-[#191919]" />

                        <div className="flex flex-col gap-2 mt-3">


                            <AboutItem icon={email} title="Email:" value="iago.fragnan@gmail.com" ref="mailto:iago.fragnan@gmail.com" />

                            <AboutItem icon={linkedin} title="LinkedIn:" value="/iago-fragnan/" ref="https://www.linkedin.com/in/iago-fragnan/" />

                            <AboutItem icon={telephone} title="Telefone:" value="+55 (11) 97347-0563" ref="tel:+5511973470563" />

                            <AboutItem icon={whatsapp} title="WhatsApp:" value="Enviar Mensagem" ref="https://wa.me/+5511973470563" />

                        </div>

                    </div>

                    <hr className="w-56 mx-auto mt-5 mb-4 opacity-25 bg-[#191919]" />

                    <div className="grid grid-cols-5 w-3/4 mx-auto mb-14">
                        <AboutFooterItem icon={instagram} ref="https://www.instagram.com/iago.fragnan/" isDownloadable={false} />
                        <AboutFooterItem icon={youtube} ref="https://www.youtube.com/@iagofdev" isDownloadable={false} />
                        <AboutFooterItem icon={github} ref="https://github.com/iago-fragnan" isDownloadable={false} />
                        <AboutFooterItem icon={discord} ref="https://discord.gg/3UqkW3bpYp" isDownloadable={false} />
                        <AboutFooterItem icon={cv} ref="/assets/curriculo.pdf" isDownloadable={true} />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
